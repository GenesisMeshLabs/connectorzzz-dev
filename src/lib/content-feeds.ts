import { articles, videos } from "@/content/genesismesh";
import { siteLinks } from "@/content/site";

export type FeedVideo = {
  title: string;
  videoId: string;
  published: string;
  updated: string;
  summary: string;
  thumbnailUrl: string;
};

export type FeedArticle = {
  title: string;
  href: string;
  channel: string;
  summary: string;
};

const youtubeFeedUrl =
  "https://www.youtube.com/feeds/videos.xml?channel_id=UCXwK8VWAwnlI_0zmXcuywYA";

const fallbackVideos: FeedVideo[] = videos.map((video) => ({
  ...video,
  updated: video.published,
  thumbnailUrl: `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`,
}));

function decodeEntities(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\\u002F/g, "/")
    .replace(/\\u0026/g, "&");
}

function stripTags(value: string) {
  return decodeEntities(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function excerpt(value: string, limit = 220) {
  const clean = value.replace(/\s+/g, " ").trim();
  if (clean.length <= limit) {
    return clean;
  }

  const trimmed = clean.slice(0, limit);
  return `${trimmed.slice(0, Math.max(trimmed.lastIndexOf(" "), 80)).trim()}...`;
}

function matchTag(block: string, tag: string) {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
  return match ? stripTags(match[1]) : "";
}

function matchAttribute(block: string, tag: string, attribute: string) {
  const tagMatch = block.match(new RegExp(`<${tag}[^>]*>`, "i"));
  if (!tagMatch) {
    return "";
  }

  const attributeMatch = tagMatch[0].match(new RegExp(`${attribute}="([^"]+)"`, "i"));
  return attributeMatch ? decodeEntities(attributeMatch[1]) : "";
}

export async function getYoutubeVideos(): Promise<FeedVideo[]> {
  try {
    const response = await fetch(youtubeFeedUrl, {
      cache: "no-store",
      headers: { Accept: "application/atom+xml, application/xml;q=0.9, */*;q=0.8" },
    });

    if (!response.ok) {
      return fallbackVideos;
    }

    const xml = await response.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
    const parsed = entries
      .map((entry) => {
        const block = entry[1];
        const videoId = matchTag(block, "yt:videoId");
        const title = matchTag(block, "title");
        const published = matchTag(block, "published").slice(0, 10);
        const updated = matchTag(block, "updated");
        const thumbnailUrl =
          matchAttribute(block, "media:thumbnail", "url") ||
          `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
        const summary = excerpt(
          matchTag(block, "media:description") || "Watch this Genesis Mesh video on YouTube.",
        );

        return videoId && title
          ? {
              title,
              videoId,
              published: published || "Latest",
              updated,
              summary,
              thumbnailUrl,
            }
          : null;
      })
      .filter((video): video is FeedVideo => Boolean(video));

    return parsed.length ? parsed : fallbackVideos;
  } catch {
    return fallbackVideos;
  }
}

function extractJsonString(source: string, key: string) {
  const match = source.match(new RegExp(`"${key}"\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`, "i"));
  return match ? decodeEntities(match[1].replace(/\\"/g, '"')) : "";
}

function titleFromSlug(url: string) {
  const slug = url.split("/").pop()?.replace(/-\d+$/, "") ?? "Genesis Mesh article";
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function articleKey(article: Pick<FeedArticle, "title" | "href">) {
  return `${article.title.toLowerCase()}|${article.href}`;
}

export async function getPatreonArticles(): Promise<FeedArticle[]> {
  const fallbackArticles = articles.map(({ title, href, channel, summary }) => ({
    title,
    href,
    channel,
    summary,
  }));

  try {
    const response = await fetch(siteLinks.patreon, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "text/html,application/xhtml+xml",
        "User-Agent": "ConnectorzzzDev/1.0 (+https://dev.connectorzzz.com)",
      },
    });

    if (!response.ok) {
      return fallbackArticles;
    }

    const html = await response.text();
    const urls = [
      ...new Set(
        [...html.matchAll(/https:\/\/www\.patreon\.com\/GenesisMeshLabs\/posts\/[^"'<\\\s]+/g)]
          .map((match) => decodeEntities(match[0]).split("?")[0])
          .filter((url) => !url.includes("/comments")),
      ),
    ];

    const parsed = urls.map((href) => {
      const fallback = fallbackArticles.find((article) => article.href === href);
      const index = html.indexOf(href.replace(/\//g, "\\u002F")) >= 0
        ? html.indexOf(href.replace(/\//g, "\\u002F"))
        : html.indexOf(href);
      const nearby = index >= 0 ? html.slice(Math.max(0, index - 5000), index + 5000) : "";
      const extractedTitle = extractJsonString(nearby, "title");
      const title =
        fallback && (!extractedTitle || extractedTitle.length < fallback.title.length)
          ? fallback.title
          : extractedTitle || titleFromSlug(href);
      const summary =
        excerpt(
          extractJsonString(nearby, "contentTeaserText") ||
            extractJsonString(nearby, "description") ||
            fallback?.summary ||
            "",
        ) ||
        "Read this Genesis Mesh article on Patreon.";

      return {
        title,
        href,
        channel: "Patreon",
        summary,
      };
    });

    if (!parsed.length) {
      return fallbackArticles;
    }

    const merged = [...fallbackArticles];
    for (const liveArticle of parsed) {
      const exactIndex = merged.findIndex((article) => article.href === liveArticle.href);
      if (exactIndex >= 0) {
        merged[exactIndex] = {
          ...merged[exactIndex],
          href: liveArticle.href,
          summary: liveArticle.summary || merged[exactIndex].summary,
        };
        continue;
      }

      if (!merged.some((article) => article.title.toLowerCase() === liveArticle.title.toLowerCase())) {
        merged.push(liveArticle);
      }
    }

    return [...new Map(merged.map((article) => [articleKey(article), article])).values()];
  } catch {
    return fallbackArticles;
  }
}

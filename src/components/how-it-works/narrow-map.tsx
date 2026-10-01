"use client";

import { ChevronDown, Minus, Plus } from "lucide-react";
import {
  conceptsById,
  groupsById,
  relations,
  stories,
  type StageNode,
} from "@/content/how-genesis-mesh-works";
import { BreakableName } from "./blocks";
import { idInView } from "./graph";
import type { MapInteraction } from "./wide-map";

const bridges = relations.filter((relation) => relation.kind === "bridge");

const columnClasses: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4",
};

/**
 * Phone and tablet layout: the same stages in the same order, stacked
 * vertically. Switching views collapses the story that is not in view, so
 * nothing jumps around.
 */
export function NarrowMap({ interaction }: { interaction: MapInteraction }) {
  const { view, onSelect, selectedId, highlight } = interaction;

  return (
    <div className="grid">
      {stories.map((story, storyIndex) => {
        const open = view === "full-model" || view === story.id;
        const frameConcept = conceptsById[story.frameConcept];

        return (
          <div key={story.id} className="grid">
            {storyIndex === 1 ? (
              <Collapsible open={view === "full-model"}>
                <section aria-label="Bridges between the stories" className="py-4">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-ink">
                    Where the stories connect
                  </p>
                  <ul className="mt-3 grid gap-2">
                    {bridges.map((relation) => {
                      const lit =
                        highlight.size > 0 && highlight.has(relation.from) && highlight.has(relation.to);
                      return (
                        <li key={`${relation.from}-${relation.to}`}>
                          <button
                            type="button"
                            onClick={() => onSelect(relation.to)}
                            className={[
                              "w-full rounded-md border border-dashed px-3 py-2 text-left text-[13px] transition",
                              lit ? "border-accent-ink bg-accent/10" : "border-accent-ink/35 hover:border-accent-ink",
                            ].join(" ")}
                          >
                            <span className="font-semibold text-ink">{conceptsById[relation.from].name}</span>
                            <span className="text-accent-ink"> → </span>
                            <span className="font-semibold text-ink">{conceptsById[relation.to].name}</span>
                            <span className="mt-0.5 block text-xs text-ink-400">{relation.label}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              </Collapsible>
            ) : null}

            <Collapsible open={open}>
              <section
                aria-label={story.title}
                className="rounded-xl border border-dashed border-ink/15 bg-ink/[0.015] p-3 sm:p-4"
              >
                <button
                  type="button"
                  onClick={() => onSelect(story.frameConcept)}
                  className={[
                    "flex w-full items-baseline justify-between gap-3 rounded-md px-2 py-1.5 text-left transition",
                    selectedId === story.frameConcept ? "bg-accent text-on-accent" : "hover:bg-ink/[0.06]",
                  ].join(" ")}
                >
                  <span className="text-sm font-semibold">{frameConcept.name}</span>
                  {story.label !== frameConcept.name ? (
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] opacity-70">
                      {story.label}
                    </span>
                  ) : null}
                </button>

                <div className="mt-3 grid">
                  {story.stages.map((stage, stageIndex) => (
                    <div key={stage.id} className="grid">
                      {stageIndex > 0 ? <Connector /> : null}
                      {stage.label ? (
                        <p className="mb-2 font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink-500">
                          {stage.label}
                        </p>
                      ) : null}
                      <div
                        className={[
                          "grid gap-2",
                          columnClasses[stage.nodes.length] ?? "mx-auto w-full max-w-sm",
                        ].join(" ")}
                      >
                        {stage.nodes.map((node) => (
                          <NarrowNode key={node.id} node={node} interaction={interaction} />
                        ))}
                      </div>
                      {stage.nodes
                        .filter((node) => node.details?.length && interaction.expanded.has(node.id))
                        .map((node) => (
                          <div key={`${node.id}-details`} className="mt-3 rounded-lg bg-ink/[0.03] p-2">
                            {node.detailsLabel ? (
                              <p className="mb-2 px-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink-500">
                                {node.detailsLabel}
                              </p>
                            ) : null}
                            <div className="flex flex-wrap gap-2">
                              {node.details!.map((detail) => (
                                <DetailChip key={detail} id={detail} interaction={interaction} />
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </section>
            </Collapsible>
          </div>
        );
      })}
    </div>
  );
}

function Collapsible({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <div
      className="grid transition-[grid-template-rows,opacity] duration-500 ease-out"
      style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
      inert={!open}
    >
      <div className="min-h-0 overflow-hidden">{children}</div>
    </div>
  );
}

function Connector() {
  return (
    <div aria-hidden="true" className="relative mx-auto mt-3 h-6 w-px bg-ink/15">
      <span className="hiw-drop absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent-ink" />
    </div>
  );
}

function NarrowNode({ node, interaction }: { node: StageNode; interaction: MapInteraction }) {
  const { selectedId, highlight, expanded, onSelect, onToggle, view } = interaction;
  const open = expanded.has(node.id);
  const count = node.details?.length ?? 0;
  const group = groupsById[node.id];

  if (group) {
    return (
      <button
        type="button"
        onClick={() => onToggle(node.id)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 rounded-lg border border-dashed border-ink/25 bg-surface px-3 py-2.5 text-left transition hover:border-accent-ink/70"
      >
        <span className="min-w-0">
          <span className="block text-[13px] leading-5 font-semibold text-ink">{group.name}</span>
          <span className="block text-xs text-ink-400">{count} concepts</span>
        </span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={["shrink-0 text-ink-400 transition-transform", open ? "rotate-180" : ""].join(" ")}
        />
      </button>
    );
  }

  const concept = conceptsById[node.id];
  const selected = selectedId === node.id;
  const dimmed = highlight.size > 0 && idInView(node.id, view) && !highlight.has(node.id);

  return (
    <div className="relative min-w-0 transition-opacity duration-300" style={{ opacity: dimmed ? 0.6 : 1 }}>
      <button
        type="button"
        onClick={() => onSelect(node.id)}
        aria-pressed={selected}
        className={[
          "flex h-full w-full flex-col rounded-lg border px-3 py-2.5 text-left transition",
          count ? "pb-4" : "",
          selected
            ? "border-accent-ink bg-surface shadow-[0_0_0_3px_color-mix(in_oklab,var(--accent)_28%,transparent)]"
            : "border-ink/15 bg-surface hover:border-accent-ink/70",
        ].join(" ")}
      >
        {node.tag ? (
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-accent-ink">
            {node.tag}
          </span>
        ) : null}
        <span className="text-[13.5px] leading-5 font-semibold text-ink [overflow-wrap:anywhere]">
          <BreakableName name={concept.name} />
        </span>
        <span className="mt-0.5 text-xs leading-4 text-ink-400">{concept.tagline}</span>
      </button>
      {count ? (
        <button
          type="button"
          onClick={() => onToggle(node.id)}
          aria-expanded={open}
          aria-label={`${open ? "Hide" : "Show"} ${count} detail concepts for ${concept.name}`}
          className={[
            "absolute -bottom-2.5 left-1/2 flex h-6 -translate-x-1/2 items-center gap-0.5 rounded-full border px-2 font-mono text-[11px] font-bold transition",
            open
              ? "border-accent-ink bg-accent text-on-accent"
              : "border-ink/20 bg-surface text-ink-300 hover:border-accent-ink hover:text-accent-ink",
          ].join(" ")}
        >
          {open ? <Minus size={11} aria-hidden="true" /> : <Plus size={11} aria-hidden="true" />}
          {count}
        </button>
      ) : null}
    </div>
  );
}

function DetailChip({ id, interaction }: { id: string; interaction: MapInteraction }) {
  const { selectedId, highlight, onSelect } = interaction;
  const selected = selectedId === id;
  const dimmed = highlight.size > 0 && !highlight.has(id);

  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      aria-pressed={selected}
      className={[
        "rounded-md border px-3 py-1.5 text-[13px] font-semibold transition",
        selected
          ? "border-accent-ink bg-accent text-on-accent"
          : "border-ink/15 bg-surface-raised text-ink hover:border-accent-ink/70",
      ].join(" ")}
      style={{ opacity: dimmed ? 0.6 : 1 }}
    >
      {conceptsById[id].name}
    </button>
  );
}

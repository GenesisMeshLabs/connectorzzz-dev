"use client";

import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { conceptsById, mentalModel } from "@/content/how-genesis-mesh-works";

const STEP_MS = 2800;

/**
 * The guide's mental-model questions as a stepper. Each question lights up
 * the concepts that answer it, so the model reads before the terminology.
 */
export function MentalModelRail({
  activeStep,
  onStep,
  onSelect,
}: {
  activeStep: number | null;
  onStep: (step: number | null) => void;
  onSelect: (id: string) => void;
}) {
  const [playing, setPlaying] = useState(false);
  const steps = mentalModel.steps;

  useEffect(() => {
    if (!playing) {
      return;
    }
    const timer = window.setTimeout(() => {
      const next = activeStep === null ? 0 : activeStep + 1;
      if (next >= steps.length) {
        setPlaying(false);
        return;
      }
      onStep(next);
    }, activeStep === null ? 0 : STEP_MS);
    return () => window.clearTimeout(timer);
  }, [playing, activeStep, onStep, steps.length]);

  const current = activeStep === null ? null : steps[activeStep];

  return (
    <section aria-label={mentalModel.title} className="rounded-lg border border-ink/10 bg-surface p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-ink">
          {mentalModel.title}
        </h2>
        <div className="flex items-center gap-2">
          {activeStep !== null ? (
            <button
              type="button"
              onClick={() => {
                setPlaying(false);
                onStep(null);
              }}
              className="h-8 rounded-md px-3 text-xs font-semibold text-ink-400 transition hover:text-ink"
            >
              Clear
            </button>
          ) : null}
          <button
            type="button"
            onClick={() => {
              if (playing) {
                setPlaying(false);
                return;
              }
              if (activeStep !== null && activeStep >= steps.length - 1) {
                onStep(null);
              }
              setPlaying(true);
            }}
            className="inline-flex h-8 items-center gap-2 rounded-md border border-ink/15 bg-ink/[0.05] px-3 text-xs font-semibold text-ink transition hover:border-accent-ink/70"
          >
            {playing ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
            {playing ? "Pause" : "Walk through"}
          </button>
        </div>
      </div>

      <ol className="-mx-1 mt-4 flex snap-x gap-1 overflow-x-auto px-1 pb-1 [scrollbar-width:thin] lg:flex-wrap lg:gap-y-2 lg:overflow-visible">
        {steps.map((step, index) => {
          const active = index === activeStep;
          const passed = activeStep !== null && index < activeStep;

          return (
            <li key={step.question} className="flex shrink-0 snap-start items-center gap-1">
              <button
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setPlaying(false);
                  onStep(active ? null : index);
                }}
                className={[
                  "rounded-md border px-3 py-2 text-left text-[13px] font-semibold transition",
                  active
                    ? "border-accent-ink bg-accent text-on-accent"
                    : passed
                      ? "border-accent-ink/40 bg-accent/10 text-ink"
                      : "border-ink/10 bg-ink/[0.03] text-ink-300 hover:border-accent-ink/60 hover:text-ink",
                ].join(" ")}
              >
                {step.question}
              </button>
              {index < steps.length - 1 ? (
                <span aria-hidden="true" className={passed || active ? "text-accent-ink" : "text-ink-500"}>
                  →
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>

      <div aria-live="polite" className="mt-3 min-h-6 text-sm leading-6 text-ink-400">
        {current ? (
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-semibold text-ink">{current.question}</span>
            <span aria-hidden="true">·</span>
            {current.concepts.map((id, index) => (
              <span key={id} className="inline-flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onSelect(id)}
                  className="font-semibold text-accent-ink underline-offset-4 hover:underline"
                >
                  {conceptsById[id].name}
                </button>
                {index < current.concepts.length - 1 ? <span aria-hidden="true">,</span> : null}
              </span>
            ))}
          </p>
        ) : (
          <p>{mentalModel.outro} Pick a question to see which concepts answer it.</p>
        )}
      </div>
    </section>
  );
}

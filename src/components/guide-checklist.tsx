"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { guideSteps } from "@/content/guide";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "dp-github-guide";

function loadDone(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, boolean>) : {};
  } catch {
    return {};
  }
}

export function GuideChecklist() {
  const [done, setDone] = useState<Record<string, boolean>>(loadDone);

  function toggle(id: string) {
    setDone((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  const completed = guideSteps.filter((s) => done[s.id]).length;

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        {completed} de {guideSteps.length} pasos hechos. El progreso se guarda en
        este navegador.
      </p>
      <ol className="space-y-3">
        {guideSteps.map((step, index) => {
          const checked = Boolean(done[step.id]);
          return (
            <li
              key={step.id}
              className={cn(
                "rounded-xl bg-card p-4 ring-1 ring-foreground/10",
                checked && "opacity-70",
              )}
            >
              <div className="flex items-start gap-3">
                <button
                  type="button"
                  onClick={() => toggle(step.id)}
                  aria-pressed={checked}
                  className={cn(
                    "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md border text-xs font-semibold",
                    checked
                      ? "border-emerald-500/40 bg-emerald-500/20 text-emerald-300"
                      : "border-border bg-background",
                  )}
                >
                  {index + 1}
                </button>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="font-medium">{step.title}</h3>
                    <span className="text-xs text-muted-foreground">
                      {step.time}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {step.detail}
                  </p>
                  {step.href ? (
                    <Button asChild variant="link" size="sm" className="mt-1 h-auto px-0">
                      <a
                        href={step.href}
                        target={step.href.startsWith("http") ? "_blank" : undefined}
                        rel={step.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {step.hrefLabel} →
                      </a>
                    </Button>
                  ) : null}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

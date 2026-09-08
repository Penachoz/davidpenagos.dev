import { cn } from "@/lib/utils";

export function ScoreCard({
  label,
  score,
  hint,
  tone,
}: {
  label: string;
  score: number;
  hint: string;
  tone: "bad" | "good";
}) {
  const r = 36;
  const c = 2 * Math.PI * r;
  const offset = c - (score / 100) * c;

  return (
    <div className="flex items-center gap-4 rounded-xl bg-card p-4 ring-1 ring-foreground/10">
      <svg width="88" height="88" viewBox="0 0 88 88" aria-hidden>
        <circle
          cx="44"
          cy="44"
          r={r}
          fill="none"
          stroke="currentColor"
          className="text-muted"
          strokeWidth="8"
        />
        <circle
          cx="44"
          cy="44"
          r={r}
          fill="none"
          stroke="currentColor"
          className={tone === "good" ? "text-emerald-400" : "text-orange-400"}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform="rotate(-90 44 44)"
        />
        <text
          x="44"
          y="49"
          textAnchor="middle"
          className="fill-foreground text-[18px] font-semibold"
        >
          {score}
        </text>
      </svg>
      <div>
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {label}
        </p>
        <p
          className={cn(
            "text-lg font-semibold",
            tone === "good" ? "text-emerald-400" : "text-orange-300",
          )}
        >
          {tone === "good" ? "Listo para recruiter" : "No contratable por GitHub"}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{hint}</p>
      </div>
    </div>
  );
}

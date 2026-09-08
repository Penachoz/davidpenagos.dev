import { HammerIcon } from "lucide-react";

export function MaintenanceScreen() {
  return (
    <section className="hero-shell relative flex min-h-svh items-center justify-center overflow-hidden px-5">
      <div className="hero-grid absolute inset-0" />
      <div className="hero-aurora hero-aurora-one" />
      <div className="hero-aurora hero-aurora-two" />

      <div className="relative flex max-w-xl flex-col items-center text-center">
        <span className="eyebrow-pill">
          <span className="status-pulse size-1.5 rounded-full bg-amber-400" />
          En mantenimiento
        </span>

        <HammerIcon
          aria-hidden
          className="mt-10 size-20 text-cyan-200/85 sm:size-24"
          strokeWidth={1.35}
        />

        <h1 className="mt-8 text-[clamp(2.4rem,8vw,4.5rem)] leading-[0.92] font-semibold tracking-[-0.06em]">
          mala mia
          <span className="mt-2 block text-white/40">— David</span>
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-white/45 sm:text-base">
          Estoy arreglando unas cosas. Vuelvo en un rato.
        </p>
      </div>
    </section>
  );
}

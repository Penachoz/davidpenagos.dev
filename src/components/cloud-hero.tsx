"use client";

import type { PointerEvent } from "react";

import {
  ActivityIcon,
  CloudIcon,
  DatabaseIcon,
  GitBranchIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "lucide-react";

const nodes = [
  { label: "SOURCE", x: 66, y: 89, Icon: GitBranchIcon },
  { label: "PIPELINE", x: 205, y: 48, Icon: ShieldCheckIcon },
  { label: "CLOUD", x: 350, y: 89, Icon: CloudIcon },
  { label: "COMPUTE", x: 485, y: 48, Icon: ServerIcon },
  { label: "DATA", x: 622, y: 89, Icon: DatabaseIcon },
] as const;

export function CloudHero() {
  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty("--pointer-x", `${x * 12}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${y * 12}px`);
  }

  return (
    <div
      className="cloud-console"
      onPointerMove={handlePointerMove}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty("--pointer-x", "0px");
        event.currentTarget.style.setProperty("--pointer-y", "0px");
      }}
    >
      <div className="console-glow" />
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-[#ff6b5f]" />
          <span className="size-2 rounded-full bg-[#ffc25b]" />
          <span className="size-2 rounded-full bg-[#53d58a]" />
        </div>
        <div className="font-mono text-[9px] tracking-[0.2em] text-white/35">
          DP / CLOUD MAP
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px] text-emerald-300/80">
          <span className="status-pulse size-1.5 rounded-full bg-emerald-400" />
          OPERATIONAL
        </div>
      </div>

      <div className="relative min-h-[320px] overflow-hidden px-3 py-8 sm:min-h-[390px]">
        <div className="console-orbit console-orbit-one" />
        <div className="console-orbit console-orbit-two" />

        <svg
          viewBox="0 0 690 180"
          className="architecture-map absolute top-1/2 left-1/2 w-[112%] max-w-none -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="path-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#56d5ff" stopOpacity=".15" />
              <stop offset="50%" stopColor="#8b8cff" stopOpacity=".75" />
              <stop offset="100%" stopColor="#56d5ff" stopOpacity=".15" />
            </linearGradient>
            <filter id="packet-glow">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            id="data-path"
            d="M66 89 C122 89 146 48 205 48 S292 89 350 89 425 48 485 48 564 89 622 89"
            fill="none"
            stroke="url(#path-gradient)"
            strokeWidth="1.5"
            strokeDasharray="4 7"
          />
          {[0, 1, 2].map((packet) => (
            <circle
              key={packet}
              r="3"
              fill="#b8f3ff"
              filter="url(#packet-glow)"
              className={`data-packet data-packet-${packet + 1}`}
            >
              <animateMotion
                dur={`${6 + packet * 1.5}s`}
                begin={`${packet * -2.2}s`}
                repeatCount="indefinite"
              >
                <mpath href="#data-path" />
              </animateMotion>
            </circle>
          ))}
        </svg>

        <div className="absolute top-1/2 left-1/2 flex w-[94%] -translate-x-1/2 -translate-y-1/2 justify-between">
          {nodes.map(({ label, Icon }, index) => (
            <div
              key={label}
              className="architecture-node"
              style={{ animationDelay: `${index * 130}ms` }}
            >
              <div className="node-icon">
                <Icon className="size-4" strokeWidth={1.6} />
              </div>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="absolute right-4 bottom-4 left-4 grid grid-cols-3 gap-2">
          {[
            ["LATENCY", "42 ms"],
            ["DEPLOYS", "reproducible"],
            ["SIGNAL", "healthy"],
          ].map(([label, value], index) => (
            <div
              key={label}
              className="metric-chip"
              style={{ animationDelay: `${520 + index * 110}ms` }}
            >
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>

        <ActivityIcon className="absolute top-5 right-5 size-3.5 text-cyan-300/45" />
      </div>
    </div>
  );
}


import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  CheckCircle2Icon,
  CloudCogIcon,
  MapPinIcon,
  TerminalSquareIcon,
} from "lucide-react";

import { CloudHero } from "@/components/cloud-hero";
import { ToolLogo } from "@/components/tool-logo";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";
import {
  cloudBuilds,
  featuredWork,
  proofPoints,
  tools,
} from "@/content/portfolio";

export function PortfolioHome() {
  return (
    <>
      <section className="hero-shell relative overflow-hidden" id="top">
        <div className="hero-grid absolute inset-0" />
        <div className="hero-aurora hero-aurora-one" />
        <div className="hero-aurora hero-aurora-two" />

        <div className="relative mx-auto grid min-h-[calc(100svh-64px)] w-full max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <div className="hero-copy">
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="eyebrow-pill">
                <span className="status-pulse size-1.5 rounded-full bg-emerald-400" />
                Open to intern & junior roles
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/45">
                <MapPinIcon className="size-3.5" />
                Cali, Colombia · Remote
              </span>
            </div>

            <p className="mb-4 font-mono text-xs tracking-[0.24em] text-cyan-300/70 uppercase">
              Infrastructure · Cloud · DevOps
            </p>
            <h1 className="max-w-3xl text-[clamp(3.3rem,8vw,7rem)] leading-[0.86] font-semibold tracking-[-0.075em] text-balance">
              Building systems
              <span className="block bg-gradient-to-r from-[#bdf6ff] via-[#86d9ff] to-[#a99dff] bg-clip-text text-transparent">
                that stay up.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/58 sm:text-lg">
              I&apos;m {profile.fullName}, a Computer Engineering student turning
              Linux, networking and backend foundations into reproducible cloud
              infrastructure—one documented failure at a time.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="#cloud-builds">
                  Explore cloud builds
                  <ArrowDownRightIcon />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/14 bg-white/3 px-6 hover:bg-white/8"
              >
                <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                  GitHub / {profile.github}
                  <ArrowUpRightIcon />
                </a>
              </Button>
            </div>
          </div>

          <CloudHero />
        </div>
      </section>

      <section className="border-y border-white/7 bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/7 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-10">
          {proofPoints.map((point) => (
            <div key={point.value} className="flex items-center gap-5 py-7 md:px-7 first:pl-0 last:pr-0">
              <span className="font-mono text-2xl font-medium text-cyan-200">
                {point.value}
              </span>
              <span className="max-w-48 text-xs leading-relaxed text-white/42">
                {point.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell" id="work">
        <div className="section-heading">
          <div>
            <p className="section-kicker">SELECTED WORK / 2025—26</p>
            <h2>Evidence before adjectives.</h2>
          </div>
          <p>
            Labs and applications built to understand systems from the operating
            system to the user-facing service.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {featuredWork.map((project, index) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="project-card group"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] tracking-[0.18em] text-cyan-300/65 uppercase">
                  {project.eyebrow}
                </span>
                <span className="project-number">0{index + 1}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <ArrowUpRightIcon className="absolute right-5 bottom-5 size-4 text-white/25 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-200" />
            </a>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0" id="stack">
        <div className="stack-panel">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="section-kicker">TOOLBOX</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                What I use.
                <span className="block text-white/35">What I&apos;m proving next.</span>
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/45">
                The distinction matters: current tools have public evidence.
                Developing tools become skills only after a reproducible build.
              </p>
            </div>

            <div className="space-y-8">
              {[
                ["PUBLIC EVIDENCE", tools.current],
                ["IN ACTIVE DEVELOPMENT", tools.developing],
              ].map(([label, items]) => (
                <div key={label as string}>
                  <p className="mb-3 font-mono text-[10px] tracking-[0.18em] text-white/35">
                    {label as string}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(items as typeof tools.current | typeof tools.developing).map(
                      (tool) => (
                        <div key={tool.name} className="tool-chip">
                          <ToolLogo icon={tool.icon} name={tool.name} />
                          <span>{tool.name}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0" id="cloud-builds">
        <div className="section-heading">
          <div>
            <p className="section-kicker">BUILD QUEUE / 3 PROJECTS</p>
            <h2>From student apps to cloud systems.</h2>
          </div>
          <p>
            Three focused builds reuse existing code and add the engineering
            signal recruiters need: security, delivery, infrastructure and
            operations.
          </p>
        </div>

        <div className="mt-12 divide-y divide-white/9 border-y border-white/9">
          {cloudBuilds.map((build) => (
            <article key={build.number} className="build-row group">
              <span className="font-mono text-xs text-white/25">{build.number}</span>
              <div>
                <span className="build-state">{build.state}</span>
                <h3>{build.title}</h3>
              </div>
              <p>{build.description}</p>
              <div className="flex items-start gap-2 text-xs leading-relaxed text-white/45">
                <CloudCogIcon className="mt-0.5 size-4 shrink-0 text-cyan-300/60" />
                {build.outcome}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0" id="about">
        <div className="contact-panel">
          <div>
            <p className="section-kicker">NEXT CONNECTION</p>
            <h2 className="mt-3 max-w-3xl text-4xl leading-tight font-semibold tracking-[-0.055em] sm:text-6xl">
              Looking for the team where I can learn by operating real systems.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <CheckCircle2Icon className="size-4 text-emerald-300" />
                Infrastructure / Cloud internships
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2Icon className="size-4 text-emerald-300" />
                Junior DevOps / Cloud Support
              </span>
              <span className="flex items-center gap-2">
                <TerminalSquareIcon className="size-4 text-emerald-300" />
                Spanish · English C1
              </span>
            </div>
            <Button asChild size="lg" className="rounded-full px-6">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                Connect on LinkedIn
                <ArrowUpRightIcon />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

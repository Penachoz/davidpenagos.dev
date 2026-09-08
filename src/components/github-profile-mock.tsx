import { LinkIcon, MailIcon, MapPinIcon } from "lucide-react";

import { MarkdownPreview } from "@/components/markdown-preview";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

const CURRENT_README = `Hey there 👋, I'm David Penagos
☁️ Aspiring DevOps / Cloud Engineer | 🛠️ Linux + Automation

### 🚀 What I'm building (Portfolio)
- 🧱 **platform-sre-lab** *(no existe en GitHub)*
- 🚨 **incident-playground** *(no existe)*
- 🌍 **terraform-cloud-foundation** *(no existe)*

Toolbox: imágenes rotas.
Instagram en el README profesional.
`;

export function GitHubProfileMock({
  variant,
  readme,
}: {
  variant: "before" | "after";
  readme?: string;
}) {
  const after = variant === "after";

  return (
    <div className="overflow-hidden rounded-xl bg-[#0d1117] text-[#c9d1d9] ring-1 ring-white/10">
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-[11px] text-[#8b949e]">
        <span className="size-2.5 rounded-full bg-[#f47067]" />
        <span className="size-2.5 rounded-full bg-[#e3b341]" />
        <span className="size-2.5 rounded-full bg-[#56d364]" />
        <span className="ml-2 truncate font-mono">
          github.com/{profile.github}
          {after ? "  ·  después" : "  ·  hoy"}
        </span>
      </div>

      <div className="grid gap-6 p-4 md:grid-cols-[220px_1fr] md:p-5">
        <aside className="flex flex-col items-center text-center md:items-start md:text-left">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.avatar}
            alt={`Avatar de ${profile.name}`}
            className={cn(
              "size-28 rounded-full ring-2 ring-white/10 md:size-36",
              !after && "opacity-90",
            )}
          />
          <h2 className="mt-3 text-lg font-semibold text-white">
            {profile.fullName}
          </h2>
          <p className="text-sm text-[#8b949e]">{profile.github}</p>
          {after ? (
            <>
              <p className="mt-3 text-left text-[13px] leading-snug text-[#c9d1d9]">
                {profile.bioEs}
              </p>
              <div className="mt-3 flex w-full flex-col gap-1.5 text-left text-[12px] text-[#8b949e]">
                <p>Universidad Autónoma de Occidente · Available for hire</p>
                <p className="flex items-center gap-1.5">
                  <MapPinIcon className="size-3.5" />
                  {profile.location}
                </p>
                <p className="flex items-center gap-1.5">
                  <LinkIcon className="size-3.5" />
                  LinkedIn
                </p>
                <p className="flex items-center gap-1.5">
                  <MailIcon className="size-3.5" />
                  {profile.email}
                </p>
              </div>
            </>
          ) : (
            <>
              <p className="mt-3 text-left text-[13px] leading-snug text-[#c9d1d9]">
                {profile.bioCurrent}
                <span className="text-[#f47067]">…</span>
              </p>
              <p className="mt-3 text-[12px] text-[#8b949e]">
                {profile.location}
              </p>
              <p className="mt-1 text-[12px] text-[#6e7681]">
                Sin empresa · sin LinkedIn · bio cortada
              </p>
              <div className="mt-3 flex gap-3 text-[12px] text-[#8b949e]">
                <span>
                  <strong className="text-white">1</strong> follower
                </span>
                <span>
                  <strong className="text-white">1</strong> following
                </span>
              </div>
            </>
          )}
        </aside>

        <div className="min-w-0">
          {after && readme ? (
            <div className="rounded-md border border-white/10 bg-[#0d1117] p-4">
              <p className="mb-3 font-mono text-[11px] text-[#8b949e]">
                Penachoz/Penachoz · README.md
              </p>
              <MarkdownPreview markdown={readme} />
            </div>
          ) : (
            <div className="space-y-3">
              <div className="rounded-md border border-white/10 p-4">
                <p className="mb-2 font-mono text-[11px] text-[#8b949e]">
                  README actual (recortado)
                </p>
                <pre className="whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-[#8b949e]">
                  {CURRENT_README}
                </pre>
              </div>
              {[
                {
                  name: "CompuNube",
                  meta: "Updated Aug 2026",
                  desc: "No description · carpeta Practica_1",
                },
                {
                  name: "CineCine",
                  meta: "JavaScript · Nov 2024",
                  desc: "No description",
                },
                {
                  name: "Botium-Toys-Audit",
                  meta: "May 2025",
                  desc: "No description · Coursera",
                },
                {
                  name: "robot-voice-dog",
                  meta: "C++",
                  desc: "Esto es pal patron :)",
                },
              ].map((repo) => (
                <div
                  key={repo.name}
                  className="rounded-md border border-white/10 p-3"
                >
                  <p className="text-sm font-medium text-[#58a6ff]">{repo.name}</p>
                  <p className="mt-1 text-[12px] text-[#6e7681] italic">
                    {repo.desc}
                  </p>
                  <p className="mt-2 text-[11px] text-[#8b949e]">{repo.meta}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

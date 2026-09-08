import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/7">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-8 text-[11px] text-white/32 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>© 2026 {profile.fullName} · Built from Cali, Colombia.</p>
        <div className="flex gap-5">
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="transition hover:text-white/70">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white/70">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="transition hover:text-white/70">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

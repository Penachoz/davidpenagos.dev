import { CloudIcon } from "lucide-react";
import {
  siApache,
  siDocker,
  siGit,
  siGithubactions,
  siGnubash,
  siGrafana,
  siKubernetes,
  siLinux,
  siMongodb,
  siOpenjdk,
  siPrometheus,
  siPython,
  siTerraform,
} from "simple-icons";

const icons = {
  apache: siApache,
  docker: siDocker,
  git: siGit,
  githubactions: siGithubactions,
  gnubash: siGnubash,
  grafana: siGrafana,
  kubernetes: siKubernetes,
  linux: siLinux,
  mongodb: siMongodb,
  openjdk: siOpenjdk,
  prometheus: siPrometheus,
  python: siPython,
  terraform: siTerraform,
} as const;

const colorOverrides: Partial<Record<keyof typeof icons, string>> = {
  openjdk: "FFFFFF",
};

type ToolLogoProps = {
  icon: string;
  name: string;
};

export function ToolLogo({ icon, name }: ToolLogoProps) {
  const key = icon.split("/")[0] as keyof typeof icons;
  const simpleIcon = icons[key];

  if (!simpleIcon) {
    return (
      <span
        className="flex size-[18px] items-center justify-center"
        style={{
          color: name === "AWS" ? "#FF9900" : "#38A9F0",
        }}
        aria-hidden="true"
      >
        <CloudIcon className="size-[18px]" strokeWidth={1.9} />
      </span>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="size-[18px] shrink-0"
      fill={`#${colorOverrides[key] ?? simpleIcon.hex}`}
      role="img"
      aria-label={`${name} logo`}
    >
      <path d={simpleIcon.path} />
    </svg>
  );
}


import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Finding } from "@/content/audit";

const severityLabel = {
  critico: "Crítico",
  alto: "Alto",
  medio: "Medio",
} as const;

export function FindingCard({ finding }: { finding: Finding }) {
  const variant =
    finding.severity === "critico"
      ? "destructive"
      : finding.severity === "alto"
        ? "secondary"
        : "outline";

  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={variant}>{severityLabel[finding.severity]}</Badge>
          <span className="text-xs text-muted-foreground">{finding.area}</span>
        </div>
        <CardTitle className="mt-1">{finding.title}</CardTitle>
        <CardDescription>{finding.current}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Qué hacer
        </p>
        <p className="mt-1 text-sm">{finding.fix}</p>
      </CardContent>
    </Card>
  );
}

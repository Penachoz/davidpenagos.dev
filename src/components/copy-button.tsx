"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CopyButton({
  text,
  label = "Copiar",
  className,
  size = "sm",
}: {
  text: string;
  label?: string;
  className?: string;
  size?: "sm" | "default" | "xs";
}) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Copiado al portapapeles");
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("No se pudo copiar. Selecciona el texto a mano.");
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      size={size}
      onClick={onCopy}
      className={cn("gap-1.5", className)}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      {copied ? "Copiado" : label}
    </Button>
  );
}

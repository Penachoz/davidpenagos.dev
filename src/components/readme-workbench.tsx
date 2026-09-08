"use client";

import { useState } from "react";

import { CopyButton } from "@/components/copy-button";
import { MarkdownPreview } from "@/components/markdown-preview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ReadmeWorkbench({
  spanish,
  english,
}: {
  spanish: string;
  english: string;
}) {
  const [lang, setLang] = useState("es");
  const markdown = lang === "es" ? spanish : english;

  return (
    <Tabs value={lang} onValueChange={setLang}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <TabsList>
          <TabsTrigger value="es">Español</TabsTrigger>
          <TabsTrigger value="en">English</TabsTrigger>
        </TabsList>
        <CopyButton
          text={markdown}
          label={lang === "es" ? "Copiar README" : "Copy README"}
        />
      </div>
      <TabsContent value="es" className="mt-4">
        <Workbench markdown={spanish} />
      </TabsContent>
      <TabsContent value="en" className="mt-4">
        <Workbench markdown={english} />
      </TabsContent>
    </Tabs>
  );
}

function Workbench({ markdown }: { markdown: string }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-xl bg-card ring-1 ring-foreground/10">
        <div className="border-b px-4 py-2 text-xs font-medium text-muted-foreground">
          Cómo se ve en GitHub
        </div>
        <div className="p-4">
          <MarkdownPreview markdown={markdown} />
        </div>
      </div>
      <div className="rounded-xl bg-card ring-1 ring-foreground/10">
        <div className="border-b px-4 py-2 text-xs font-medium text-muted-foreground">
          Markdown (pega esto en dfpenagos/dfpenagos)
        </div>
        <pre className="max-h-[640px] overflow-auto p-4 font-mono text-[12px] leading-relaxed text-muted-foreground">
          {markdown}
        </pre>
      </div>
    </div>
  );
}

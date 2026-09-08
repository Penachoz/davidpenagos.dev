"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[50vh] w-full max-w-lg flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-sm text-orange-300">Error</p>
      <h1 className="mt-2 text-2xl font-semibold">No se pudo cargar esta vista</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Reintenta. Si sigue fallando, abre el README en{" "}
        <code className="rounded bg-muted px-1">github-profile/</code>.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 text-sm text-sky-400 hover:underline"
      >
        Reintentar
      </button>
    </div>
  );
}

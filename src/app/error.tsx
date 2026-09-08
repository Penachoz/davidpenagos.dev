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
      <h1 className="mt-2 text-2xl font-semibold">This view failed to load</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Retry the page. If it keeps failing, refresh and try again.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 text-sm text-sky-400 hover:underline"
      >
        Try again
      </button>
    </div>
  );
}

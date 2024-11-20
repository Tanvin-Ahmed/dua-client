"use client";
import { AlertTriangle } from "lucide-react";

const error = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-y-4">
      <AlertTriangle className="size-10 text-muted-foreground" />
      <p className="text-sm text-muted-foreground">Something went wrong</p>
    </section>
  );
};

export default error;

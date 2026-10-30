// Backend health indicator — green when /api/health.ok. Owner: Frontend A.
"use client";

import { useQuery } from "@tanstack/react-query";
import { getHealth } from "@/lib/api";
import { cn } from "@/lib/utils";

export function HealthDot() {
  const { data, isError } = useQuery({
    queryKey: ["health"],
    queryFn: getHealth,
    refetchInterval: 30_000,
  });

  const ok = !isError && data?.ok;

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-surface/80 px-2.5 py-1 text-xs text-muted-foreground shadow-sm"
      title={ok ? "Backend healthy" : "Backend unreachable"}
    >
      <span className="relative flex size-2" aria-hidden="true">
        {ok && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />}
        <span
          className={cn(
            "relative inline-flex size-2 rounded-full",
            ok ? "bg-success shadow-[0_0_8px_rgba(0,255,133,0.8)]" : "bg-danger shadow-[0_0_8px_rgba(255,59,78,0.8)]",
          )}
        />
      </span>
      <span className="font-mono text-[11px] tracking-wide">{ok ? "SYS_OK" : "OFFLINE"}</span>
    </span>
  );
}

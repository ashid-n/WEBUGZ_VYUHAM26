// TRINETRA logo — original stylised "third eye" mark with a neon glow. Owner: Frontend A.
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="trinetra-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M2 16c3.5-6 9-9 14-9s10.5 3 14 9c-3.5 6-9 9-14 9s-10.5-3-14-9Z"
        stroke="var(--primary)"
        strokeWidth="1.6"
        strokeLinejoin="round"
        filter="url(#trinetra-glow)"
      />
      <circle
        cx="16"
        cy="16"
        r="4.2"
        fill="var(--primary)"
        fillOpacity="0.2"
        stroke="var(--primary)"
        strokeWidth="1.6"
      />
      <circle cx="16" cy="16" r="1.6" fill="var(--primary)" className="animate-pulse" />
      <path d="M16 3.5v4" stroke="var(--secondary)" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="16" cy="2.4" r="1.4" fill="var(--secondary)" />
    </svg>
  );
}

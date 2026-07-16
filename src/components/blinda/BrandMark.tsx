export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden
        className="text-accent"
      >
        <path
          d="M20 3 L34 9 V21 C34 30 27.5 35 20 37 C12.5 35 6 30 6 21 V9 Z"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <path d="M14 20 H26 M20 14 V26" stroke="currentColor" strokeWidth="1" />
        <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
      <div className="leading-tight">
        <div className="font-serif text-lg tracking-wide">B.L.I.N.D.A.<span className="text-accent">®</span></div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Governança Preventiva
        </div>
      </div>
    </div>
  );
}
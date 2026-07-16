export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-baseline gap-2 font-serif text-xl tracking-tight text-foreground md:text-2xl ${className}`}>
      <span className="uppercase">Diagnóstico</span>
      <span className="text-primary">B.L.I.N.D.A.</span>
      <span className="align-top text-xs text-primary">®</span>
    </div>
  );
}
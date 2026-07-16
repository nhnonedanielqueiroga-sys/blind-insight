export function LoadingCalculation() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="mb-6 h-14 w-14 animate-spin rounded-full border-2 border-border border-t-accent" />
      <p className="font-serif text-xl text-foreground">
        Calculando o Score B.L.I.N.D.A.® da sua clínica…
      </p>
      <p className="mt-3 text-sm text-muted-foreground">
        Estamos cruzando suas respostas com o modelo dos 6 pilares.
      </p>
    </div>
  );
}
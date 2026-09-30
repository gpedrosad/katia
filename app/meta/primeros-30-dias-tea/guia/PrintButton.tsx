"use client";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()}>
      Imprimir o guardar PDF
    </button>
  );
}

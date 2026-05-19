export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;

export function OgImageUi() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff1f2",
        padding: 64,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: 900,
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 28,
            fontWeight: 500,
            color: "#be123c",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Fonoaudióloga en Chillán
        </p>
        <h1
          style={{
            margin: "16px 0 0",
            fontSize: 72,
            fontWeight: 700,
            color: "#881337",
            lineHeight: 1.1,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Katia Domínguez
        </h1>
        <p
          style={{
            margin: "24px 0 0",
            fontSize: 36,
            fontWeight: 400,
            color: "#9f1239",
            lineHeight: 1.4,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Terapia de lenguaje y voz
        </p>
        <div
          style={{
            marginTop: 48,
            width: 120,
            height: 4,
            backgroundColor: "#fda4af",
            borderRadius: 2,
          }}
        />
      </div>
    </div>
  );
}

import type { CoreWebVitalsReport } from "@/lib/pagespeed";
import {
  CWV_RATING_LABEL,
  formatMs,
  type CwvRating,
} from "@/lib/pagespeed";

import { GscCard } from "./GscCard";
import { GscSectionTitle } from "./GscSectionTitle";

const ratingColor: Record<CwvRating, string> = {
  good: "#15803d",
  "needs-improvement": "#ca8a04",
  poor: "#dc2626",
  unknown: "#999",
};

function RatingBadge({ rating }: { rating: CwvRating }) {
  return (
    <span
      style={{
        fontSize: "0.75rem",
        fontWeight: 600,
        color: ratingColor[rating],
      }}
    >
      {CWV_RATING_LABEL[rating]}
    </span>
  );
}

export function GscCoreWebVitalsSection({
  report,
}: {
  report: CoreWebVitalsReport;
}) {
  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <GscSectionTitle>
        Core Web Vitals · PageSpeed Insights ({report.strategy})
      </GscSectionTitle>
      <GscCard>
        {!report.enabled ? (
          <p style={{ color: "#666", lineHeight: 1.6, margin: 0 }}>
            {report.error ??
              "PageSpeed desactivado. Añade PAGESPEED_API_KEY en .env.local o ejecuta npm run pagespeed:report."}
            <br />
            <span style={{ fontSize: "0.8125rem", color: "#999" }}>
              Datos de campo (CrUX) también en GSC → Experiencia → Core Web Vitals.
            </span>
          </p>
        ) : (
          <>
            <p style={{ fontSize: "0.875rem", color: "#666", marginBottom: "1rem" }}>
              Lab (Lighthouse vía API) + campo CrUX cuando hay volumen suficiente.
              Actualizado: {new Date(report.fetchedAt).toLocaleString("es-CL")}.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8125rem" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid #eaeaea", textAlign: "left" }}>
                    <th style={{ padding: "0.5rem 0.75rem 0.5rem 0" }}>URL</th>
                    <th style={{ padding: "0.5rem 0.75rem" }}>Perf</th>
                    <th style={{ padding: "0.5rem 0.75rem" }}>LCP lab</th>
                    <th style={{ padding: "0.5rem 0.75rem" }}>LCP campo</th>
                    <th style={{ padding: "0.5rem 0.75rem" }}>CLS</th>
                    <th style={{ padding: "0.5rem 0.75rem" }}>INP</th>
                  </tr>
                </thead>
                <tbody>
                  {report.results.map((row) => {
                    const path = row.url.replace(/^https?:\/\/[^/]+/, "") || "/";
                    return (
                      <tr key={row.url} style={{ borderBottom: "1px solid #f0f0f0" }}>
                        <td style={{ padding: "0.65rem 0.75rem 0.65rem 0", maxWidth: 200 }}>
                          <code style={{ fontSize: "0.76rem" }}>{path}</code>
                          {row.error ? (
                            <div style={{ color: "#dc2626", marginTop: 4 }}>{row.error}</div>
                          ) : null}
                        </td>
                        <td style={{ padding: "0.65rem 0.75rem" }}>
                          {row.lab.performanceScore ?? "—"}
                        </td>
                        <td style={{ padding: "0.65rem 0.75rem" }}>
                          {formatMs(row.lab.lcpMs)}{" "}
                          <RatingBadge rating={row.lab.lcpRating} />
                        </td>
                        <td style={{ padding: "0.65rem 0.75rem" }}>
                          {row.field?.lcpMs != null ? (
                            <>
                              {formatMs(row.field.lcpMs)}{" "}
                              <RatingBadge rating={row.field.lcpRating} />
                            </>
                          ) : (
                            <span style={{ color: "#999" }}>sin datos CrUX</span>
                          )}
                        </td>
                        <td style={{ padding: "0.65rem 0.75rem" }}>
                          {row.lab.cls != null ? row.lab.cls.toFixed(3) : "—"}{" "}
                          <RatingBadge rating={row.lab.clsRating} />
                        </td>
                        <td style={{ padding: "0.65rem 0.75rem" }}>
                          {row.field?.inpMs != null
                            ? formatMs(row.field.inpMs)
                            : row.lab.inpMs != null
                              ? formatMs(row.lab.inpMs)
                              : "—"}{" "}
                          <RatingBadge
                            rating={row.field?.inpRating ?? row.lab.inpRating}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: "0.75rem", color: "#999", marginTop: "1rem", marginBottom: 0 }}>
              Umbrales Google: LCP &lt;2,5 s · CLS &lt;0,1 · INP &lt;200 ms (bueno).
            </p>
          </>
        )}
      </GscCard>
    </section>
  );
}

# Patrón landing Google Ads

Usar para cada cluster. Ejemplo vivo: `/ads/voz-disfonia-online`.

---

## UI / librerías

| Pieza | Uso |
|-------|-----|
| Iconos | `lucide-react` — nunca emojis |
| Animación | CSS only: `.animate-fade-up` / `.animate-fade-in` + `animationDelay` |
| Estilo | Tailwind 4; sin vibecoding (emojis, glow, pills de más) |
| Foto Ads | `/katia-ads-hero.jpg` (~80 KB) — **no** el PNG 6 MB del sitio |

Iconos: `TrendingDown`, `Mic`, `CalendarClock`, `Video`, `ClipboardList`, `ArrowRight`.

### Animaciones (carga)

| Dónde | Clase | Notas |
|-------|--------|--------|
| Hero copy | `animate-fade-up` | 1 vez al cargar |
| Hero foto | `animate-fade-in` + delay ~120ms | no mover LCP de más |
| Señales / pasos | `animate-fade-up` + stagger 80ms | |
| FAQ / CTA | sin animación de entrada | interacción click en FAQ |

Respeta `prefers-reduced-motion` (globals.css). Sin Framer Motion / JS de scroll.

### Performance (obligatorio)

| Regla | Detalle |
|-------|---------|
| Imagen hero | `priority` + `fetchPriority="high"` + `quality={75}` + `sizes` reales |
| Asset | Usar `katia-ads-hero.jpg` (Ads). Regenerar con `sips` si cambia la foto |
| Below-fold | clase `content-auto` (`content-visibility: auto`) |
| Client JS | Solo `AdsFaq` (acordeón) vía `next/dynamic` |
| Link Google | `GOOGLE_BUSINESS_PROFILE_URL` (sin `/review`) |
| Noindex | siempre |

---

## Reglas

| Regla | Detalle |
|-------|---------|
| Ruta | `app/ads/{slug}/page.tsx` |
| Layout | `app/ads/layout.tsx` (lean, sin footer sitio) |
| SEO | **siempre** `buildNoIndexMetadata` — noindex |
| CTA | solo `WhatsAppCTA` + `whatsappUrl` (nunca teléfono hardcode) |
| Foto | `/katia-ads-hero.jpg` en hero (liviana) |
| Reseñas | `AdsGoogleBadge` + `AdsGoogleReviews` desde `lib/google-reviews.ts` |
| Copy | corto; message-match con keywords del cluster |
| Geo | país (Chile), **sin ciudades** en H1 |
| Docs cluster | `ads/NN-slug/README.md` |

---

## Orden de secciones (obligatorio)

1. **Hero** — badge Google ★ · H1 keywords · 1 frase dolor · foto · CTA WhatsApp  
2. **Señales** — 3 bullets máx.  
3. **Cómo funciona** — 3 pasos en una línea cada uno  
4. **Pacientes atendidos** — `AdsPatientQuotes` (2–3 testimonios del cluster; mismos textos que landings `/voz-online`, no inventar)  
5. **Reseñas Google** — `AdsGoogleReviews` (GBP; **una sola sección**, destacada y centrada; el `AdsGoogleBadge` del hero es la única repetición permitida)  
6. **FAQ** — `AdsFaq` (acordeón click; 4–5 preguntas; JSON-LD incluido)  
7. **CTA final** — un solo botón WhatsApp  

No agregar: cards decorativas, stats inventados, precios, largos párrafos SEO, emojis.

---

## Componentes reutilizables

```
app/ads/_components/AdsGoogleTrust.tsx
  AdsGoogleBadge      → ★ + N reseñas → link GBP
  AdsGoogleReviews    → 2 quotes de GOOGLE_REVIEWS

app/ads/_components/AdsPatientQuotes.tsx
  AdsPatientQuotes    → 2–3 comentarios pacientes (name, role, text)

app/ads/_components/AdsFaq.tsx
  AdsFaq              → acordeón click (lucide ChevronDown)
```

**Link Google:** usar `GOOGLE_BUSINESS_PROFILE_LIST_URL` / `GOOGLE_BUSINESS_PROFILE_URL` (`g.page/r/...` sin `/review`). El path `/review` es para escribir reseña y a menudo falla o no abre el perfil.

Índices reseñas (`GOOGLE_REVIEWS` en `lib/google-reviews.ts`):

| Index | Autor | Uso sugerido |
|-------|--------|--------------|
| 0–3 | Marcela P., Gonzalo, Marcela O., Arantzazu | infantil |
| 4 | Raimundo Rodríguez | genérico / avances |
| 5 | Carolina Rojas | adulto / recuperación |

---

## Checklist nueva landing

```
[ ] Carpeta app/ads/{slug}/page.tsx
[ ] metadata = buildNoIndexMetadata(...)
[ ] H1 = keyword principal del cluster (frase)
[ ] Foto Katia en hero
[ ] AdsGoogleBadge arriba
[ ] AdsGoogleReviews con índices correctos
[ ] WA_MSG menciona cluster + "llegué por Google"
[ ] ads/{NN}-{slug}/README.md (URL + H1/H2 anuncio)
[ ] Actualizar landing en GOOGLEADS/google-ads-keywords-online-ranking.md
[ ] Probar local: /ads/{slug}
```

---

## Template mínimo (copiar)

```tsx
import Image from "next/image";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { GeoFAQ } from "@/app/_components/GeoFAQ";
import { AdsGoogleBadge, AdsGoogleReviews } from "@/app/ads/_components/AdsGoogleTrust";
import { buildNoIndexMetadata } from "@/lib/seo";
import { BUSINESS_NAME } from "@/lib/site";

export const metadata = buildNoIndexMetadata("TÍTULO — Katia Domínguez");

const WA_MSG = "Hola, llegué por Google. Quiero [SERVICIO] online.";

const faqItems = [/* 3 máx */];

export default function Page() {
  return (
    <main>
      {/* 1 Hero: badge + H1 + frase + foto + CTA */}
      {/* 2 Señales: 3 bullets */}
      {/* 3 Cómo funciona: 3 pasos */}
      <AdsGoogleReviews reviewIndexes={[5, 4]} />
      {/* 5 FAQ */}
      {/* 6 CTA final */}
    </main>
  );
}
```

Ver implementación: `app/ads/voz-disfonia-online/page.tsx`.

---

## Anuncio ↔ landing

| Elemento anuncio | Landing |
|------------------|---------|
| H1 anuncio | = H1 o primeras palabras del H1 |
| “online” / “videollamada” | visible above the fold |
| Final URL | `https://www.katialafono.cl/ads/{slug}` |
| Negativas | `GOOGLEADS/google-ads-negativas-online.md` |

# AI Self-Learn — katialafono.cl

Memoria operativa del proyecto para agentes. **Objetivo:** no redescubrir lo mismo y gastar menos tokens.

## Cómo usarlo (agente)

1. **Antes** de auditar SEO/GSC/GBP/local: lee solo [`INDEX.md`](./INDEX.md) (hechos densos).
2. Si el tema aparece en el índice, abre el archivo citado — **no** re-rastrear todo el repo.
3. **Después** de un hallazgo estable o un cambio relevante: añade 1–5 líneas en [`log.md`](./log.md) y actualiza el bullet en `INDEX.md`.
4. No copies informes GSC completos aquí; enlaza a `docs/gsc-informe-YYYY-MM-DD.md`.

## Cómo usarlo (humano)

- Anota decisiones (“decidimos no publicar calle”) y resultados medidos.
- Corrige hechos obsoletos en el INDEX (fecha al lado).
- Si un log crece mucho, archiva entradas viejas en `archive/` y deja solo el resumen en INDEX.

## Reglas de escritura (ahorro de tokens)

| Hacer | Evitar |
| --- | --- |
| Hechos: URL, métrica, decisión, fecha | Narrativa larga, “contexto” repetido |
| Un bullet = una verdad usable | Duplicar el mismo dato en 3 docs |
| Enlazar informe/código | Pegar tablas GSC enteras |
| Marcar `pendiente:` / `hecho:` | TODOs vagos sin dueño |

## Estructura

```
docs/ai-self-learn/
  README.md    ← este archivo
  INDEX.md     ← leer primero (siempre corto)
  log.md       ← append-only cronológico
  archive/     ← logs viejos (opcional)
```

## Relacionado

- Regla Cursor: `.cursor/rules/ai-self-learn.mdc`
- GBP: `docs/gbp-vinculacion-web-2026-07-24.md`
- GSC: `docs/gsc-informe-*.md` + skill `.agents/skills/google-search-console/`

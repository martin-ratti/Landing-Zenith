---
name: limpieza
description: Revisa y limpia el código del proyecto eliminando archivos basura, registros (logs) innecesarios, scripts de un solo uso, código en desuso y optimizando comentarios (incluyendo TODOs y "En una app real"). Siempre genera un reporte previo antes de borrar código funcional en desuso.
---

# Skill de Limpieza

Este skill permite realizar un mantenimiento profundo del código fuente, asegurando un repositorio limpio, profesional y bien documentado.

## ¿Qué hace este skill?

1. **Eliminar Logs Basura:** Busca y sugiere la eliminación de `console.log`, `print` o similares que parezcan restos de depuración y no aporten valor al código final.
2. **Identificar Scripts de Uso Único:** Localiza scripts temporales o de migración que ya no sean necesarios en el flujo de trabajo actual.
3. **Detectar Código en Desuso:** Identifica funciones, componentes o archivos que no están siendo referenciados en ninguna parte del proyecto.
   - **IMPORTANTE:** Para el código en desuso, SIEMPRE genera un reporte indicando qué partes se detectaron y qué parecen hacer, para que el usuario decida si borrarlos o no.
4. **Comentarios Útiles vs. Inútiles:**
   - Elimina comentarios redundantes que solo describen lo obvio (ej: `// Incrementa i` encima de `i++`).
   - Documenta adecuadamente comentarios que dicen "TODO" o "En una app real", convirtiéndolos en sugerencias de mejora concretas o implementando la funcionalidad si es posible.

## Procedimiento

### 1. Auditoría Inicial
- Escanea el proyecto en busca de patrones comunes de "basura":
  - `console.log`, `debugger`, `alert`.
  - Archivos con nombres como `temp.*`, `test-logic.*`, `script-migracion.*`.
  - Comentarios `// TODO`, `// FIXME`, `// En una app real`.

### 2. Análisis de Código en Desuso
- Utiliza herramientas como `grep_search` para buscar referencias a funciones o componentes definidos.
- Si una exportación no se usa en ningún otro archivo (excepto si es un punto de entrada conocido), márcala para el reporte.

### 3. Generación del Reporte de Limpieza
Antes de realizar cambios destructivos, presenta al usuario un resumen:
- **Archivos a eliminar:** (lista de scripts basura).
- **Líneas de logs detectadas:** (archivo y línea).
- **Código sospechoso de desuso:** (fragmento de código y por qué se cree que no se usa).
- **Comentarios a transformar:** (lista de TODOs detectados).

### 4. Ejecución
Una vez confirmado por el usuario:
- Aplica las limpiezas de logs y comentarios inútiles.
- Elimina los archivos basura confirmados.
- Transforma los TODOs en documentación formal o código funcional según se acuerde.

## Cuándo usar este skill
Úsalo cuando el usuario pida:
- "Limpia el código"
- "Revisa la basura del proyecto"
- "Busca código muerto"
- "Organiza los TODOs"
- "¿Qué archivos puedo borrar?"

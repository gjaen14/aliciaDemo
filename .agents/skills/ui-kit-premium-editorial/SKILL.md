---
name: ui-kit-premium-editorial
description: Guía técnica del sistema de diseño para Alicia Elena. Contiene el mapeo de colores CSS, tokens de tipografía y reglas de implementación UI/UX.
---

# 🎨 UI Kit: Alicia Elena (Premium Standard)

Guía técnica para la implementación de estilos en la plataforma de Liderazgo Ejecutivo.

## 🎨 Paleta de Colores (Tokens CSS)
| Token | Valor Hex | Rol Funcional |
| :--- | :--- | :--- |
| `--color-text-main` | `#055060` | Principal para Tipografía (Títulos y Párrafos). |
| `--color-accent-teal`| `#028C8C` | Iconos, bordes de tarjetas y estados hover. |
| `--color-cta-primary`| `#EEA59E` | **CRÍTICO.** Botones de conversión ("Agenda tu sesión"). |
| `--color-bg-soft`    | `#F5D7CF` | Fondos de sección alternos (Testimonios/Sobre Mí). |
| `--color-highlight`  | `#E3B12B` | Micro-interacciones (Estrellas, subrayados, bullets). |

## 🔠 Sistema Tipográfico
- **Títulos (H1, H2, H3):** `The Seasons (Bold)`
  - *Razón:* Proyecta autoridad, lujo y diseño editorial.
- **Cuerpo y Menús:** `Montserrat (Regular / Light)`
  - *Razón:* Geometría moderna y alta legibilidad en móviles.

## 🛠️ Patrones de Implementación (Correcto vs. Incorrecto)
- **✅ Correcto:** Usar `#055060` en lugar de negro puro para un look más elegante.
- **❌ Incorrecto:** Usar el color Coral (`#EEA59E`) en elementos decorativos; es exclusivo para CTAs.
- **✅ Correcto:** Equilibrar el clasicismo de "The Seasons" con la modernidad de "Montserrat".

## Cómo usar este skill
El agente debe aplicar estos estilos al generar código CSS o componentes web para asegurar la coherencia visual de la marca.s

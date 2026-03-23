# T1envíos Landing Page — Contexto para Claude Code

## Archivo principal
- `index.html` — Landing page completa (single file, todos los SVGs y base64 embebidos)

## Estructura de assets
```
assets/
  paqueterias/   → Logos circulares del orbital del hero (UPS, Fedex, DHL, AMPM, 99, JT, Express)
  canales/       → Logos de marketplaces (Shopify, MeLi, Amazon, etc.)
  logos-t1/      → Logos del ecosistema T1 (T1Envios, T1Pagos, T1Score, T1Tienda, T1Cuenta)
  iconos/        → Íconos UI de secciones (CotizadorFloat, En_transito, Estado_de_envios, etc.)
  social/        → Íconos de redes sociales (IG, LinkedIn, X, Facebook, TikTok)
  marquee/       → Logos grayscale del trust marquee (TELCEL, Shein, Sears, etc.)
  referencias/   → Imágenes de referencia visual (Figma exports)
```

## Sistema de diseño T1envíos Landing
- **Tipografía:** Sora (H0 Light 300, H1–H4 Regular 400) + Inter (body/UI)
- **Color primario:** `#E26153` (Red 600) / hover: `#DB3B2B` (Red 500)
- **Cards:** border-radius `24px`, shadow `0 0 25px 2px rgba(0,0,0,0.06)`
- **Botones:** border-radius `18px`, height `45px`
- **Contenedor:** max-width `1018px`
- **Fondo hero:** `linear-gradient(180deg, #fff 0%, #F5C5BE 20%, #F9D5CF 45%, #FDECEA 70%, #fff 100%)`

## Secciones de la landing (en orden)
1. **Header** — Nav fijo, logo T1envíos, glass effect
2. **Hero** — Grid 2 col, orbital halo con 7 logos paqueterías, panel CotizadorFloat
3. **Marcas Marquee** — Trust logos en grayscale animados
4. **SectionCards** — 3 cards: Cotiza (Saldos_nuevo.svg), Envía (Boxfast.svg), Seguimiento (Clipboard.svg)
5. **Integra canales** (`#marcas-t1`) — Logos flotantes de marketplaces + texto central
6. **Tarifas** (`#tarifas`) — Tabs con mock cotizador animado
7. **Reportes** (`#reportes`) — Auto-fade entre pantallas de analytics
8. **Seguimiento** (`#seguir`) — Scroll animation vertical
9. **Recargas** (`#recarga`) — Scroll animation
10. **Clientes** (`#clientes`) — Carrusel de casos de éxito
11. **FAQ** (`#faq`) — Accordion
12. **Footer CTA** — Dark section con glow
13. **Footer** — Negro, 3 columnas

## Problema conocido: Chrome file://
El HTML pesa ~335KB (SVGs + base64 embebidos). Chrome trunca el DOM a ~42KB cuando
se carga via `file://`. Para previsualizar correctamente usar servidor HTTP:
```bash
cd "T1 Landing envios"
python3 -m http.server 8080
# Abrir: http://localhost:8080/index.html
```

## Pendientes / próximos pasos
- [x] Corregir logo FedEx en hero (círculo de la "d" desaparecido por colisión de clases CSS cls-)
- [ ] Sección #marcas-t1 responsive mobile (logos escalonados como en Integra_canales_responsive.jpg)
- [ ] Revisar y completar el responsive/mobile de todas las secciones
- [ ] Imágenes reales para secciones: Reportes, Seguimiento, Recargas, NuestrosClientes

## Notas técnicas
- Los SVGs del orbital hero tienen clases CSS internas (cls-1, cls-2, cls-3) que colisionan
  con el CSS global cuando se embeben inline. Solución: convertir a `fill` inline.
- `brace expansion` no funciona en este entorno: usar mkdir separados.
- Archivos con espacios en nombres requieren comillas en shell.

# Eventos GA4 — Configuración en Google Tag Manager

Todos los `dataLayer.push()` ya están implementados en `index.html`. Este documento lista cada evento que debe crearse en GTM como **trigger tipo "Custom Event"** + **tag GA4 Event**.

---

## Requisitos previos

1. Pegar el snippet de GTM (`GTM-XXXXXXX`) en el `<head>` y después del `<body>` de `index.html`
2. Crear un tag **Google Analytics: GA4 Configuration** con tu Measurement ID (`G-XXXXXXXXXX`)
3. Para cada evento, crear un **Trigger → Custom Event** con el nombre exacto del evento
4. Para cada evento, crear un **Tag → GA4 Event** asociado al trigger, con los parámetros listados como Event Parameters

---

## Conversiones (Key Events)

Marcar estos como **Key Events** en GA4 → Admin → Key Events.

### `cta_comenzar_gratis`
- **Descripción:** Click en "Comenzar gratis" del header
- **Parámetros:**
  - `cta_location` = `header`

### `cta_iniciar_sesion`
- **Descripción:** Click en "Iniciar sesión" del header
- **Parámetros:**
  - `cta_location` = `header`

### `cta_comenzar_ahora`
- **Descripción:** Click en cualquier botón "Comenzar ahora"
- **Parámetros:**
  - `cta_location` = `hero` | `integraciones` | `reportes` | `seguimiento` | `recargas` | `footer_cta` | `mobile_nav`

### `cta_cotizar_ahora`
- **Descripción:** Click en "Cotizar ahora" en sección Tarifas
- **Parámetros:**
  - `cta_location` = `tarifas`

### `cta_crear_tienda`
- **Descripción:** Click en "Crear mi tienda" en Servicios Finales
- **Parámetros:**
  - `cta_location` = `servicios_finales`
  - `cta_text` = texto del enlace

### `cta_crear_link_pago`
- **Descripción:** Click en "Crear link de pago" en Servicios Finales
- **Parámetros:**
  - `cta_location` = `servicios_finales`
  - `cta_text` = texto del enlace

### `cta_cotizar_envio`
- **Descripción:** Click en "Cotizar envío" en Servicios Finales
- **Parámetros:**
  - `cta_location` = `servicios_finales`
  - `cta_text` = texto del enlace

---

## Engagement — Interacción con contenido

### `card_click_cotiza`
- **Descripción:** Click en card "Cotiza ahora" (sección Servicios)
- **Parámetros:**
  - `card_text` = texto del enlace

### `card_click_envia`
- **Descripción:** Click en card "Realiza un envío"
- **Parámetros:**
  - `card_text` = texto del enlace

### `card_click_rastrea`
- **Descripción:** Click en card "Rastrea un envío"
- **Parámetros:**
  - `card_text` = texto del enlace

### `faq_open`
- **Descripción:** Click en pregunta del FAQ
- **Parámetros:**
  - `faq_index` = número de pregunta (1–7)
  - `faq_question` = texto de la pregunta (máx 80 chars)

### `clientes_carousel`
- **Descripción:** Interacción con carrusel de clientes
- **Parámetros:**
  - `direction` = `prev` | `next` | `dot`

### `social_click`
- **Descripción:** Click en ícono de red social del footer
- **Parámetros:**
  - `social_network` = `LinkedIn` | `Instagram` | `X` | `Facebook` | `TikTok`

### `nav_link_click`
- **Descripción:** Click en enlace de navegación (header o mobile)
- **Parámetros:**
  - `cta_location` = `header` | `mobile_nav`
  - `link_text` = texto del enlace

### `hamburger_menu_open`
- **Descripción:** Apertura del menú hamburguesa (mobile)
- **Parámetros:** ninguno

### `footer_link_click`
- **Descripción:** Click en cualquier enlace del footer
- **Parámetros:**
  - `link_text` = texto del enlace

---

## Video Engagement

### `video_visible`
- **Descripción:** Video entra en viewport (visible al 50%)
- **Parámetros:**
  - `video_section` = ID de la sección (`hero` | `tarifas` | `reportes` | `seguir` | `recarga`)

### `video_50_percent`
- **Descripción:** Usuario vio el 50% del video
- **Parámetros:**
  - `video_section` = ID de la sección

### `video_complete`
- **Descripción:** Video terminó de reproducirse
- **Parámetros:**
  - `video_section` = ID de la sección

### `video_pause`
- **Descripción:** Pausa manual del video
- **Parámetros:**
  - `video_section` = ID de la sección
  - `video_percent` = porcentaje de avance al pausar

---

## Scroll y Performance

### `section_view`
- **Descripción:** Sección visible al 50% en viewport (se dispara una sola vez por sección)
- **Parámetros:**
  - `section_id` = `hero` | `servicios` | `marcas-t1` | `tarifas` | `reportes` | `seguir` | `recarga` | `servicios-finales` | `clientes` | `faq` | `footer-cta`

### `scroll_depth`
- **Descripción:** Usuario alcanzó un umbral de scroll
- **Parámetros:**
  - `scroll_percent` = `25` | `50` | `75` | `90`

### `outbound_link_click`
- **Descripción:** Click en enlace externo (URL diferente al dominio)
- **Parámetros:**
  - `outbound_url` = URL de destino
  - `link_text` = texto del enlace (máx 50 chars)

### `page_load_time`
- **Descripción:** Tiempo de carga de la página
- **Parámetros:**
  - `load_time_ms` = milisegundos de carga

---

## Variables Data Layer recomendadas en GTM

Crear estas como **Variables → Data Layer Variable** para usarlas en los tags:

| Nombre de variable GTM | Data Layer Variable Name |
|------------------------|-------------------------|
| `DLV - cta_location` | `cta_location` |
| `DLV - cta_text` | `cta_text` |
| `DLV - link_text` | `link_text` |
| `DLV - card_text` | `card_text` |
| `DLV - faq_index` | `faq_index` |
| `DLV - faq_question` | `faq_question` |
| `DLV - direction` | `direction` |
| `DLV - social_network` | `social_network` |
| `DLV - video_section` | `video_section` |
| `DLV - video_percent` | `video_percent` |
| `DLV - section_id` | `section_id` |
| `DLV - scroll_percent` | `scroll_percent` |
| `DLV - outbound_url` | `outbound_url` |
| `DLV - load_time_ms` | `load_time_ms` |

---

## Resumen

| Categoría | Cantidad | Eventos |
|-----------|----------|---------|
| Conversión | 7 | `cta_comenzar_gratis`, `cta_iniciar_sesion`, `cta_comenzar_ahora`, `cta_cotizar_ahora`, `cta_crear_tienda`, `cta_crear_link_pago`, `cta_cotizar_envio` |
| Engagement | 8 | `card_click_*` (3), `faq_open`, `clientes_carousel`, `social_click`, `nav_link_click`, `hamburger_menu_open`, `footer_link_click` |
| Video | 4 | `video_visible`, `video_50_percent`, `video_complete`, `video_pause` |
| Scroll/Perf | 4 | `section_view`, `scroll_depth`, `outbound_link_click`, `page_load_time` |
| **Total** | **23** | |

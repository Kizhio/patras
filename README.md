# ⏪ Patrás

Juego de fiesta tipo *Backtalk*: graba una frase, dale la vuelta, imítala y adivina.
Un solo archivo HTML, sin servidor propio, sin cuentas, gratis.

- **Un móvil:** os lo vais pasando de mano en mano.
- **Online:** cada uno en su móvil. Uno crea la sala, comparte un código de 4 letras y los demás se unen. El audio viaja directo entre móviles por WebRTC (PeerJS, señalización pública gratuita).

- De 3 a 10 jugadores en un móvil, desde 2 online. Marcador con podio y confeti
- 11 skins: Halloween, Navidad, Neón, Arcade, Océano, Espacio, Bosque, Kawaii, Playa, Fiesta, Pirata

## Publicar gratis en GitHub Pages

1. Crea un repositorio público en GitHub llamado `patras`.
2. Sube `index.html` y este `README.md`.
3. En el repo: **Settings → Pages → Branch: main / (root) → Save**.
4. En un minuto estará en `https://TU_USUARIO.github.io/patras/`.

El micrófono solo funciona por HTTPS, y GitHub Pages ya lo da.

## Añadir skins

Copia una línea `[data-theme=...]` del `<style>` con tus colores y añade su entrada en `THEMES` (nombre + emojis flotantes). Nada más.

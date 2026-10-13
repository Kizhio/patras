# ⏪ Patrás

Juego de fiesta tipo *Backtalk*: graba una frase, dale la vuelta, imítala y adivina.
Un solo archivo HTML, sin servidor propio, sin cuentas, gratis.

**Jugar:** https://kizhio.github.io/patras/

- **Un solo móvil:** todos juntos, os lo vais pasando de mano en mano (2 a 10 jugadores).
- **Cada uno con su móvil:** en la misma habitación o a distancia, desde 2 jugadores. Uno crea la sala y comparte el enlace o el código de 4 letras. El audio viaja directo entre móviles por WebRTC (PeerJS, señalización pública gratuita). Si un jugador pierde la conexión o recarga, vuelve a entrar solo. Chat de sala con texto y notas de voz. Salas guardadas con nombre para reabrirlas con el mismo código, "Entrar de nuevo" para invitados e historial de partidas en el móvil.
- Cuenta atrás 3-2-1 al grabar y tope de 5 segundos.
- 5 categorías de frases (cotidianas, refranes, pelis y series, canciones, absurdas) o modo **sin pistas**: cada uno inventa su frase y la escribe en secreto.
- **Instalable** como app (PWA): botón "Instalar la app" en Android y Chrome; en iPhone, Compartir → Añadir a pantalla de inicio. Abre también sin conexión.
- Marcador con podio y confeti. 11 skins: Halloween, Navidad, Neón, Arcade, Océano, Espacio, Bosque, Kawaii, Playa, Fiesta, Pirata.

## Publicar tu propia copia en GitHub Pages

1. Haz un fork o sube `index.html` a un repositorio público.
2. **Settings → Pages → Branch: main / (root) → Save**.
3. En un minuto estará en `https://TU_USUARIO.github.io/NOMBRE_DEL_REPO/`. El micrófono solo funciona por HTTPS, y GitHub Pages ya lo da.

## Añadir skins o frases

Skins: copia una línea `[data-theme=...]` del `<style>` con tus colores y añade su entrada en `THEMES` (nombre + emojis flotantes).
Frases: añade una categoría o más frases en `PHRASES`.

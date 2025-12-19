import "@styles/lenis.css";
import Lenis from "lenis";

// Inicialización de Lenis para scroll suave
const lenis = new Lenis({
  duration: 1.2, // Ajusta la velocidad si lo sientes muy rápido o lento
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva de suavizado estándar
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
});

// Bucle de animación manual para máxima compatibilidad con GSAP
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
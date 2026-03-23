import { useMemo, useEffect, useState } from 'react';

// Detecta si el usuario prefiere movimiento reducido
function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(media.matches);

    const listener = () => setPrefersReduced(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  return prefersReduced;
}

// Detecta si el dispositivo es de gama baja (menos de 4GB RAM aprox)
function useIsLowEndDevice() {
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    // Si deviceMemory está disponible y es <= 4, consideramos low-end
    if ('deviceMemory' in navigator) {
      setIsLowEnd((navigator as any).deviceMemory <= 4);
    }
    // Fallback: si es móvil, asumimos precaución
    else if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      setIsLowEnd(true);
    }
  }, []);

  return isLowEnd;
}

export default function ParticleField() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isLowEndDevice = useIsLowEndDevice();

  const particles = useMemo(() => {
    // Reducir cantidad de partículas en dispositivos low-end o con reduced motion
    const count = prefersReducedMotion ? 0 : isLowEndDevice ? 15 : 40;

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 3,
    }));
  }, [prefersReducedMotion, isLowEndDevice]);

  // Si el usuario prefiere movimiento reducido, no renderizamos nada
  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-accent/5 rounded-full blur-[100px]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-cyan-accent"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: 0.2,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

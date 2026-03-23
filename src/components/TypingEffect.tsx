import { useState, useEffect } from 'react';

const phrases = [
  'Hola, soy Julio Cesar 👋',
  'Full Stack Developer',
  'Construyo cosas con IA',
  'Disponible para trabajar',
];

export default function TypingEffect() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(media.matches);
    const listener = () => setPrefersReducedMotion(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setText(phrases[phraseIndex]);
      const timeout = setTimeout(() => {
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }, 2500);
      return () => clearTimeout(timeout);
    }

    const current = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= current.length) {
      setText(current.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 85);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      setText(current.slice(0, charIndex - 1));
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 38);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, prefersReducedMotion]);

  return (
    <span
      className="font-mono text-cyan-accent text-2xl sm:text-4xl md:text-5xl font-bold"
      aria-live="polite"
      aria-label={text}
    >
      {text}
      {!prefersReducedMotion && (
        <span className="cursor-blink text-cyan-accent" aria-hidden="true">
          |
        </span>
      )}
    </span>
  );
}

import { useEffect, useRef, useState } from 'react';

// Sayı, ekrana girdiğinde 0'dan hedef değere doğru kısa bir animasyonla sayar.
// "prefers-reduced-motion" tercihine saygı duyar — o durumda direkt son değeri gösterir.
export default function CountUp({
  value, suffix = '', duration = 900, decimals = null,
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const numericTarget = parseFloat(value);
  const isDecimal = decimals !== null ? decimals > 0 : !Number.isInteger(numericTarget);

  useEffect(() => {
    const el = ref.current;
    if (!el || Number.isNaN(numericTarget)) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setDisplay(numericTarget);
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - (1 - progress) ** 3;
          setDisplay(numericTarget * eased);
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.3 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [numericTarget, duration]);

  return (
    <span ref={ref}>
      {isDecimal ? display.toFixed(1) : Math.round(display)}
      {suffix}
    </span>
  );
}

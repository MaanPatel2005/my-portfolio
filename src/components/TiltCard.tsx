import { useRef, useEffect, ReactNode, CSSProperties } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  maxTilt?: number;
  glare?: boolean;
}

export default function TiltCard({
  children,
  className = "",
  style,
  maxTilt = 6,
  glare = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const rAFRef = useRef<number | null>(null);
  const currentTilt = useRef({ x: 0, y: 0 });
  const targetTilt = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      targetTilt.current = {
        x: -dy * maxTilt,
        y: dx * maxTilt,
      };
    };

    const onMouseLeave = () => {
      targetTilt.current = { x: 0, y: 0 };
    };

    const loop = () => {
      const stiffness = 0.1;
      currentTilt.current.x +=
        (targetTilt.current.x - currentTilt.current.x) * stiffness;
      currentTilt.current.y +=
        (targetTilt.current.y - currentTilt.current.y) * stiffness;

      if (card) {
        card.style.transform = `perspective(800px) rotateX(${currentTilt.current.x}deg) rotateY(${currentTilt.current.y}deg) scale3d(1.02, 1.02, 1.02)`;
      }

      if (glare && glareRef.current) {
        const angle =
          Math.atan2(targetTilt.current.y, targetTilt.current.x) *
          (180 / Math.PI);
        const intensity = Math.min(
          Math.sqrt(targetTilt.current.x ** 2 + targetTilt.current.y ** 2) /
            maxTilt,
          1,
        );
        glareRef.current.style.opacity = String(intensity * 0.18);
        glareRef.current.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,0.9), transparent)`;
      }

      rAFRef.current = requestAnimationFrame(loop);
    };

    card.addEventListener("mousemove", onMouseMove);
    card.addEventListener("mouseleave", onMouseLeave);
    rAFRef.current = requestAnimationFrame(loop);

    return () => {
      card.removeEventListener("mousemove", onMouseMove);
      card.removeEventListener("mouseleave", onMouseLeave);
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
    };
  }, [maxTilt, glare]);

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
        position: "relative",
        ...style,
      }}
    >
      {glare && (
        <div
          ref={glareRef}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            opacity: 0,
            transition: "opacity 0.1s",
            zIndex: 1,
          }}
        />
      )}
      {children}
    </div>
  );
}

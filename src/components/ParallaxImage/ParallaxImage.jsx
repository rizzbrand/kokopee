import React, { useRef, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";

const ParallaxImage = ({ src, alt, className = "", speed = 0.2 }) => {
  const imageRef = useRef(null);
  const bounds = useRef(null);
  const currentScroll = useRef(0);

  useEffect(() => {
    const updateBounds = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        bounds.current = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        };
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  useLenis(({ scroll }) => {
    if (!imageRef.current || !bounds.current) return;

    currentScroll.current = scroll;
    const relativeScroll = scroll - bounds.current.top;
    const translateY = relativeScroll * speed;

    imageRef.current.style.transform = `translateY(${translateY}px) scale(1.25)`;
    imageRef.current.style.willChange = `transform`;
  });

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover will-change-transform"
        style={{ transform: "translateY(0)", willChange: "transform" }}
      />
    </div>
  );
};

export default ParallaxImage;

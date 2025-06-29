"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function CursorIcon() {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [adjustedPosition, setAdjustedPosition] = useState({ x: -200, y: -200 });
  const [direction, setDirection] = useState<"left" | "right" | "up" | "down">("right");
  const [isSpinning, setIsSpinning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const prevPos = useRef({ x: 0, y: 0 });
  const iconWidth = 100;
  const iconHeight = 150;
  const offset = 10;
  const idleTimeout = useRef<number | null>(null);

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const dx = x - prevPos.current.x;
      const dy = y - prevPos.current.y;

      if (Math.abs(dx) > Math.abs(dy)) {
        setDirection(dx > 0 ? "right" : "left");
      } else {
        setDirection(dy > 0 ? "down" : "up");
      }

      let adjustedX = x + offset;
      let adjustedY = y + offset;

      if (x + iconWidth + offset > windowWidth) {
        adjustedX = x - iconWidth - offset;
      }
      if (y + iconHeight + offset > windowHeight) {
        adjustedY = y - iconHeight - offset;
      }

      setPosition({ x, y });
      setAdjustedPosition({ x: adjustedX, y: adjustedY });

      prevPos.current = { x, y };

      setIsSpinning(false);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);

      idleTimeout.current = window.setTimeout(() => {
        setIsSpinning(true);
      }, 2000);
    };
    
    const mouseEnterHandler = () => setIsVisible(true);
    const mouseLeaveHandler = () => setIsVisible(false);

    window.addEventListener("mousemove", moveHandler);
    document.body.addEventListener("mouseenter", mouseEnterHandler);
    document.body.addEventListener("mouseleave", mouseLeaveHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      document.body.removeEventListener("mouseenter", mouseEnterHandler);
      document.body.removeEventListener("mouseleave", mouseLeaveHandler);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
    };
  }, []);

  const transform = (() => {
    switch (direction) {
      case "left":
        return "scaleX(-1)";
      case "up":
        return "rotate(-90deg)";
      case "down":
        return "rotate(90deg)";
      default:
        return "none";
    }
  })();

  return (
    <Image
      src="https://www.flyinsite.de/images/paragleiter-sport-logo.png"
      alt="paraglider cursor icon"
      width={iconWidth}
      height={iconHeight}
      className={`fixed z-50 pointer-events-none transition-all duration-100 ease-linear hidden md:block ${
        isSpinning ? "animate-spin-slow" : ""
      } ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: adjustedPosition.x,
        top: adjustedPosition.y,
        transform,
      }}
      unoptimized
    />
  );
}

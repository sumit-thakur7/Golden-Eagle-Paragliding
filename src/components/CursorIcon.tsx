"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// Animation durations
const ANIMATION_TIMEOUTS = {
  IDLE: 2000, // 2s after mouse stops
  SWING: 10000, // swing runs 10s
  SPIN: 25000,  // spin runs 25s
};

const ICON_DIMENSIONS = {
  WIDTH: 100,
  HEIGHT: 150,
  OFFSET: 10,
};

type Direction = "left" | "right" | "up" | "down";
type AnimationStage = "idle" | "swing" | "spin";

export default function CursorIcon() {
  const [adjustedPosition, setAdjustedPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState<Direction>("right");
  const [animationStage, setAnimationStage] = useState<AnimationStage>("idle");

  const prevPos = useRef({ x: 0, y: 0 });
  const loopInterval = useRef<NodeJS.Timeout | null>(null);
  const idleTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const moveHandler = (e: MouseEvent) => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (loopInterval.current) clearInterval(loopInterval.current);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);

      animationFrameId = requestAnimationFrame(() => {
        const { clientX: x, clientY: y } = e;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const { WIDTH, HEIGHT, OFFSET } = ICON_DIMENSIONS;

        const dx = x - prevPos.current.x;
        const dy = y - prevPos.current.y;

        if (Math.abs(dx) > Math.abs(dy)) {
          setDirection(dx > 0 ? "right" : "left");
        } else {
          setDirection(dy > 0 ? "down" : "up");
        }

        let adjustedX = x + OFFSET;
        let adjustedY = y + OFFSET;

        if (x + WIDTH + OFFSET > windowWidth) {
          adjustedX = x - WIDTH - OFFSET;
        }
        if (y + HEIGHT + OFFSET > windowHeight) {
          adjustedY = y - HEIGHT - OFFSET;
        }

        setAdjustedPosition({ x: adjustedX, y: adjustedY });
        prevPos.current = { x, y };

        // Reset to idle
        setAnimationStage("idle");

        // Start idle countdown → swing → spin → loop
        idleTimeout.current = setTimeout(() => {
          setAnimationStage("swing");

          // Start loop: swing → spin → swing...
          loopInterval.current = setInterval(() => {
            setAnimationStage((prev) =>
              prev === "swing" ? "spin" : "swing"
            );
          }, ANIMATION_TIMEOUTS.SWING + ANIMATION_TIMEOUTS.SPIN);
        }, ANIMATION_TIMEOUTS.IDLE);
      });
    };

    window.addEventListener("mousemove", moveHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (loopInterval.current) clearInterval(loopInterval.current);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
    };
  }, []);

  const directionTransform = (() => {
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

  const animationClass =
    animationStage === "spin"
      ? "spin-animation"
      : animationStage === "swing"
      ? "swing-animation"
      : "";

  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{
        left: adjustedPosition.x,
        top: adjustedPosition.y,
        width: ICON_DIMENSIONS.WIDTH,
        height: ICON_DIMENSIONS.HEIGHT,
        transform: directionTransform,
      }}
    >
      <style jsx global>{`
        @keyframes swingFast {
          0%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(25deg); }
          20% { transform: rotate(-25deg); }
          30% { transform: rotate(20deg); }
          40% { transform: rotate(-20deg); }
          50% { transform: rotate(15deg); }
          60% { transform: rotate(-15deg); }
          70% { transform: rotate(10deg); }
          80% { transform: rotate(-10deg); }
          90% { transform: rotate(5deg); }
        }

        @keyframes spinFast {
          from { transform: rotate(0deg); }
          to { transform: rotate(1080deg); } /* 3 spins */
        }

        .swing-animation {
          animation: swingFast 10s ease-in-out forwards;
        }

        .spin-animation {
          animation: spinFast 25s linear forwards;
        }
      `}</style>

      <div className={`w-full h-full ${animationClass}`}>
        <Image
          src="/images/icons.png"
          alt="Animated cursor icon"
          width={ICON_DIMENSIONS.WIDTH}
          height={ICON_DIMENSIONS.HEIGHT}
          priority
          unoptimized
        />
      </div>
    </div>
  );
}

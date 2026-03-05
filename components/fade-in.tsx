"use client"

import { useFadeIn } from "@/hooks/use-fade-in"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  threshold?: number
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 800,
  threshold = 0.15,
}: FadeInProps) {
  const { ref, isVisible } = useFadeIn({ delay, threshold })

  const directionStyles = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
    none: "",
  }

  return (
    <div
      ref={ref}
      className={`${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : undefined,
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
      }}
    >
      <div
        style={{
          transform: isVisible ? "none" : undefined,
        }}
        className={isVisible ? "" : directionStyles[direction]}
      >
        {children}
      </div>
    </div>
  )
}

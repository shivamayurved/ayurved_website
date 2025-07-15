"use client"

import { useState, useEffect, useRef } from "react"

interface AnimatedCounterProps {
  /* Final value – you can pass  `end` or legacy `to` */
  end?: number
  to?: number
  /* Optional starting value – accepts `start` or legacy `from` */
  start?: number
  from?: number
  duration?: number
  prefix?: string
  suffix?: string
  decimalPlaces?: number
  className?: string
}

/**
 * AnimatedCounter
 *  – Supports both the original { end } API and legacy { to, from } props.
 *  – Prevents undefined values so `.toLocaleString()` never errors.
 */
export function AnimatedCounter({
  end,
  to,
  start,
  from,
  duration = 1000,
  prefix = "",
  suffix = "",
  decimalPlaces = 0,
  className = "",
}: AnimatedCounterProps) {
  /* Normalise prop names */
  const targetEnd = end ?? to ?? 0
  const startValue = start ?? from ?? 0

  const [count, setCount] = useState(startValue)
  const spanRef = useRef<HTMLSpanElement>(null)
  const frameRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    /* Abort if targetEnd isn’t a finite number */
    if (!Number.isFinite(targetEnd)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTimeRef.current = null
          animate()
        } else {
          cancelAnimationFrame(frameRef.current!)
          setCount(startValue)
        }
      },
      { threshold: 0.5 },
    )

    if (spanRef.current) observer.observe(spanRef.current)

    return () => {
      if (spanRef.current) observer.unobserve(spanRef.current)
      cancelAnimationFrame(frameRef.current!)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetEnd, duration, decimalPlaces, startValue])

  const animate = () => {
    frameRef.current = requestAnimationFrame((timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1)
      const current = startValue + progress * (targetEnd - startValue)
      setCount(Number.parseFloat(current.toFixed(decimalPlaces)))

      if (progress < 1) animate()
    })
  }

  return (
    <span ref={spanRef} className={className}>
      {prefix}
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      })}
      {suffix}
    </span>
  )
}

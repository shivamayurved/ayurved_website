"use client"

import { useEffect } from "react"

export function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
        } else {
          // Optional: remove the class when not intersecting if you want animations to re-trigger on scroll back
          entry.target.classList.remove("revealed")
        }
      })
    }, observerOptions)

    const scrollElements = document.querySelectorAll(".scroll-reveal")
    scrollElements.forEach((el) => observer.observe(el))

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el))
    }
  }, [])
}

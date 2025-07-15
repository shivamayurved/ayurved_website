"use client"

import { useEffect, useState } from "react"
import { LoadingSkeleton } from "./loading-skeleton"

export function LoadingPage() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 animate-pulse">Loading Dr. Santhosh Kumar's Clinic...</h1>
        <p className="text-lg text-gray-600 mt-2">Please wait a moment while we prepare your holistic experience.</p>
      </div>
      <LoadingSkeleton />
    </div>
  )
}

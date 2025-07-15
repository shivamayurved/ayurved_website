"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function InteractiveTestimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Raichur",
      rating: 5,
      quote:
        "Dr. Santhosh Kumar’s Ayurvedic treatments transformed my chronic digestive issues. I feel lighter, healthier, and full of energy. Highly recommend!",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Rajesh Singh",
      location: "Hyderabad",
      rating: 5,
      quote:
        "The personalized approach to my joint pain was incredible. After years of discomfort, I finally found lasting relief through Ayurveda here.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Anjali Devi",
      location: "Bengaluru",
      rating: 5,
      quote:
        "Panchakarma therapy at this clinic was a truly rejuvenating experience. My skin cleared up, and my stress levels significantly reduced. Thank you!",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Suresh Kumar",
      location: "Raichur",
      rating: 4,
      quote:
        "I was skeptical at first, but Dr. Kumar’s expertise and the effectiveness of the herbal remedies for my allergies have made me a believer in Ayurveda.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Meena Reddy",
      location: "Gulbarga",
      rating: 5,
      quote:
        "The holistic care for my infertility journey was compassionate and effective. I am so grateful for the support and positive results.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Arjun Prasad",
      location: "Raichur",
      rating: 5,
      quote:
        "Excellent clinic with genuine Ayurvedic treatments. My chronic back pain has improved dramatically, and I feel much more active.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative w-full max-w-2xl mx-auto py-4 flex flex-col items-center">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="w-full"
        >
          <div className="flex flex-col items-center text-center">
            <span className="mb-2">
              <Quote className="h-7 w-7 text-blue-800 mx-auto" />
            </span>
            <p className="text-base md:text-lg italic text-gray-900 mb-3 leading-snug font-normal max-w-2xl">
              "{currentTestimonial.quote}"
            </p>
            <div className="flex items-center justify-center mb-2">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400" />
              ))}
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image
                src={currentTestimonial.image || "/placeholder.svg"}
                alt={currentTestimonial.name}
                width={40}
                height={40}
                className="rounded-full object-cover border border-gray-300"
              />
              <span className="text-sm font-semibold text-gray-900 mt-1">{currentTestimonial.name}</span>
              <span className="text-xs text-gray-600">{currentTestimonial.location}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Minimal Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-transparent hover:bg-gray-100 rounded-full p-1 z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5 text-blue-800" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent hover:bg-gray-100 rounded-full p-1 z-10"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5 text-blue-800" />
      </Button>
    </div>
  )
}

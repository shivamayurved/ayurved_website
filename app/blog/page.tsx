"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, User, Clock, Search, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  useEffect(() => {
    // Initialize scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
        } else {
          // Remove the class when not intersecting, so it can be re-added later
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-primary text-white mb-4 text-base px-4 py-2">Health Blog</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-slideInLeft text-gray-900">
            Ayurvedic Wisdom & Health Tips
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fadeInUp">
            Discover ancient wisdom for modern health challenges with expert insights from Dr. Santhosh Kumar
          </p>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between scroll-reveal">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search health topics..." className="pl-10 hover-lift" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {["All", "Piles", "Skin Care", "Fertility", "Joint Pain", "Panchakarma", "Diet"].map(
                (category, index) => (
                  <Badge
                    key={category}
                    variant={index === 0 ? "default" : "outline"}
                    className={`cursor-pointer hover-scale ${
                      index === 0 ? "bg-primary text-white" : "hover:bg-primary/10"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {category}
                  </Badge>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 scroll-reveal">
            <Badge className="bg-primary text-white mb-4 text-base px-4 py-2">Featured Article</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Latest Health Insights</h2>
          </div>

          <Card className="bg-white shadow-xl overflow-hidden interactive-card scroll-reveal">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                {/* Replace with a real image for the featured article */}
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Featured article image related to natural piles prevention"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover hover-scale"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white">Featured</Badge>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>December 15, 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>Dr. Santhosh Kumar</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>5 min read</span>
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Natural Ways to Prevent Piles: An Ayurvedic Approach
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Discover time-tested Ayurvedic methods to prevent hemorrhoids naturally. Learn about dietary
                    changes, lifestyle modifications, and herbal remedies that can keep you healthy and comfortable.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-transparent">
                      Piles
                    </Badge>
                    <Badge variant="outline" className="bg-transparent">
                      Prevention
                    </Badge>
                    <Badge variant="outline" className="bg-transparent">
                      Diet
                    </Badge>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 w-fit hover-lift">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Recent Articles</h2>
            <p className="text-lg text-gray-600">Expert advice on natural healing and wellness</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "5 Ayurvedic Herbs for Glowing Skin",
                excerpt: "Discover powerful herbs that can transform your skin naturally without harsh chemicals.",
                // Replace with a real image for skin care
                image: "/placeholder.svg?height=200&width=300",
                category: "Skin Care",
                date: "Dec 12, 2024",
                readTime: "4 min",
                delay: "0s",
              },
              {
                title: "Panchakarma: Complete Detox Guide",
                excerpt: "Everything you need to know about this ancient detoxification therapy and its benefits.",
                // Replace with a real image for Panchakarma
                image: "/placeholder.svg?height=200&width=300",
                category: "Panchakarma",
                date: "Dec 10, 2024",
                readTime: "6 min",
                delay: "0.1s",
              },
              {
                title: "Fertility Foods in Ayurveda",
                excerpt: "Natural foods and spices that can enhance fertility for both men and women.",
                // Replace with a real image for fertility
                image: "/placeholder.svg?height=200&width=300",
                category: "Fertility",
                date: "Dec 8, 2024",
                readTime: "5 min",
                delay: "0.2s",
              },
              {
                title: "Joint Pain Relief with Ayurveda",
                excerpt: "Natural remedies and therapies for managing arthritis and joint pain effectively.",
                // Replace with a real image for joint pain
                image: "/placeholder.svg?height=200&width=300",
                category: "Joint Pain",
                date: "Dec 5, 2024",
                readTime: "4 min",
                delay: "0.3s",
              },
              {
                title: "Seasonal Eating for Better Health",
                excerpt: "How to align your diet with seasons according to Ayurvedic principles.",
                // Replace with a real image for diet/food
                image: "/placeholder.svg?height=200&width=300",
                category: "Diet",
                date: "Dec 3, 2024",
                readTime: "3 min",
                delay: "0.4s",
              },
              {
                title: "Stress Management the Ayurvedic Way",
                excerpt: "Ancient techniques to manage modern stress and achieve mental peace.",
                // Replace with a real image for stress management/wellness
                image: "/placeholder.svg?height=200&width=300",
                category: "Wellness",
                date: "Dec 1, 2024",
                readTime: "5 min",
                delay: "0.5s",
              },
            ].map((article, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg overflow-hidden interactive-card scroll-reveal"
                style={{ animationDelay: article.delay }}
              >
                <div className="relative">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover hover-scale"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">{article.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover-scale bg-transparent border-primary text-primary hover:bg-primary/10"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 scroll-reveal">
            <Button className="bg-primary hover:bg-primary/90 hover-lift">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-primary/80 text-white scroll-reveal">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">Stay Updated with Health Tips</h2>
          <p className="text-xl text-primary-foreground">
            Get weekly Ayurvedic health tips and wellness advice directly in your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70 hover-lift"
            />
            <Button className="bg-accent hover:bg-accent/90 hover-lift">Subscribe</Button>
          </div>
          <p className="text-sm text-primary-foreground/80">No spam, unsubscribe anytime</p>
        </div>
      </section>
    </div>
  )
}

"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, Users, Heart, Award } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { AnimatedCounter } from "@/components/animated-counter"
import { Badge } from "@/components/ui/badge"

export default function TestimonialsPage() {
  useScrollAnimation()

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Raichur",
      rating: 5,
      quote:
        "Dr. Santhosh Kumar’s Ayurvedic treatments transformed my chronic digestive issues. I feel lighter, healthier, and full of energy. Highly recommend!",
      // Replace with a real image of Priya Sharma
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Rajesh Singh",
      location: "Hyderabad",
      rating: 5,
      quote:
        "The personalized approach to my joint pain was incredible. After years of discomfort, I finally found lasting relief through Ayurveda here.",
      // Replace with a real image of Rajesh Singh
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Anjali Devi",
      location: "Bengaluru",
      rating: 5,
      quote:
        "Panchakarma therapy at this clinic was a truly rejuvenating experience. My skin cleared up, and my stress levels significantly reduced. Thank you!",
      // Replace with a real image of Anjali Devi
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Suresh Kumar",
      location: "Raichur",
      rating: 4,
      quote:
        "I was skeptical at first, but Dr. Kumar’s expertise and the effectiveness of the herbal remedies for my allergies have made me a believer in Ayurveda.",
      // Replace with a real image of Suresh Kumar
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Meena Reddy",
      location: "Gulbarga",
      rating: 5,
      quote:
        "The holistic care for my infertility journey was compassionate and effective. I am so grateful for the support and positive results.",
      // Replace with a real image of Meena Reddy
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Arjun Prasad",
      location: "Raichur",
      rating: 5,
      quote:
        "Excellent clinic with genuine Ayurvedic treatments. My chronic back pain has improved dramatically, and I feel much more active.",
      // Replace with a real image of Arjun Prasad
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center text-center overflow-hidden">
          {/* Replace with a real image of happy patients or a serene clinic setting */}
          <Image
            src="/images/ayurved_home.jpg"
            alt="Ayurvedic herbs, spices, and natural ingredients on a table with a lush green background"
            layout="fill"
            objectFit="cover"
          />
          <div className="relative z-10 p-4 max-w-4xl mx-auto scroll-reveal">
            <Badge className="bg-green-600 hover:bg-green-700 text-white mb-4 text-base px-4 py-2">Patient Stories</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-fadeInUp">
              Patient Success Stories
            </h1>
            <p className="text-lg md:text-xl text-gray-700 animate-fadeInUp animation-delay-200">
              Hear from those who found healing and renewed health with Dr. Santhosh Kumar.
            </p>
          </div>
        </section>

        {/* Success Statistics */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                {
                  icon: <Users className="h-8 w-8 text-primary" />,
                  number: 500,
                  suffix: "+",
                  label: "Happy Patients",
                  delay: "0s",
                },
                {
                  icon: <Heart className="h-8 w-8 text-primary" />,
                  number: 95,
                  suffix: "%",
                  label: "Success Rate",
                  delay: "0.1s",
                },
                {
                  icon: <Star className="h-8 w-8 text-accent" />,
                  number: 4.9,
                  suffix: "/5",
                  label: "Average Rating",
                  delay: "0.2s",
                },
                {
                  icon: <Award className="h-8 w-8 text-accent" />,
                  number: 10,
                  suffix: "+",
                  label: "Years Experience",
                  delay: "0.3s",
                },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="bg-gray-50 interactive-card scroll-reveal"
                  style={{ animationDelay: stat.delay }}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4 animate-float" style={{ animationDelay: stat.delay }}>
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-reveal">
              Inspiring Journeys of Wellness
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto scroll-reveal">
              Our patients' experiences speak volumes about the effectiveness of personalized Ayurvedic care.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-6 shadow-lg hover-lift interactive-card flex flex-col items-center text-center scroll-reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0 flex flex-col items-center">
                    <Quote className="h-10 w-10 text-accent mb-4" />
                    <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="flex items-center space-x-3 mt-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-24 bg-primary text-white text-center">
          <div className="max-w-4xl mx-auto px-4 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Share Your Story?</h2>
            <p className="text-lg mb-8">We'd love to hear about your experience and how Ayurveda has helped you.</p>
            <Link href="/contact" passHref>
              <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-full shadow-lg hover-lift">
                Contact Us to Share
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

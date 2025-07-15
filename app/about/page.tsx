"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, Award, GraduationCap, Heart, Star } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  useScrollAnimation()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center text-center overflow-hidden">
          {/* Replace with a real image of an Ayurvedic background or clinic exterior */}
          <Image
            src="/images/ayurved_home.jpg"
            alt="Ayurvedic herbs, spices, and natural ingredients on a table with a lush green background"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
          <div className="relative z-10 p-4 max-w-4xl mx-auto scroll-reveal">
            <Badge className="bg-green-600 hover:bg-green-700 text-white mb-4 text-base px-4 py-2">About Our Doctor</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4 animate-fadeInUp">
              About Dr. Santhosh Kumar
            </h1>
            <p className="text-lg md:text-xl text-gray-700 animate-fadeInUp animation-delay-200">
              Your trusted guide to holistic health and Ayurvedic wellness.
            </p>
          </div>
        </section>

        {/* Dr. Kumar's Story Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[450px] md:h-[550px] rounded-lg overflow-hidden shadow-xl scroll-reveal animate-slideInLeft">
              {/* This image is already provided as dr-Santhosh-kumar.jpeg */}
              <Image 
                src="/images/dr-Santosh-kumar.jpeg" 
                alt="Dr. Santhosh Kumar in clinic" 
                fill 
                className="object-cover" 
                style={{ objectPosition: 'center 35%' }}
              />
            </div>
            <div className="scroll-reveal animate-slideInRight">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">A Decade of Dedication to Ayurveda</h2>
              <p className="text-lg text-gray-700 mb-4">
                Dr. Santhosh Kumar is a highly respected Ayurvedic practitioner with over 10 years of experience,
                dedicated to bringing the profound benefits of ancient Indian medicine to modern lives. His journey
                began with a deep passion for natural healing and a commitment to understanding the intricate balance of
                the human body.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                He completed his Bachelor of Ayurvedic Medicine and Surgery (BAMS) from Government Ayurveda Medical College and Hospital, Mysore, followed
                by extensive practical training and specialization in various Ayurvedic therapies. Dr. Kumar believes in
                a patient-centric approach, crafting personalized treatment plans that address the root cause of
                ailments.
              </p>
              <Link href="/contact" passHref>
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md hover-lift">
                  Consult with Dr. Kumar
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-reveal">Our Philosophy</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto scroll-reveal">
              At Dr. Santhosh Kumar's ayurveda and panchakarma center, our philosophy is rooted in the core principles of Ayurveda:
              holism, balance, and natural healing.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center scroll-reveal animate-fadeInUp">
                <Leaf className="h-16 w-16 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Holistic Wellness</h3>
                <p className="text-gray-600">
                  We treat the individual as a whole – mind, body, and spirit – recognizing their interconnectedness.
                </p>
              </div>
              <div className="flex flex-col items-center text-center scroll-reveal animate-fadeInUp animation-delay-100">
                <Heart className="h-16 w-16 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Care</h3>
                <p className="text-gray-600">
                  Every treatment plan is uniquely tailored to your constitution and health needs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center scroll-reveal animate-fadeInUp animation-delay-200">
                <Star className="h-16 w-16 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Empowering Health</h3>
                <p className="text-gray-600">
                  We empower you with knowledge and tools to maintain long-term health and vitality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications & Expertise Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-reveal">
              Qualifications & Expertise
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto scroll-reveal">
              Dr. Santhosh Kumar's extensive education and experience ensure the highest standard of Ayurvedic care.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg shadow-md scroll-reveal animate-slideInLeft">
                <GraduationCap className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Background</h3>
                  <p className="text-gray-700">
                    Bachelor of Ayurvedic Medicine and Surgery (BAMS) from Government Ayurveda Medical College and Hospital, a leading institution in
                    Ayurvedic studies.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg shadow-md scroll-reveal animate-slideInRight">
                <Award className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Certifications & Recognition</h3>
                  <p className="text-gray-700">
                    Government of Karnataka Certified Ayurvedic Practitioner. Recognized for contributions to Ayurvedic
                    research and patient care.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg shadow-md scroll-reveal animate-slideInLeft animation-delay-100">
                <Leaf className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Areas of Expertise</h3>
                  <p className="text-gray-700">
                    Specialization in Panchakarma, chronic disease management, lifestyle disorders, and women's health.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg shadow-md scroll-reveal animate-slideInRight animation-delay-100">
                <Heart className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Commitment to Patients</h3>
                  <p className="text-gray-700">
                    Dedicated to providing compassionate, ethical, and effective Ayurvedic healthcare solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-24 bg-primary text-white text-center">
          <div className="max-w-4xl mx-auto px-4 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Ayurvedic Journey?</h2>
            <p className="text-lg mb-8">
              Schedule a consultation with Dr. Santhosh Kumar and experience personalized holistic healing.
            </p>
            <Link href="/contact" passHref>
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-lg hover-lift">
                Book Your Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, Droplet, Sun, Zap, FlaskConical, Heart, CheckCircle, Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedCounter } from "@/components/animated-counter"

export default function PanchakarmaPage() {
  useScrollAnimation()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center text-center overflow-hidden">
          {/* Replace with a real image of Panchakarma therapy or related elements */}
          <Image
            src="/images/ayurved_home.jpg"
            alt="Ayurvedic herbs, spices, and natural ingredients on a table with a lush green background"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4 max-w-4xl mx-auto scroll-reveal">
            <Badge className="bg-green-600 hover:bg-green-700 text-white mb-2 text-base px-4 py-2">Signature Treatment</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight mb-4 animate-fadeInUp text-center">
              Panchakarma: Deep Cleansing & Rejuvenation
            </h1>
            <p className="text-lg md:text-xl text-black animate-fadeInUp animation-delay-200 text-center">
              Experience the ultimate Ayurvedic detoxification for profound healing and vitality.
            </p>
          </div>
        </section>

        {/* Introduction to Panchakarma */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal animate-slideInLeft">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What is Panchakarma?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Panchakarma, meaning "five actions," is a cornerstone of Ayurvedic therapy. It is a powerful and
                holistic detoxification and rejuvenation program designed to cleanse the body of accumulated toxins
                (Ama), balance the three doshas (Vata, Pitta, Kapha), and restore the body's natural healing abilities.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This ancient therapy goes beyond superficial cleansing, aiming to eliminate disease-causing toxins from
                their roots, leading to profound and lasting health benefits. It's a personalized process, tailored to
                each individual's unique constitution and health imbalances.
              </p>
              <Link href="/contact" passHref>
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md hover-lift">
                  Enquire About Panchakarma
                </Button>
              </Link>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl scroll-reveal animate-slideInRight">
              {/* Replace with a real image of an Ayurvedic massage or therapy session */}
              <Image
                src="/images/panchakarma_banner.jpg"
                alt="Ayurvedic massage or therapy session"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        {/* The Five Actions of Panchakarma */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-reveal">The Five Core Therapies</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto scroll-reveal">
              Panchakarma consists of five primary therapeutic procedures, each targeting specific toxins and
              imbalances.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Vamana (Therapeutic Emesis) */}
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/panchakarma/vamana.jpg" alt="Vamana (Therapeutic Emesis)" width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Vamana (Therapeutic Emesis)</h3>
                <p className="text-gray-600">
                  Eliminates excess Kapha dosha, beneficial for respiratory issues, allergies, and skin conditions.
                </p>
              </div>
              {/* Virechana (Purgation Therapy) */}
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-100">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/panchakarma/virechana.png" alt="Virechana (Purgation Therapy)" width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Virechana (Purgation Therapy)</h3>
                <p className="text-gray-600">
                  Removes excess Pitta dosha, effective for digestive disorders, liver issues, and chronic fevers.
                </p>
              </div>
              {/* Basti (Medicated Enema) */}
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-200">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/panchakarma/basti.png" alt="Basti (Medicated Enema)" width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Basti (Medicated Enema)</h3>
                <p className="text-gray-600">
                  The most important therapy, balancing Vata dosha, beneficial for neurological disorders, joint pain, and constipation.
                </p>
              </div>
              {/* Nasya (Nasal Administration) */}
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-300">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/panchakarma/nasya.jpg" alt="Nasya (Nasal Administration)" width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Nasya (Nasal Administration)</h3>
                <p className="text-gray-600">
                  Cleanses and nourishes the nasal passages, effective for headaches, sinusitis, and mental clarity.
                </p>
              </div>
              {/* Raktamokshana (Bloodletting) */}
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-400">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/panchakarma/rakhtamokshana (Leech Therapy).jpg" alt="Raktamokshana (Bloodletting)" width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Raktamokshana (Bloodletting)</h3>
                <p className="text-gray-600">
                  Purifies the blood, used for specific skin conditions, localized pain, and inflammatory issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-24 bg-primary text-white text-center">
          <div className="max-w-4xl mx-auto px-4 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Deep Transformation?</h2>
            <p className="text-lg mb-8">
              Discover how Panchakarma can revitalize your health. Schedule a consultation today.
            </p>
            <Link href="/contact" passHref>
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-lg hover-lift">
                Book Your Panchakarma Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

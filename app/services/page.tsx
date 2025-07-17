"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Leaf,
  Heart,
  ShieldCheck,
  FlaskConical,
  Bone,
  Brain,
  Stethoscope,
  Syringe,
  Pill,
  Sun,
  Droplet,
  Flame,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
  useScrollAnimation() // Apply scroll animation hook globally

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center text-center overflow-hidden">
          {/* Replace with a real image representing Ayurvedic services or treatments */}
          <Image
            src="/images/ayurved_home.jpg"
            alt="Ayurvedic herbs, spices, and natural ingredients on a table with a lush green background"
            layout="fill"
            objectFit="cover"
              className="opacity-30"
          />
          <div className="relative z-10 p-4 max-w-4xl mx-auto scroll-reveal">
            <Badge className="bg-green-600 hover:bg-green-700 text-white mb-4 text-base px-4 py-2">Our Services</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight mb-4 animate-fadeInUp">
              Our Comprehensive Ayurvedic Services
            </h1>
            <p className="text-lg md:text-xl text-black animate-fadeInUp animation-delay-200">
              Personalized care for your holistic well-being.
            </p>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-reveal">
              Main Ayurvedic Treatments
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto scroll-reveal">
              We offer a wide range of traditional Ayurvedic therapies and consultations to address various health
              concerns.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Personalized Consultations */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp">
                <div className="relative w-full flex justify-center">
                  <div className="h-28 w-28 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center absolute -top-14 z-10 shadow-lg border-4 border-white">
                    <Image src="/images/services/consulations.jpg" alt="Consultation" width={112} height={112} className="object-cover w-full h-full" />
                  </div>
                </div>
                <div className="mt-16" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Consultations</h3>
                <p className="text-gray-600">
                  In-depth assessment of your unique constitution (Prakriti) and current imbalances (Vikriti) to create
                  a tailored treatment plan.
                </p>
              </div>
              {/* Herbal Medicine */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-100">
                <div className="relative w-full flex justify-center">
                  <div className="h-28 w-28 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center absolute -top-14 z-10 shadow-lg border-4 border-white">
                    <Image src="/images/services/herbal_medicine.webp" alt="Herbal Medicine" width={112} height={112} className="object-cover w-full h-full" />
                  </div>
                </div>
                <div className="mt-16" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Herbal Medicine</h3>
                <p className="text-gray-600">
                  Prescription of potent Ayurvedic herbal formulations to support healing and restore balance.
                </p>
              </div>
              {/* Diet & Lifestyle Counseling */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-200">
                <div className="relative w-full flex justify-center">
                  <div className="h-28 w-28 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center absolute -top-14 z-10 shadow-lg border-4 border-white">
                    <Image src="/images/services/diet_plan.jpg" alt="Diet & Lifestyle Counseling" width={112} height={112} className="object-cover w-full h-full" />
                  </div>
                </div>
                <div className="mt-16" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diet & Lifestyle Counseling</h3>
                <p className="text-gray-600">
                  Guidance on Ayurvedic diet principles and lifestyle adjustments for optimal health and disease
                  prevention.
                </p>
              </div>
              {/* Joint & Spine Care */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-300">
                <div className="relative w-full flex justify-center">
                  <div className="h-28 w-28 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center absolute -top-14 z-10 shadow-lg border-4 border-white">
                    <Image src="/images/services/joint_pain.jpeg" alt="Joint & Spine Care" width={112} height={112} className="object-cover w-full h-full" />
                  </div>
                </div>
                <div className="mt-16" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Joint & Spine Care</h3>
                <p className="text-gray-600">
                  Specialized treatments for arthritis, back pain, cervical spondylosis, and other musculoskeletal issues.
                </p>
              </div>
              {/* Chronic Disease Management */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-400">
                <div className="relative w-full flex justify-center">
                  <div className="h-28 w-28 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center absolute -top-14 z-10 shadow-lg border-4 border-white">
                    <Image src="/images/services/chronic_disease.png" alt="Chronic Disease Management" width={112} height={112} className="object-cover w-full h-full" />
                  </div>
                </div>
                <div className="mt-16" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Chronic Disease Management</h3>
                <p className="text-gray-600">
                  Holistic management of conditions like diabetes, hypertension, thyroid disorders, and autoimmune diseases.
                </p>
              </div>
              {/* Stress & Mental Wellness */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-500">
                <div className="relative w-full flex justify-center">
                  <div className="h-28 w-28 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center absolute -top-14 z-10 shadow-lg border-4 border-white">
                    <Image src="/images/services/stress.jpg" alt="Stress & Mental Wellness" width={112} height={112} className="object-cover w-full h-full" />
                  </div>
                </div>
                <div className="mt-16" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Stress & Mental Wellness</h3>
                <p className="text-gray-600">
                  Ayurvedic approaches to reduce stress, anxiety, insomnia, and improve overall mental clarity.
                </p>
              </div>
            </div>
            <div className="mt-12 scroll-reveal">
              <Link href="/panchakarma" passHref>
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full shadow-lg hover-lift">
                  Learn More About Panchakarma
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Panchakarma Therapies Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-reveal">
              Specialized Panchakarma Therapies
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto scroll-reveal">
              Our clinic offers a full range of Panchakarma treatments for deep detoxification and rejuvenation.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Abhyanga (Oil Massage) */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/panchakarma/abhyanga.jpg" alt="Abhyanga (Oil Massage)" width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Abhyanga (Oil Massage)</h3>
                <p className="text-gray-600">
                  Full body massage with warm herbal oils to nourish tissues, relax muscles, and mobilize toxins.
                </p>
              </div>
              {/* Swedana (Herbal Steam) */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-100">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/panchakarma/Swedana.jpg" alt="Swedana (Herbal Steam)" width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Swedana (Herbal Steam)</h3>
                <p className="text-gray-600">
                  Therapeutic sweating to open channels, liquefy toxins, and prepare the body for cleansing.
                </p>
              </div>
              {/* Shirodhara */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-200">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/panchakarma/shirodhara.jpg" alt="Shirodhara" width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Shirodhara</h3>
                <p className="text-gray-600">
                  Continuous pouring of warm oil on the forehead to calm the nervous system, reduce stress, and improve sleep.
                </p>
              </div>
              {/* Basti (Medicated Enema) */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-300">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/panchakarma/basti.png" alt="Basti (Medicated Enema)" width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Basti (Medicated Enema)</h3>
                <p className="text-gray-600">
                  The most important Panchakarma therapy for balancing Vata dosha, beneficial for various chronic conditions.
                </p>
              </div>
              {/* Nasya (Nasal Cleansing) */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-400">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/panchakarma/nasya.jpg" alt="Nasya (Nasal Cleansing)" width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Nasya (Nasal Cleansing)</h3>
                <p className="text-gray-600">
                  Administration of herbal oils through nasal passages to cleanse and nourish the head region.
                </p>
              </div>
              {/* Udvartana (Herbal Powder Massage) */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-500">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/panchakarma/udvartana.jpg" alt="Udvartana (Herbal Powder Massage)" width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Udvartana (Herbal Powder Massage)</h3>
                <p className="text-gray-600">
                  Dry massage with herbal powders to reduce cellulite, improve circulation, and exfoliate skin.
                </p>
              </div>
              {/* Janu Basti */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-600">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/panchakarma/janubasti.png" alt="Janu Basti" width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Janu Basti</h3>
                <p className="text-gray-600">
                  Warm medicated oil therapy for the knees, effective for pain, stiffness, and joint health.
                </p>
              </div>
              {/* Kati Basti */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-700">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/panchakarma/katibasti.jpg" alt="Kati Basti" width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kati Basti</h3>
                <p className="text-gray-600">
                  Localized oil therapy for the lower back, relieves lumbar pain, sciatica, and muscle spasms.
                </p>
              </div>
              {/* Greeva Basti */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-800">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/panchakarma/Greeva basti.png" alt="Greeva Basti" width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Greeva Basti</h3>
                <p className="text-gray-600">
                  Medicated oil therapy for the neck region, helps with cervical spondylosis and neck stiffness.
                </p>
              </div>
              {/* Agnikarma */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-900">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/panchakarma/agnikarma.jpg" alt="Agnikarma" width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Agnikarma</h3>
                <p className="text-gray-600">
                  Therapeutic heat treatment for pain relief in musculoskeletal disorders and chronic conditions.
                </p>
              </div>
              {/* Raktamokshana */}
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-1000">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/panchakarma/rakhtamokshana (Leech Therapy).jpg" alt="Raktamokshana" width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Raktamokshana</h3>
                <p className="text-gray-600">
                  Bloodletting therapy to purify blood, used for skin diseases, inflammation, and detoxification.
                </p>
              </div>
            </div>
            <div className="mt-12 scroll-reveal">
              <Link href="/panchakarma" passHref>
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full shadow-lg hover-lift">
                  Learn More About Panchakarma
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-24 bg-primary text-white text-center">
          <div className="max-w-4xl mx-auto px-4 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find the Right Treatment for You?</h2>
            <p className="text-lg mb-8">
              Schedule a consultation with Dr. Santhosh Kumar to discuss your health goals and discover your personalized
              Ayurvedic path.
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

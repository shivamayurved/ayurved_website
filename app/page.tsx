"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Heart, ShieldCheck, Star, Quote, Calendar, Phone, MapPin, Clock, Users, Award } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { InteractiveTestimonials } from "@/components/interactive-testimonials"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useRef, useState, useEffect } from "react"
import type { UseEmblaCarouselType } from "embla-carousel-react";

export default function HomePage() {
  useScrollAnimation()

  // Carousel state for active slide
  const [selectedIndex, setSelectedIndex] = useState(0);
  const emblaApiRef = useRef<UseEmblaCarouselType[1] | null>(null);
  const slideCount = 2; // Update if you add more slides

  // Listen to carousel changes
  useEffect(() => {
    if (!emblaApiRef.current) return;
    const api = emblaApiRef.current;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [emblaApiRef.current]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Carousel Section - moved outside main for full-bleed */}
      <section className="relative w-screen h-[500px] md:h-[650px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100 p-0 left-1/2 right-1/2 -translate-x-1/2">
        <Carousel className="w-full h-full" setApi={api => (emblaApiRef.current = api)}>
          <CarouselContent>
            <CarouselItem>
              <div className="relative w-full h-[500px] md:h-[650px]">
                <Image
                  src="/images/banner/hero_section_1.png"
                  alt="Bone Joint and Spine Disease"
                  fill
                  className="object-cover object-top w-full h-full"
                  priority
                />
                <div className="absolute inset-0 flex items-center">
                  <div className="bg-green-900/60 backdrop-blur p-3 md:p-8 rounded-xl w-full max-w-xs md:max-w-2xl mx-auto flex flex-col items-center text-center">
                    <h2 className="text-base md:text-4xl font-bold text-white mb-2">Regain Mobility & Live Pain-Free</h2>
                    <p className="text-white text-xs md:text-lg mb-4">Expert Ayurvedic care for Bone, Joint & Spine Disorders</p>
                    <Link href="/contact" passHref>
                      <div className="w-full flex justify-center">
                        <Button className="bg-green-600 hover:bg-green-700 text-white text-base md:text-lg w-full max-w-xs px-8 py-4 rounded-full shadow-lg hover-lift flex flex-col items-center">
                          <span>Book Appointment</span>
                          <span className="block text-xs mt-1">(first consultation free)</span>
                        </Button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
            {/* Second Slide: Skin Disease/Rashes */}
            <CarouselItem>
              <div className="relative w-full h-[500px] md:h-[650px]">
                <Image
                  src="/images/banner/hero_section_2.png"
                  alt="Skin Disease and Rashes"
                  fill
                  className="object-cover object-top w-full h-full"
                  priority
                />
                <div className="absolute inset-0 flex items-center">
                  <div className="bg-green-900/60 backdrop-blur p-3 md:p-8 rounded-xl w-full max-w-xs md:max-w-2xl mx-auto flex flex-col items-center text-center">
                    <h2 className="text-base md:text-4xl font-bold text-white mb-2">Clear Skin, Confident Life</h2>
                    <p className="text-white text-xs md:text-lg mb-4">Holistic Ayurvedic solutions for skin diseases, rashes, and chronic conditions.</p>
                    <Link href="/contact" passHref>
                      <div className="w-full flex justify-center">
                        <Button className="bg-green-600 hover:bg-green-700 text-white text-base md:text-lg w-full max-w-xs px-8 py-4 rounded-full shadow-lg hover-lift flex flex-col items-center">
                          <span>Book Appointment</span>
                          <span className="block text-xs mt-1">(first consultation free)</span>
                        </Button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
            {/* Add more CarouselItem slides here if needed */}
          </CarouselContent>
          {/* Carousel Arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 rounded-full p-2 shadow hover:bg-white"
            onClick={() => emblaApiRef.current && emblaApiRef.current.scrollPrev()}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 rounded-full p-2 shadow hover:bg-white"
            onClick={() => emblaApiRef.current && emblaApiRef.current.scrollNext()}
            aria-label="Next slide"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
          </button>
          {/* Dynamic Carousel Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {[...Array(slideCount)].map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full border border-green-700 ${selectedIndex === idx ? 'bg-green-600' : 'bg-white/80'}`}
                onClick={() => emblaApiRef.current && emblaApiRef.current.scrollTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </section>
      <main className="flex-1">
        {/* About Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal animate-slideInLeft">
              {/* This image is already provided as dr-Santhosh-kumar.jpeg */}
              <Image
                src="/images/dr-santosh-kumar.jpeg"
                alt="Dr. Santhosh Kumar in clinic"
                width={500}
                height={400}
                className="rounded-lg shadow-lg hover-lift"
              />
            </div>
            <div className="space-y-6 scroll-reveal animate-slideInRight">
              <div>
                <Badge className="bg-primary text-white mb-4 text-base px-4 py-2">About Our Doctor</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Dr. Santhosh Kumar</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A dedicated Ayurvedic physician with over 10 years of experience in providing holistic healthcare
                  solutions. Trained under renowned Ayurvedic masters and certified by the Government of Karnataka.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 interactive-card p-3 rounded-lg">
                  <Award className="h-8 w-8 text-accent animate-float" />
                  <div>
                    <p className="font-semibold">Government Certified</p>
                    <p className="text-sm text-gray-600">Licensed Practitioner</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 interactive-card p-3 rounded-lg">
                  <Users className="h-8 w-8 text-accent animate-float" style={{ animationDelay: "1s" }} />
                  <div>
                    <p className="font-semibold">
                      <AnimatedCounter to={500} suffix="+ Patients" />
                    </p>
                    <p className="text-sm text-gray-600">Successfully Treated</p>
                  </div>
                </div>
              </div>
              <Link href="/about" passHref>
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md hover-lift">
                  Learn More About Dr. Kumar
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-reveal">Our Core Services</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto scroll-reveal">
              We offer a comprehensive range of Ayurvedic treatments tailored to your unique constitution and health
              needs.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 shadow-lg hover-lift interactive-card scroll-reveal animate-fadeInUp">
                <CardContent className="flex flex-col items-center p-0">
                  <div className="relative w-full flex justify-center">
                    <div className="h-28 w-28 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center absolute -top-14 z-10 shadow-lg border-4 border-white">
                      <Image src="/images/services/consulations.jpg" alt="Consultation" width={112} height={112} className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <div className="mt-16" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Consultations</h3>
                  <p className="text-gray-600 text-center">
                    In-depth assessment to understand your unique body type (Prakriti) and imbalances (Vikriti).
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-100">
                <CardContent className="flex flex-col items-center p-0">
                  <div className="relative w-full flex justify-center">
                    <div className="h-28 w-28 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center absolute -top-14 z-10 shadow-lg border-4 border-white">
                      <Image src="/images/services/panchakarma.png" alt="Panchakarma" width={112} height={112} className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <div className="mt-16" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Panchakarma Therapies</h3>
                  <p className="text-gray-600 text-center">
                    Traditional detoxification and rejuvenation therapies for deep cleansing and healing.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-200">
                <CardContent className="flex flex-col items-center p-0">
                  <div className="relative w-full flex justify-center">
                    <div className="h-28 w-28 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center absolute -top-14 z-10 shadow-lg border-4 border-white">
                      <Image src="/images/services/chronic_disease.png" alt="Chronic Disease Management" width={112} height={112} className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <div className="mt-16" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Chronic Disease Management</h3>
                  <p className="text-gray-600 text-center">
                    Effective Ayurvedic solutions for chronic conditions like diabetes, arthritis, and skin disorders.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 scroll-reveal">
              <Link href="/services" passHref>
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full shadow-lg hover-lift">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-reveal">
              Why Choose Dr. Santhosh Kumar's ayurveda and panchakarma center?
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto scroll-reveal">
              Experience the difference of authentic Ayurvedic care combined with compassionate support.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center scroll-reveal animate-fadeInUp">
                <Star className="h-16 w-16 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Experienced Practitioner</h3>
                <p className="text-gray-600">
                  Dr. Santhosh Kumar brings over 10 years of expertise in Ayurvedic medicine.
                </p>
              </div>
              <div className="flex flex-col items-center text-center scroll-reveal animate-fadeInUp animation-delay-100">
                <Leaf className="h-16 w-16 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Holistic Approach</h3>
                <p className="text-gray-600">Treating mind, body, and spirit for comprehensive well-being.</p>
              </div>
              <div className="flex flex-col items-center text-center scroll-reveal animate-fadeInUp animation-delay-200">
                <Quote className="h-16 w-16 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient-Centric Care</h3>
                <p className="text-gray-600">Personalized treatment plans designed for your unique health journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 scroll-reveal">Our Achievements</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="scroll-reveal animate-scaleIn">
                <AnimatedCounter from={0} to={10} duration={2000} className="text-5xl font-bold mb-2" />
                <p className="text-lg">Years of Experience</p>
              </div>
              <div className="scroll-reveal animate-scaleIn animation-delay-100">
                <AnimatedCounter from={0} to={2500} duration={2000} className="text-5xl font-bold mb-2" />
                <p className="text-lg">Happy Patients</p>
              </div>
              <div className="scroll-reveal animate-scaleIn animation-delay-200">
                <AnimatedCounter from={0} to={50} duration={2000} className="text-5xl font-bold mb-2" />
                <p className="text-lg">Therapies Offered</p>
              </div>
              <div className="scroll-reveal animate-scaleIn animation-delay-300">
                <AnimatedCounter from={0} to={95} duration={2000} className="text-5xl font-bold mb-2" />
                <p className="text-lg">Success Rate (%)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-reveal">What Our Patients Say</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto scroll-reveal">
              Hear inspiring stories from those who found healing and wellness with us.
            </p>
            <InteractiveTestimonials />
            <div className="mt-12 scroll-reveal">
              <Link href="/testimonials" passHref>
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full shadow-lg hover-lift">
                  Read All Testimonials
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Before & After Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-reveal">
              Transformations Through Ayurveda
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto scroll-reveal">
              Witness the remarkable changes our patients have experienced on their healing journey.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Custom Before/After Portrait Card */}
              <Card className="p-6 shadow-lg interactive-card scroll-reveal animate-fadeInUp">
                <CardContent className="p-0">
                  <div className="flex justify-center items-center pt-8 pb-2">
                    <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] max-w-full rounded-xl overflow-hidden border-2 border-gray-300 shadow-lg mb-6">
                    <Image
                        src="/images/Transformation.png"
                        alt="Transformation through Ayurveda"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Skin Tag Removal</h3>
                  <p className="text-gray-600">
                    "Visible improvement after Ayurvedic treatment. Non-surgical, natural healing."
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg interactive-card scroll-reveal animate-fadeInUp animation-delay-100">
                <CardContent className="p-0">
                  <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                    {/* Replace with a real "before" image for joint pain */}
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Before treatment for joint pain"
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-2xl font-bold">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative h-64 w-full rounded-lg overflow-hidden">
                    {/* Replace with a real "after" image for joint pain */}
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="After treatment for joint pain"
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center text-white text-2xl font-bold">
                      AFTER
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Joint Pain & Mobility</h3>
                  <p className="text-gray-600">
                    "Regained flexibility and significantly reduced pain thanks to personalized therapies."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-reveal">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto scroll-reveal">
              Find answers to common questions about Ayurveda and our clinic.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6 scroll-reveal animate-fadeInUp">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">What is Ayurveda?</h3>
                  <p className="text-gray-700">
                    Ayurveda is an ancient Indian system of medicine that focuses on a holistic approach to health,
                    balancing mind, body, and spirit through natural remedies, diet, and lifestyle.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Is Ayurveda safe?</h3>
                  <p className="text-gray-700">
                    Yes, when practiced by qualified professionals, Ayurveda is generally safe. Treatments are natural
                    and personalized, minimizing side effects.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">What can Ayurveda treat?</h3>
                  <p className="text-gray-700">
                    Ayurveda can help with a wide range of conditions, including chronic diseases, digestive issues,
                    skin disorders, stress, and overall wellness.
                  </p>
                </div>
              </div>
              <div className="space-y-6 scroll-reveal animate-fadeInUp animation-delay-100">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">What happens in a first consultation?</h3>
                  <p className="text-gray-700">
                    Your first consultation involves a detailed discussion of your health history, lifestyle, and a
                    physical examination to determine your unique constitution (Prakriti) and imbalances (Vikriti).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you offer online consultations?</h3>
                  <p className="text-gray-700">
                    Yes, we offer online consultations for patients who cannot visit our clinic in person. Please
                    contact us to schedule.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How long do treatments last?</h3>
                  <p className="text-gray-700">
                    Treatment duration varies depending on the condition and individual. Dr. Kumar will provide a
                    personalized plan during your consultation.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 scroll-reveal">
              <Link href="/contact" passHref>
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full shadow-lg hover-lift">
                  Have More Questions? Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-reveal">
              Watch Our Clinic in Action
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto scroll-reveal">
              Explore videos showcasing our treatments, patient testimonials, and Ayurvedic insights.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Client Image 1 */}
              <Card className="p-4 shadow-lg interactive-card scroll-reveal animate-fadeInUp" style={{ animationDelay: `0s` }}>
                <CardContent className="p-0">
                  <div className="relative w-full h-56 md:h-64 rounded-lg overflow-hidden mb-4 shadow-md">
                    <Image
                      src="/images/Client_image2.jpg"
                      alt="Dr. Santhosh with patient 1"
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Clinic Moments</h3>
                  <p className="text-gray-600 text-sm">Dr. Santhosh with a patient</p>
                </CardContent>
              </Card>
              {/* Client Image 2 */}
              <Card className="p-4 shadow-lg interactive-card scroll-reveal animate-fadeInUp" style={{ animationDelay: `0.1s` }}>
                <CardContent className="p-0">
                  <div className="relative w-full h-56 md:h-64 rounded-lg overflow-hidden mb-4 shadow-md">
                    <Image
                      src="/images/Client_image3.jpg"
                      alt="Dr. Santhosh with patient 2"
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Clinic Moments</h3>
                  <p className="text-gray-600 text-sm">Dr. Santhosh with a patient</p>
                </CardContent>
              </Card>
              {/* Client Image 3 */}
              <Card className="p-4 shadow-lg interactive-card scroll-reveal animate-fadeInUp" style={{ animationDelay: `0.2s` }}>
                <CardContent className="p-0">
                  <div className="relative w-full h-56 md:h-64 rounded-lg overflow-hidden mb-4 shadow-md">
                    <Image
                      src="/images/Clientimage4.jpg"
                      alt="Dr. Santhosh with patient 3"
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Clinic Moments</h3>
                  <p className="text-gray-600 text-sm">Dr. Santhosh with a patient</p>
                </CardContent>
              </Card>
            </div>
            {/* Video Card below images, centered */}
            <div className="flex justify-center mt-8">
              <div className="w-full max-w-3xl">
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="p-4 shadow-lg interactive-card scroll-reveal animate-fadeInUp cursor-pointer" style={{ animationDelay: `0.3s` }}>
                  <CardContent className="p-0">
                        <div className="relative w-full h-56 md:h-64 rounded-lg overflow-hidden mb-4 shadow-md flex items-center justify-center bg-black">
                          <video
                            className="w-full h-full object-cover rounded-lg"
                            src="/videos/agnikarma.mp4"
                            muted
                            playsInline
                            preload="metadata"
                            poster="/images/Client_image2.jpg"
                          />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.4)"/><polygon points="26,20 48,32 26,44" fill="#fff"/></svg>
                          </div>
                    </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Agnikarma Procedure</h3>
                        <p className="text-gray-600 text-sm">A demonstration of the Agnikarma therapy at our clinic.</p>
                  </CardContent>
                </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl w-full flex flex-col items-center bg-black">
                    <video
                      src="/videos/agnikarma.mp4"
                      controls
                      autoPlay
                      className="w-full h-auto max-w-[90vw] max-h-[80vh] mx-auto rounded-lg bg-black object-contain"
                      style={{ background: 'black' }}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-24 bg-primary text-white text-center">
          <div className="max-w-4xl mx-auto px-4 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Healing Journey?</h2>
            <p className="text-lg mb-8">
              Book a consultation with Dr. Santhosh Kumar today and take the first step towards a healthier, balanced
              life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" passHref>
                <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-lg hover-lift">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book an Appointment
                </Button>
              </Link>
              <a href="tel:+91 99161 23691" className="inline-block">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full shadow-lg hover-lift bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

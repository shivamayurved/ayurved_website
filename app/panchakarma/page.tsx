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
          />
          <div className="relative z-10 p-4 max-w-4xl mx-auto scroll-reveal">
            <Badge className="bg-green-600 hover:bg-green-700 text-white mb-4 text-base px-4 py-2">Signature Treatment</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-fadeInUp">
              Panchakarma: Deep Cleansing & Rejuvenation
            </h1>
            <p className="text-lg md:text-xl text-white animate-fadeInUp animation-delay-200">
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
                  Inquire About Panchakarma
                </Button>
              </Link>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl scroll-reveal animate-slideInRight">
              {/* Replace with a real image of an Ayurvedic massage or therapy session */}
              <Image
                src="/placeholder.svg?height=500&width=700"
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
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp">
                <Droplet className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Vamana (Therapeutic Emesis)</h3>
                <p className="text-gray-600">
                  Eliminates excess Kapha dosha, beneficial for respiratory issues, allergies, and skin conditions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-100">
                <Sun className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Virechana (Purgation Therapy)</h3>
                <p className="text-gray-600">
                  Removes excess Pitta dosha, effective for digestive disorders, liver issues, and chronic fevers.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-200">
                <Zap className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Basti (Medicated Enema)</h3>
                <p className="text-gray-600">
                  The most important therapy, balancing Vata dosha, beneficial for neurological disorders, joint pain,
                  and constipation.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-300">
                <FlaskConical className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Nasya (Nasal Administration)</h3>
                <p className="text-gray-600">
                  Cleanses and nourishes the nasal passages, effective for headaches, sinusitis, and mental clarity.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover-lift interactive-card scroll-reveal animate-fadeInUp animation-delay-400">
                <Heart className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Raktamokshana (Bloodletting)</h3>
                <p className="text-gray-600">
                  Purifies the blood, used for specific skin conditions, localized pain, and inflammatory issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits of Panchakarma */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-reveal">
              Profound Benefits of Panchakarma
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto scroll-reveal">
              Undergoing Panchakarma can lead to a wide array of physical, mental, and emotional improvements.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md scroll-reveal animate-slideInLeft">
                <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/deep_detox.webp" alt="Deep Detoxification" width={96} height={96} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Deep Detoxification</h3>
                <p className="text-gray-700">
                  Eliminates deep-seated toxins from tissues and organs, preventing disease.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md scroll-reveal animate-slideInRight">
                <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/restored_balance.jpg" alt="Restored Balance" width={96} height={96} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Restored Balance</h3>
                <p className="text-gray-700">
                  Balances Vata, Pitta, and Kapha doshas, promoting harmony within the body.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md scroll-reveal animate-slideInLeft animation-delay-100">
                <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/enhanced_immunity.jpg" alt="Enhanced Immunity" width={96} height={96} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Immunity</h3>
                <p className="text-gray-700">
                  Strengthens the immune system, making the body more resilient to illness.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md scroll-reveal animate-slideInRight animation-delay-100">
                <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/increased_energy.jpg" alt="Increased Energy & Vitality" width={96} height={96} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Increased Energy & Vitality</h3>
                <p className="text-gray-700">
                  Boosts energy levels, improves mental clarity, and promotes a sense of well-being.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md scroll-reveal animate-slideInLeft animation-delay-200">
                <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/better_digestion.jpg" alt="Better Digestion & Metabolism" width={96} height={96} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Better Digestion & Metabolism</h3>
                <p className="text-gray-700">
                  Optimizes digestive fire (Agni), leading to improved nutrient absorption and waste elimination.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md scroll-reveal animate-slideInRight animation-delay-200">
                <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  <Image src="/images/stress_reduction.jpg" alt="Stress Reduction & Mental Clarity" width={96} height={96} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Stress Reduction & Mental Clarity</h3>
                <p className="text-gray-700">
                  Calms the nervous system, reduces stress, and enhances focus and emotional stability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Packages */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-100 to-blue-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 scroll-reveal">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Panchakarma Packages</h2>
              <p className="text-lg text-gray-600">Choose the package that best suits your health goals and schedule</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Essential Detox",
                  duration: "7 Days",
                  price: "₹15,000",
                  description: "Basic detoxification program for beginners",
                  treatments: [
                    "Abhyanga (Oil Massage)",
                    "Swedana (Steam Therapy)",
                    "Nasya (Nasal Therapy)",
                    "Herbal Medications",
                    "Diet Consultation",
                  ],
                  popular: false,
                  delay: "0s",
                },
                {
                  name: "Complete Rejuvenation",
                  duration: "14 Days",
                  price: "₹28,000",
                  description: "Comprehensive program for deep healing",
                  treatments: [
                    "All Essential Detox treatments",
                    "Kati Basti / Janu Basti",
                    "Shirodhara",
                    "Specialized therapies",
                    "Yoga & Meditation guidance",
                  ],
                  popular: true,
                  delay: "0.1s",
                },
                {
                  name: "Ultimate Wellness",
                  duration: "21 Days",
                  price: "₹40,000",
                  description: "Complete transformation program",
                  treatments: [
                    "All previous treatments",
                    "Pizhichil",
                    "Advanced Panchakarma procedures",
                    "Lifestyle counseling",
                    "Follow-up consultations",
                  ],
                  popular: false,
                  delay: "0.2s",
                },
              ].map((package_, index) => (
                <Card
                  key={index}
                  className={`bg-white shadow-lg interactive-card scroll-reveal ${package_.popular ? "ring-2 ring-primary" : ""}`}
                  style={{ animationDelay: package_.delay }}
                >
                  {package_.popular && (
                    <div className="bg-green-600 hover:bg-green-700 text-white text-center py-2 text-sm font-medium">Most Popular</div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-primary">{package_.name}</CardTitle>
                    <div className="text-3xl font-bold text-gray-900 animate-scaleIn">
                      <AnimatedCounter end={Number.parseInt(package_.price.replace(/[₹,]/g, ""))} prefix="₹" />
                    </div>
                    <p className="text-gray-600">
                      {package_.duration} • {package_.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {package_.treatments.map((treatment, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 animate-slideInLeft"
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>{treatment}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" passHref>
                      <Button
                        className={`w-full hover-lift ${package_.popular ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"}`}
                      >
                        Book This Package
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Care Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 scroll-reveal">
              Before & After Care for Panchakarma
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto scroll-reveal">
              Proper preparation and post-therapy care are crucial for maximizing the benefits of Panchakarma.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg shadow-md scroll-reveal animate-fadeInUp">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pre-Panchakarma (Purva Karma)</h3>
                <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
                  <li>**Dietary Adjustments:** Follow a light, easily digestible diet as prescribed.</li>
                  <li>**Snehana (Oleation):** Internal and external oil application to loosen toxins.</li>
                  <li>**Swedana (Fomentation):** Herbal steam baths to liquefy toxins and open channels.</li>
                  <li>**Lifestyle Modifications:** Rest, avoid stress, and prepare mentally for the cleanse.</li>
                  <li>**Consultation:** Detailed discussion with Dr. Kumar to personalize the preparatory phase.</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-md scroll-reveal animate-fadeInUp animation-delay-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Post-Panchakarma (Paschat Karma)</h3>
                <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
                  <li>**Samana (Palliative Care):** Gentle therapies and herbal medicines to consolidate benefits.</li>
                  <li>**Rasayana (Rejuvenation):** Specific tonics and practices to rebuild tissues and vitality.</li>
                  <li>
                    **Gradual Diet Reintroduction:** Slowly return to a normal diet, avoiding heavy or incompatible
                    foods.
                  </li>
                  <li>
                    **Lifestyle Integration:** Maintain a balanced routine, including yoga, meditation, and adequate
                    rest.
                  </li>
                  <li>
                    **Follow-up Consultations:** Regular check-ups to monitor progress and adjust recommendations.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Section (from previous request) */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100 scroll-reveal">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-green-600 hover:bg-green-700 text-white mb-4 text-base px-4 py-2">Transformations</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Panchakarma: Before & After</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Witness the profound changes and renewed vitality experienced by our patients after Panchakarma therapy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  condition: "Chronic Fatigue & Toxins",
                  duration: "14-Day Detox",
                  result: "Increased Energy & Mental Clarity",
                  beforeImage: "/placeholder.svg?height=200&width=200",
                  afterImage: "/placeholder.svg?height=200&width=200",
                },
                {
                  condition: "Digestive Issues & Bloating",
                  duration: "7-Day Essential Detox",
                  result: "Improved Digestion & Reduced Bloating",
                  beforeImage: "/placeholder.svg?height=200&width=200",
                  afterImage: "/placeholder.svg?height=200&width=200",
                },
                {
                  condition: "Stress & Insomnia",
                  duration: "21-Day Wellness Program",
                  result: "Deep Relaxation & Restful Sleep",
                  beforeImage: "/placeholder.svg?height=200&width=200",
                  afterImage: "/placeholder.svg?height=200&width=200",
                },
              ].map((case_, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg interactive-card scroll-reveal"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-center text-primary">{case_.condition}</h3>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-sm font-medium text-gray-600 mb-2">Before</p>
                        {/* Replace with a real "before" image for the specific condition */}
                        <Image
                          src={case_.beforeImage || "/placeholder.svg"}
                          alt={`Before treatment for ${case_.condition}`}
                          width={200}
                          height={200}
                          className="rounded-lg shadow-md hover-scale"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-gray-600 mb-2">After</p>
                        {/* Replace with a real "after" image for the specific condition */}
                        <Image
                          src={case_.afterImage || "/placeholder.svg"}
                          alt={`After treatment for ${case_.condition}`}
                          width={200}
                          height={200}
                          className="rounded-lg shadow-md hover-scale"
                        />
                      </div>
                    </div>

                    <div className="text-center space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <Clock className="h-4 w-4 text-accent" />
                        <span className="text-sm text-gray-600">Duration: {case_.duration}</span>
                      </div>
                      <p className="text-sm font-medium text-primary">{case_.result}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/testimonials" passHref>
                <Button className="bg-green-600 hover:bg-green-700 text-white hover-lift">View More Transformations</Button>
              </Link>
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

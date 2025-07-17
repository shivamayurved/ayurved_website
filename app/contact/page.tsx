"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Badge } from "@/components/ui/badge"
import Image from "next/image" // Import Image component
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  useScrollAnimation()
  const form = useRef(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError("")
    emailjs.sendForm(
      'service_3yeqmw8',
      'template_wo69w2e',
      form.current,
      'dkwW-o2DUNf5CC1dQ'
    )
    .then(() => {
      setSuccess(true)
      setLoading(false)
      form.current.reset()
    }, (err) => {
      setError("Failed to send message. Please try again later.")
      setLoading(false)
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative py-16 px-4 h-[400px] md:h-[500px] bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center text-center overflow-hidden">
        {/* Replace with a real image of a clinic interior or welcoming scene */}
        <Image
          src="/images/ayurved_home.jpg"
          alt="Ayurvedic herbs, spices, and natural ingredients on a table with a lush green background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div className="relative z-10 p-4 max-w-7xl mx-auto text-center">
          <Badge className="bg-primary text-white mb-4 text-base px-4 py-2">Get in Touch</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-slideInLeft text-gray-900">Contact Our Clinic</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fadeInUp text-gray-700">
            We are here to answer your questions and help you start your healing journey.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 scroll-reveal animate-slideInLeft">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Reach Out to Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you have questions about our treatments, want to book an appointment, or simply need more
              information, our team is ready to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-700">+91 99161 23691</p>
                  <p className="text-sm text-gray-500">Call us during clinic hours</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                  <a href="mailto:shivamayurvedalaya@gmail.com" className="text-primary hover:text-primary/90 underline">
                    shivamayurvedalaya@gmail.com
                  </a>
                  <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-700">
                    Smart Point, Bus Stop, near, Vasavi Nagar Rd, Vidya Nagar,<br />
                    Raichur, Karnataka 584101
                  </p>
                  <p className="text-sm text-gray-500">Visit us during clinic hours</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Clinic Hours</h3>
                  <p className="text-gray-700">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <h3 className="text-xl font-semibold text-gray-900">Connect with us on Social Media</h3>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="text-gray-700 hover:text-primary transition-colors">
                  <Facebook className="h-7 w-7" />
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-700 hover:text-primary transition-colors">
                  <Instagram className="h-7 w-7" />
                </a>
                <a href="#" aria-label="YouTube" className="text-gray-700 hover:text-primary transition-colors">
                  <Youtube className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <Card className="shadow-xl scroll-reveal animate-slideInRight">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900 text-center">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <Label htmlFor="user_name" className="text-lg">
                    Your Name
                  </Label>
                  <Input id="user_name" name="user_name" placeholder="Enter your name" className="mt-2 p-3 text-base" required />
                </div>
                <div>
                  <Label htmlFor="user_email" className="text-lg">
                    Your Email
                  </Label>
                  <Input id="user_email" name="user_email" type="email" placeholder="Enter your email" className="mt-2 p-3 text-base" required />
                </div>
                <div>
                  <Label htmlFor="user_phone" className="text-lg">
                    Phone Number (Optional)
                  </Label>
                  <Input id="user_phone" name="user_phone" type="tel" placeholder="Enter your phone number" className="mt-2 p-3 text-base" />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-lg">
                    Subject
                  </Label>
                  <Input id="subject" name="subject" placeholder="Subject of your message" className="mt-2 p-3 text-base" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-lg">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Type your message here..."
                    className="mt-2 p-3 text-base"
                    required
                  />
                </div>
                <input type="hidden" name="source" value="Contact Form" />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-3" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                {success && <p className="text-green-600 text-center mt-2">Message sent successfully!</p>}
                {error && <p className="text-red-600 text-center mt-2">{error}</p>}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="py-16 px-4 bg-gray-100 scroll-reveal">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Find Us on the Map</h2>
          <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7840014.069623907!2d70.39962282159618!3d16.367243498045603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc9d777b732f41d%3A0x61d807c4036c1cf1!2sS%20DREAMS%20AYURVEDA%20PANCHAKARMA%20CENTER!5e0!3m2!1sen!2sin!4v1752737986736!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Map of Shivam ayurvedalaya"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white scroll-reveal">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to Start Your Healing Journey?</h2>
          <p className="text-xl text-primary-foreground">
            Book your consultation today and experience the power of authentic Ayurvedic healing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 99161 23691
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Book Online Appointment
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

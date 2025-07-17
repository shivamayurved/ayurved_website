import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Leaf, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center">
                <Image src="/images/final_logo .png" alt="Shivam ayurvedalaya logo" width={40} height={40} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Shivam ayurvedalaya</h3>
                <p className="text-gray-400 text-sm">ayurveda and panchakarma center</p>
              </div>
            </div>
            <p className="text-gray-300">
              Authentic Ayurvedic healing with 10+ years of experience. Serving Raichur with personalized natural treatments.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: "/about", label: "About Dr. Kumar" },
                { href: "/services", label: "Our Services" },
                { href: "/panchakarma", label: "Panchakarma" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Specialties</h4>
            <div className="space-y-2 text-gray-300">
              <p>• Piles Treatment</p>
              <p>• Skin Disorders</p>
              <p>• Infertility Care</p>
              <p>• Joint & Spine Pain</p>
              <p>• Panchakarma Therapy</p>
              <p>• Detoxification</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-gray-300">+91 99161 23691</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-gray-300">shivamayurvedalaya@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <span className="text-gray-300">
                  Smart Point, Bus Stop, near, Vasavi Nagar Rd, Vidya Nagar,<br />
                  Raichur, Karnataka 584101
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-gray-300">Mon-Sat: 9AM-7PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4">Stay Updated with Ayurvedic Tips</h4>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Shivam ayurvedalaya. All rights reserved.</p>
          <p className="mt-2 text-sm">Licensed Ayurvedic Practitioner | Government of Karnataka Certified</p>
        </div>
      </div>
    </footer>
  )
}

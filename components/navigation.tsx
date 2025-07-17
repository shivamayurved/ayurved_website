"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Leaf } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false);

  useEffect(() => { setIsClient(true); }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/panchakarma", label: "Panchakarma" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center justify-center">
              <Image src="/images/final_logo .png" alt="Shivam ayurvedalaya logo" width={40} height={40} />
            </div>
            <div className="leading-tight">
              <h1 className="text-lg font-bold text-primary whitespace-nowrap">Shivam ayurvedalaya</h1>
              <p className="text-[11px] text-gray-600 whitespace-nowrap -mt-1">ayurveda and panchakarma center</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-grow justify-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex flex-shrink-0">
            <Link href="/contact" passHref>
              <Button className="bg-primary hover:bg-primary/90 text-white whitespace-nowrap">
                <Phone className="mr-2 h-4 w-4" />
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {isClient && (
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-primary">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="/contact" passHref>
                  <Button className="bg-primary hover:bg-primary/90 text-white w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

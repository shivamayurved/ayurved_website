"use client"
import { Phone } from "lucide-react"

export function CallWhatsAppButtons() {
  return (
    <div className="fixed right-4 bottom-20 z-50 flex flex-col space-y-3">
      <a
        href="tel:+919916123691"
        className="bg-accent hover:bg-accent/90 text-white rounded-full w-16 h-16 shadow-lg pulse-ring flex items-center justify-center border-none outline-none focus:outline-none hover-lift"
        style={{
          border: "none",
          padding: "0",
          background: "hsl(var(--accent))",
        }}
        aria-label="Call Now"
      >
        <Phone
          className="h-6 w-6"
          style={{
            color: "white",
            background: "none",
            backgroundColor: "transparent",
          }}
        />
      </a>
      <a
        href="https://wa.me/919916123691"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg pulse-ring flex items-center justify-center border-none outline-none focus:outline-none hover-lift"
        style={{
          border: "none",
          padding: "0",
          background: "#25D366", // WhatsApp green
        }}
        aria-label="WhatsApp Chat"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-message-circle h-6 w-6"
          style={{
            color: "white",
            background: "none",
            backgroundColor: "transparent",
          }}
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
      </a>
    </div>
  )
}

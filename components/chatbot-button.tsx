"use client"

import { useState } from "react"
import { MessageSquare, X } from "lucide-react"
import { Chatbot } from "./chatbot"

export function ChatbotButton() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsChatbotOpen(!isChatbotOpen)}
        className="fixed bottom-4 right-4 z-50 bg-accent hover:bg-accent/90 text-white rounded-full w-16 h-16 shadow-lg pulse-ring flex items-center justify-center border-none outline-none focus:outline-none hover-lift"
        aria-label={isChatbotOpen ? "Close Chatbot" : "Open Chatbot"}
        style={{
          border: "none",
          padding: "0",
          background: "hsl(var(--accent))",
        }}
      >
        {isChatbotOpen ? <X className="h-6 w-6 text-white" /> : <MessageSquare className="h-6 w-6 text-white" />}
      </button>
      {isChatbotOpen && <Chatbot onClose={() => setIsChatbotOpen(false)} />}
    </>
  )
}

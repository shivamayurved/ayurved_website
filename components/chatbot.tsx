"use client"

import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Send, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import emailjs from "@emailjs/browser"

interface ChatbotProps {
  onClose: () => void
}

export function Chatbot({ onClose }: ChatbotProps) {
  // Chatbot state for multi-step form
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    subject: "",
    message: "",
    source: "Chatbot"
  })
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    { id: 0, role: "assistant", content: "Hello! I'm your Ayurvedic assistant. To help you better, could you please tell me your name?" }
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [finished, setFinished] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleUserInput = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    let newMessages = [...messages, { id: messages.length, role: "user", content: input }]
    let nextStep = step
    let newFormData = { ...formData }
    if (step === 0) {
      newFormData.user_name = input
      nextStep = 1
      newMessages.push({ id: newMessages.length, role: "assistant", content: "Thanks! What's your email address?" })
    } else if (step === 1) {
      newFormData.user_email = input
      nextStep = 2
      newMessages.push({ id: newMessages.length, role: "assistant", content: "Got it. Your phone number? (optional, or type 'skip')" })
    } else if (step === 2) {
      if (input.toLowerCase() !== "skip") newFormData.user_phone = input
      nextStep = 3
      newMessages.push({ id: newMessages.length, role: "assistant", content: "Subject of your message? (optional, or type 'skip')" })
    } else if (step === 3) {
      if (input.toLowerCase() !== "skip") newFormData.subject = input
      nextStep = 4
      newMessages.push({ id: newMessages.length, role: "assistant", content: "Please type your message." })
    } else if (step === 4) {
      newFormData.message = input
      setIsLoading(true)
      // Send email via EmailJS
      emailjs.send(
        'service_3yeqmw8',
        'template_wo69w2e',
        { ...newFormData },
        'dkwW-o2DUNf5CC1dQ'
      ).then(() => {
        setIsLoading(false)
        setFinished(true)
        newMessages.push({ id: newMessages.length, role: "assistant", content: "Thank you! Your message has been sent. We'll get back to you soon." })
      }, () => {
        setIsLoading(false)
        setFinished(true)
        newMessages.push({ id: newMessages.length, role: "assistant", content: "Sorry, there was an error sending your message. Please try again later or use the contact form." })
      })
      setMessages(newMessages)
      setInput("")
      setStep(nextStep)
      setFormData(newFormData)
      return
    }
    setMessages(newMessages)
    setInput("")
    setStep(nextStep)
    setFormData(newFormData)
  }

  return (
    <Card className="fixed bottom-24 right-4 z-50 w-80 h-[400px] flex flex-col shadow-xl rounded-lg animate-scaleIn">
      <CardHeader className="flex flex-row items-center justify-between p-4 bg-primary text-white rounded-t-lg">
        <CardTitle className="text-lg font-semibold flex items-center">
          <MessageCircle className="mr-2 h-5 w-5" />
          Ayurveda Chatbot
        </CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-primary/80">
          <X className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent className="flex-1 p-4 overflow-y-auto text-sm custom-scrollbar">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`mb-3 p-2 rounded-lg max-w-[80%] ${
              m.role === "user"
                ? "bg-blue-100 text-blue-800 ml-auto rounded-br-none"
                : "bg-gray-100 text-gray-800 mr-auto rounded-bl-none"
            }`}
          >
            {m.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </CardContent>
      {!finished && (
        <form onSubmit={handleUserInput} className="p-4 border-t flex items-center gap-2">
          <Input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={isLoading ? "Please wait..." : "Type your answer..."}
            className="flex-1 p-2 rounded-md border"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      )}
    </Card>
  )
}

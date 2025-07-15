"use client"

import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Send, X } from "lucide-react"
import { useEffect, useRef } from "react"

interface ChatbotProps {
  onClose: () => void
}

export function Chatbot({ onClose }: ChatbotProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop, reload } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "initial",
        role: "assistant",
        content: "Hello! I'm your Ayurvedic assistant. To help you better, could you please tell me your name?",
      },
    ],
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

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
      <form onSubmit={handleSubmit} className="p-4 border-t flex items-center gap-2">
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-1 p-2 rounded-md border"
          disabled={isLoading}
        />
        <Button type="submit" size="icon" disabled={isLoading}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </Card>
  )
}

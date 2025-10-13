"use client"

import { useEffect, useRef, useState } from "react"
import { X, Sparkles, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"
import ChatMessage from "@/components/chat/ChatMessage"
import ChatInput from "@/components/chat/ChatInput"
import TypingIndicator from "@/components/chat/TypingIndicator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"

interface Message {
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface ChatWindowProps {
  isOpen: boolean
  onClose: () => void
}

export default function ChatWindow({ isOpen, onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isLoading])

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content:
            "Hi! I'm Paulo's AI assistant. Feel free to ask me anything about Paulo's experience, skills, or background. How can I help you today?",
          timestamp: new Date(),
        },
      ])
    }
  }, [isOpen, messages.length])

  const handleSendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return

    const userMessage: Message = {
      role: "user",
      content,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)
    setError(null)

    try {
      // Prepare history for API (exclude timestamps)
      const history = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }))

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: content,
          history,
        }),
      })

      if (!response.ok) {
        throw new Error(`Failed to send message: ${response.statusText}`)
      }

      const data = await response.json()

      const assistantMessage: Message = {
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (err) {
      console.error("Error sending message:", err)
      setError("Sorry, I encountered an error. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Hi! I'm Paulo's AI assistant. Feel free to ask me anything about Paulo's experience, skills, or background. How can I help you today?",
        timestamp: new Date(),
      },
    ])
    setError(null)
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50",
          "w-[420px] h-[650px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-3rem)]",
          "bg-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/50",
          "flex flex-col overflow-hidden",
          "transition-all duration-500 ease-out",
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-8 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/50 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-card animate-pulse" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-foreground">
                Paulo&apos;s AI Assistant
              </h3>
              <p className="text-xs text-muted-foreground">
                Ask me anything about Paulo
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {/* Reset button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleReset}
              className="w-8 h-8 rounded-lg hover:bg-muted"
              aria-label="Reset chat"
            >
              <RefreshCw className="w-4 h-4 text-muted-foreground" />
            </Button>

            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="w-8 h-8 rounded-lg hover:bg-muted"
              aria-label="Close chat"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </Button>
          </div>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4 bg-gradient-to-b from-background/50 to-background/30">
          <div ref={scrollAreaRef} className="space-y-1">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                role={message.role}
                content={message.content}
                timestamp={message.timestamp}
              />
            ))}

            {/* Typing Indicator */}
            {isLoading && <TypingIndicator />}

            {/* Error Message */}
            {error && (
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                {error}
              </div>
            )}

            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input Area */}
        <ChatInput
          onSendMessage={handleSendMessage}
          disabled={isLoading}
          placeholder="Ask me about Paulo's experience..."
        />
      </div>
    </>
  )
}

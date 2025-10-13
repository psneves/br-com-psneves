"use client"

import { useState, KeyboardEvent, useRef, useEffect } from "react"
import { Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ChatInputProps {
  onSendMessage: (message: string) => void
  disabled?: boolean
  placeholder?: string
}

export default function ChatInput({
  onSendMessage,
  disabled = false,
  placeholder = "Type your message...",
}: ChatInputProps) {
  const [message, setMessage] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [message])

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim())
      setMessage("")
      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"
      }
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // Send on Enter, but allow Shift+Enter for new lines
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="border-t border-border/50 bg-card/50 backdrop-blur-sm p-4">
      <div className="flex gap-2 items-end">
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            rows={1}
            className={cn(
              "w-full resize-none rounded-xl",
              "px-4 py-3 pr-12",
              "bg-background border border-border/50",
              "text-sm text-foreground placeholder:text-muted-foreground",
              "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "transition-all duration-200",
              "max-h-32 overflow-y-auto"
            )}
            style={{
              minHeight: "48px",
            }}
          />

          {/* Character hint */}
          {message.length > 0 && (
            <div className="absolute bottom-2 left-4 text-xs text-muted-foreground">
              {message.length > 500 && (
                <span className="text-orange-500">
                  {message.length}/1000
                </span>
              )}
            </div>
          )}
        </div>

        <Button
          onClick={handleSend}
          disabled={disabled || !message.trim()}
          size="icon"
          className={cn(
            "h-12 w-12 rounded-xl flex-shrink-0",
            "bg-primary hover:bg-primary/90",
            "transition-all duration-200",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            !disabled && message.trim() && "hover:scale-105 active:scale-95"
          )}
          aria-label="Send message"
        >
          <Send className="w-5 h-5" />
        </Button>
      </div>

      {/* Help text */}
      <div className="mt-2 text-xs text-muted-foreground text-center">
        Press <kbd className="px-1.5 py-0.5 rounded bg-muted text-muted-foreground">Enter</kbd> to send,{" "}
        <kbd className="px-1.5 py-0.5 rounded bg-muted text-muted-foreground">Shift + Enter</kbd> for new line
      </div>
    </div>
  )
}

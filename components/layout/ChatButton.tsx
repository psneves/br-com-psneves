"use client"

import { MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChatButtonProps {
  isOpen: boolean
  onClick: () => void
}

export default function ChatButton({ isOpen, onClick }: ChatButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "flex items-center justify-center",
        "w-14 h-14 rounded-full",
        "bg-primary text-primary-foreground",
        "shadow-lg hover:shadow-xl",
        "transition-all duration-300 ease-in-out",
        "hover:scale-110 active:scale-95",
        "focus:outline-none focus:ring-4 focus:ring-primary/30",
        "group animate-bounce-in"
      )}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      <div className="relative">
        {/* Icon with rotation animation */}
        <MessageCircle
          className={cn(
            "w-6 h-6 transition-all duration-300",
            isOpen ? "rotate-90 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"
          )}
        />
        <X
          className={cn(
            "w-6 h-6 absolute inset-0 transition-all duration-300",
            isOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-0"
          )}
        />

        {/* Pulse effect when closed */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-primary animate-ping opacity-20" />
        )}
      </div>

      {/* Tooltip */}
      <span
        className={cn(
          "absolute right-full mr-3 px-3 py-2 rounded-lg",
          "bg-card text-card-foreground text-sm font-medium whitespace-nowrap",
          "shadow-lg border border-border",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity duration-200",
          "pointer-events-none"
        )}
      >
        {isOpen ? "Close chat" : "Ask me anything!"}
      </span>
    </button>
  )
}

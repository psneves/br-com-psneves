"use client"

import { Bot } from "lucide-react"
import { cn } from "@/lib/utils"

export default function TypingIndicator() {
  return (
    <div className="flex gap-3 mb-4 animate-fade-in">
      {/* Avatar */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 text-primary flex items-center justify-center">
        <Bot className="w-4 h-4" />
      </div>

      {/* Typing animation */}
      <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 border border-border/50">
        <div className="flex gap-1.5">
          <div
            className={cn(
              "w-2 h-2 rounded-full bg-muted-foreground/50",
              "animate-bounce"
            )}
            style={{ animationDelay: "0ms", animationDuration: "1s" }}
          />
          <div
            className={cn(
              "w-2 h-2 rounded-full bg-muted-foreground/50",
              "animate-bounce"
            )}
            style={{ animationDelay: "150ms", animationDuration: "1s" }}
          />
          <div
            className={cn(
              "w-2 h-2 rounded-full bg-muted-foreground/50",
              "animate-bounce"
            )}
            style={{ animationDelay: "300ms", animationDuration: "1s" }}
          />
        </div>
      </div>
    </div>
  )
}

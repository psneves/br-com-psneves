"use client"

import { useEffect, useRef, useState } from "react"
import { X, Loader2, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChatWindowProps {
  isOpen: boolean
  onClose: () => void
}

export default function ChatWindow({ isOpen, onClose }: ChatWindowProps) {
  const [isLoading, setIsLoading] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
      // Set a timeout to hide loading after 2 seconds regardless of iframe load event
      const timeout = setTimeout(() => {
        setIsLoading(false)
      }, 2000)

      return () => clearTimeout(timeout)
    }
  }, [isOpen])

  const handleIframeLoad = () => {
    setIsLoading(false)
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
              <h3 className="font-semibold text-sm text-foreground">Paulo&apos;s AI Assistant</h3>
              <p className="text-xs text-muted-foreground">Ask me anything about Paulo</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className={cn(
              "w-8 h-8 rounded-lg",
              "flex items-center justify-center",
              "hover:bg-muted transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-ring"
            )}
            aria-label="Close chat"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-card/90 backdrop-blur-sm">
            <Loader2 className="w-8 h-8 text-primary animate-spin mb-3" />
            <p className="text-sm text-muted-foreground">Loading chat...</p>
          </div>
        )}

        {/* Chat Content (iframe) */}
        <div className="flex-1 relative bg-background/50" style={{ minHeight: 0 }}>
          <iframe
            ref={iframeRef}
            src="https://psneves-chat-cv.hf.space/"
            className="w-full h-full border-0"
            title="Chat with Paulo's AI Assistant"
            onLoad={handleIframeLoad}
            allow="clipboard-write"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            style={{
              display: 'block',
              overflow: 'hidden'
            }}
          />
        </div>
      </div>
    </>
  )
}

"use client"

import { useState } from "react"
import ChatButton from "./ChatButton"
import ChatWindow from "./ChatWindow"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen((prev) => !prev)
  }

  const closeChat = () => {
    setIsOpen(false)
  }

  return (
    <>
      <ChatButton isOpen={isOpen} onClick={toggleChat} />
      <ChatWindow isOpen={isOpen} onClose={closeChat} />
    </>
  )
}

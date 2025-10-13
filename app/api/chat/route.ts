import { NextRequest, NextResponse } from "next/server";
import { ChatService } from "@/lib/chat-service";
import { ChatRequest } from "@/lib/chat-types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/chat
 * Handles chat messages and returns AI responses
 */
export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json();
    const { message, history } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required and must be a string" },
        { status: 400 }
      );
    }

    if (!Array.isArray(history)) {
      return NextResponse.json(
        { error: "History must be an array" },
        { status: 400 }
      );
    }

    // Get chat service instance
    const chatService = await ChatService.getInstance();

    // Process the chat message
    const response = await chatService.chat(message, history);

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/chat
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json({ status: "ok", message: "Chat API is running" });
}

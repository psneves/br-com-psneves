# Chat API Documentation

This document describes the chat API that has been migrated from the Python/Gradio implementation to TypeScript/Next.js.

## Overview

The chat API provides an AI-powered conversational interface that represents Paulo Neves, answering questions about his career, background, skills, and experience.

## Architecture

### Components

1. **API Route** (`app/api/chat/route.ts`)
   - Handles HTTP requests to `/api/chat`
   - Validates input and returns responses
   - Supports both POST (chat) and GET (health check) methods

2. **Chat Service** (`lib/chat-service.ts`)
   - Singleton service that manages OpenAI interactions
   - Loads content from PDF (LinkedIn profile) and text files (summary)
   - Handles tool calls for recording user details and unknown questions
   - Uses GPT-4o-mini model

3. **Utilities** (`lib/chat-utils.ts`)
   - Push notification integration via Pushover
   - Tool definitions for OpenAI function calling
   - Helper functions for recording user details and questions

4. **Types** (`lib/chat-types.ts`)
   - TypeScript interfaces for chat messages, tools, and API requests/responses

### Content Files

- `/public/me/linkedin.pdf` - LinkedIn profile (parsed to text)
- `/public/me/summary.txt` - Professional summary and context

## API Endpoints

### POST /api/chat

Processes a chat message and returns an AI-generated response.

**Request Body:**
```json
{
  "message": "string",
  "history": [
    {
      "role": "user" | "assistant" | "system" | "tool",
      "content": "string"
    }
  ]
}
```

**Response:**
```json
{
  "response": "string"
}
```

**Error Response:**
```json
{
  "error": "string"
}
```

### GET /api/chat

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "message": "Chat API is running"
}
```

## Environment Variables

The following environment variables must be configured in `.env`:

```bash
# OpenAI API Key
OPENAI_API_KEY=sk-...

# Pushover credentials for notifications
PUSHOVER_USER=your_user_key
PUSHOVER_TOKEN=your_app_token
```

## Tool Functions

The AI assistant has access to two tools:

### 1. record_user_details
Records when a user expresses interest in being contacted.

**Parameters:**
- `email` (required): User's email address
- `name` (optional): User's name
- `notes` (optional): Additional context about the conversation

### 2. record_unknown_question
Records questions that couldn't be answered.

**Parameters:**
- `question` (required): The question that couldn't be answered

Both tools send push notifications via Pushover when invoked.

## Usage Example

```typescript
// Example client-side code
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    message: 'What are your main skills?',
    history: []
  })
});

const data = await response.json();
console.log(data.response);
```

## Migration Notes

This implementation is a TypeScript conversion of the original Python/Gradio application that was deployed on Hugging Face. Key differences:

1. **Framework**: Migrated from Gradio to Next.js API routes
2. **Language**: Python → TypeScript
3. **Deployment**: Hugging Face → Vercel (or any Next.js-compatible platform)
4. **PDF Parsing**: PyPDF → pdf-parse
5. **Singleton Pattern**: Used to cache content loading and reuse the OpenAI client

## Deployment on Vercel

1. Ensure all environment variables are set in Vercel dashboard
2. The API will automatically be available at `https://your-domain.vercel.app/api/chat`
3. No special configuration needed - Next.js API routes are automatically deployed

## Testing

Test the health endpoint:
```bash
curl https://your-domain.vercel.app/api/chat
```

Test a chat message:
```bash
curl -X POST https://your-domain.vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, tell me about yourself", "history": []}'
```

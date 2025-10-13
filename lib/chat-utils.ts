// Utility functions for chat functionality
import {
  ToolDefinition,
  RecordUserDetailsParams,
  RecordUnknownQuestionParams,
} from "./chat-types";

/**
 * Sends a push notification via Pushover
 */
export async function push(text: string): Promise<void> {
  try {
    await fetch("https://api.pushover.net/1/messages.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        token: process.env.PUSHOVER_TOKEN || "",
        user: process.env.PUSHOVER_USER || "",
        message: text,
      }),
    });
  } catch (error) {
    console.error("Failed to send push notification:", error);
  }
}

/**
 * Records user details when they express interest in being contacted
 */
export async function recordUserDetails(
  params: RecordUserDetailsParams
): Promise<{ recorded: string }> {
  const { email, name = "Name not provided", notes = "not provided" } = params;
  await push(`Recording ${name} with email ${email} and notes ${notes}`);
  return { recorded: "ok" };
}

/**
 * Records questions that couldn't be answered
 */
export async function recordUnknownQuestion(
  params: RecordUnknownQuestionParams
): Promise<{ recorded: string }> {
  const { question } = params;
  await push(`Recording unknown question: ${question}`);
  return { recorded: "ok" };
}

/**
 * Tool definitions for OpenAI function calling
 */
export const tools: ToolDefinition[] = [
  {
    type: "function",
    function: {
      name: "record_user_details",
      description:
        "Use this tool to record that a user is interested in being in touch and provided an email address",
      parameters: {
        type: "object",
        properties: {
          email: {
            type: "string",
            description: "The email address of this user",
          },
          name: {
            type: "string",
            description: "The user's name, if they provided it",
          },
          notes: {
            type: "string",
            description:
              "Any additional information about the conversation that's worth recording to give context",
          },
        },
        required: ["email"],
        additionalProperties: false,
      },
    },
  },
  {
    type: "function",
    function: {
      name: "record_unknown_question",
      description:
        "Always use this tool to record any question that couldn't be answered as you didn't know the answer",
      parameters: {
        type: "object",
        properties: {
          question: {
            type: "string",
            description: "The question that couldn't be answered",
          },
        },
        required: ["question"],
        additionalProperties: false,
      },
    },
  },
];

/**
 * Map of available tool functions
 */
export const toolFunctions: Record<string, Function> = {
  record_user_details: recordUserDetails,
  record_unknown_question: recordUnknownQuestion,
};

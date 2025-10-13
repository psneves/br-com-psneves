// Chat service for interacting with OpenAI
import OpenAI from "openai";
import { ChatMessage, ToolCall } from "./chat-types";
import { tools, toolFunctions } from "./chat-utils";
import * as fs from "fs";
import * as path from "path";

export class ChatService {
  private readonly openai: OpenAI;
  private readonly name: string;
  private linkedin: string;
  private summary: string;
  private static instance: ChatService | null = null;
  private static initPromise: Promise<ChatService> | null = null;

  private constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.name = "Paulo Neves";
    this.linkedin = "";
    this.summary = "";
  }

  /**
   * Gets or creates a singleton instance of ChatService
   */
  static async getInstance(): Promise<ChatService> {
    if (ChatService.instance) {
      return ChatService.instance;
    }

    if (ChatService.initPromise) {
      return ChatService.initPromise;
    }

    ChatService.initPromise = (async () => {
      const service = new ChatService();
      await service.loadContent();
      ChatService.instance = service;
      ChatService.initPromise = null;
      return service;
    })();

    return ChatService.initPromise;
  }

  /**
   * Loads LinkedIn profile and summary from files
   */
  private async loadContent(): Promise<void> {
    try {
      // Load summary
      const summaryPath = path.join(process.cwd(), "public", "me", "summary.txt");
      if (fs.existsSync(summaryPath)) {
        this.summary = fs.readFileSync(summaryPath, "utf-8");
      }

      // Load LinkedIn profile from text file (converted from PDF)
      const linkedinTxtPath = path.join(process.cwd(), "public", "me", "linkedin.txt");
      if (fs.existsSync(linkedinTxtPath)) {
        this.linkedin = fs.readFileSync(linkedinTxtPath, "utf-8");
      } else {
        // Fallback: Try to load from PDF if txt doesn't exist
        const linkedinPdfPath = path.join(process.cwd(), "public", "me", "linkedin.pdf");
        if (fs.existsSync(linkedinPdfPath)) {
          try {
            // Dynamic import of pdf-parse
            const pdfParseModule = await import("pdf-parse");
            // @ts-ignore - pdf-parse has different export patterns
            const pdfParse = pdfParseModule.default || pdfParseModule;
            const dataBuffer = fs.readFileSync(linkedinPdfPath);
            const data = await pdfParse(dataBuffer);
            this.linkedin = data.text;
          } catch (error) {
            console.error("Error parsing LinkedIn PDF:", error);
            // PDF parsing failed, but we can still work with just the summary
          }
        }
      }
    } catch (error) {
      console.error("Error loading content:", error);
    }
  }

  /**
   * Handles tool calls from OpenAI
   */
  private async handleToolCall(
    toolCalls: ToolCall[]
  ): Promise<ChatMessage[]> {
    const results: ChatMessage[] = [];

    for (const toolCall of toolCalls) {
      const toolName = toolCall.function.name;
      const args = JSON.parse(toolCall.function.arguments);

      console.log(`Tool called: ${toolName}`);

      const toolFunction = toolFunctions[toolName];
      const result = toolFunction ? await toolFunction(args) : {};

      results.push({
        role: "tool",
        content: JSON.stringify(result),
        tool_call_id: toolCall.id,
      });
    }

    return results;
  }

  /**
   * Generates the system prompt
   */
  private systemPrompt(): string {
    let prompt = `You are acting as ${this.name}. You are answering questions on ${this.name}'s website, particularly questions related to ${this.name}'s career, background, skills and experience. Your responsibility is to represent ${this.name} for interactions on the website as faithfully as possible. You are given a summary of ${this.name}'s background and LinkedIn profile which you can use to answer questions. Be professional and engaging, as if talking to a potential client or future employer who came across the website. If you don't know the answer to any question, use your record_unknown_question tool to record the question that you couldn't answer, even if it's about something trivial or unrelated to career. If the user is engaging in discussion, try to steer them towards getting in touch via email; ask for their email and record it using your record_user_details tool.`;

    if (this.summary) {
      prompt += `\n\n## Summary:\n${this.summary}\n\n`;
    }

    if (this.linkedin) {
      prompt += `## LinkedIn Profile:\n${this.linkedin}\n\n`;
    }

    prompt += `With this context, please chat with the user, always staying in character as ${this.name}.`;

    return prompt;
  }

  /**
   * Main chat function
   */
  async chat(message: string, history: ChatMessage[]): Promise<string> {
    const messages: ChatMessage[] = [
      { role: "system", content: this.systemPrompt() },
      ...history,
      { role: "user", content: message },
    ];

    while (true) {
      const response = await this.openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: messages as any,
        tools: tools as any,
      });

      const choice = response.choices[0];

      if (choice.finish_reason === "tool_calls" && choice.message.tool_calls) {
        // Handle tool calls
        const toolResults = await this.handleToolCall(
          choice.message.tool_calls as unknown as ToolCall[]
        );

        messages.push({
          role: "assistant",
          content: choice.message.content || "",
          tool_calls: choice.message.tool_calls as unknown as ToolCall[],
        });
        messages.push(...toolResults);
      } else {
        return choice.message.content || "";
      }
    }
  }
}

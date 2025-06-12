import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { generateText } from "ai";

const clarifai = createOpenAICompatible({
  name: "clarifai",
  baseURL: "https://api.clarifai.com/v2/ext/openai/v1",
  apiKey: process.env.CLARIFAI_PAT!,
});

const model = clarifai.chatModel(
  "https://clarifai.com/deepseek-ai/deepseek-chat/models/DeepSeek-R1-0528-Qwen3-8B",
);

export const generateClarifaiText = async (prompt: string) => {
  const { text, usage, finishReason } = await generateText({
    model,
    prompt,
  });

  return { text, usage, finishReason };
};

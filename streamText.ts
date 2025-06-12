import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { streamText } from "ai";

const clarifai = createOpenAICompatible({
  name: "clarifai",
  baseURL: "https://api.clarifai.com/v2/ext/openai/v1",
  apiKey: process.env.CLARIFAI_PAT,
});

const model = clarifai.chatModel(
  "https://clarifai.com/deepseek-ai/deepseek-chat/models/DeepSeek-R1-0528-Qwen3-8B",
);

export const streamFromModel = () => {
  const stream = streamText({
    model,
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "What is photosynthesis?" },
    ],
  });

  return stream;
};

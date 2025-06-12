import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { generateObject } from "ai";
import { z } from "zod";

const clarifai = createOpenAICompatible({
  name: "clarifai",
  baseURL: "https://api.clarifai.com/v2/ext/openai/v1",
  apiKey: process.env.CLARIFAI_PAT!,
});

const model = clarifai.chatModel(
  "https://clarifai.com/deepseek-ai/deepseek-chat/models/DeepSeek-R1-0528-Qwen3-8B",
);

export const generateObjectFromModel = async () => {
  const result = await generateObject({
    model,
    schema: z.array(
      z.object({
        name: z.string(),
        breed: z.string(),
      }),
    ),
    prompt:
      "Generate 10 cat names and breeds for a fictional book about a world where cats rule shrimp.",
  });

  return result;
};

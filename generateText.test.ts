import { expect, test } from "vitest";
import { generateClarifaiText } from "./generateText";

test(
  "generateText",
  async () => {
    const result = await generateClarifaiText("What is photosynthesis?");

    console.log(JSON.stringify(result));

    expect(typeof result.text).toBe("string");
    expect(result.text.length).toBeGreaterThan(0);
    expect(result.usage).toMatchObject({
      promptTokens: expect.any(Number),
      completionTokens: expect.any(Number),
      totalTokens: expect.any(Number),
    });
    expect(result.finishReason).toBe("stop");
  },
  {
    timeout: 60_000,
  },
);

import { test, expect } from "vitest";
import { generateObjectFromModel } from "./generateObject";

test("generateObject", async () => {
  const result = await generateObjectFromModel();

  console.log(JSON.stringify(result));

  expect(Array.isArray(result.object)).toBe(true);

  result.object.forEach((item) => {
    expect(item).toMatchObject({
      name: expect.any(String),
      breed: expect.any(String),
    });
  });
  expect(result.usage).toMatchObject({
    promptTokens: expect.any(Number),
    completionTokens: expect.any(Number),
    totalTokens: expect.any(Number),
  });
  expect(result.finishReason).toBe("stop");
}, 60_000);

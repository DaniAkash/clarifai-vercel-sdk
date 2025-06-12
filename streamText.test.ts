import { expect, test } from "vitest";
import { streamFromModel } from "./streamText";

test("streamText", async () => {
  const result = streamFromModel();

  for await (const message of result.textStream) {
    expect(message).toBeDefined();
  }
}, 60_000);

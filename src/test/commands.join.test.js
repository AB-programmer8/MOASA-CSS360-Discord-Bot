
import test from "node:test";
import assert from "node:assert";
//import joinCommand from "../commands/join.js";
import { execute } from "../commands/join.js";

import { createMockInteraction } from "./utils/mockInteraction.js";

test("join fails outside mafia-game channel", async () => {
  const interaction = createMockInteraction({ channelName: "general" });

  await execute(interaction);

  assert(interaction.replied.content.includes("only be used"));
});

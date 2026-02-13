
import test from "node:test";
import assert from "node:assert";
//import resetCommand from "../commands/reset.js";
import { execute } from "../commands/reset.js";
import { joinedPlayers } from "../helpers/gameState.js";
import { createMockInteraction } from "./utils/mockInteraction.js";

test("reset command clears players", async () => {
  joinedPlayers.add("1");

  const interaction = createMockInteraction();

  await execute(interaction);

  assert.strictEqual(joinedPlayers.size, 0);
});


import test from "node:test";
import assert from "node:assert";
import roleCommand from "../commands/role.js";
//import { playerRoles } from "../helpers/gameState.js";
//import { execute } from "../helpers/gameState.js";
import { playerRoles } from "../helpers/gameState.js";
import { execute } from "../commands/role.js";

import { createMockInteraction } from "./utils/mockInteraction.js";

test("role command returns player role", async () => {
  playerRoles.set("123", "Mafia");

  const interaction = createMockInteraction({ userId: "123" });

  await execute(interaction);

  assert(interaction.replied.content.includes("Mafia"));
});

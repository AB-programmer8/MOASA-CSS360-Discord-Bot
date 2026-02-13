

import test from "node:test";
import assert from "node:assert";
import {
  joinedPlayers,
  playerRoles,
  resetGame
} from "../helpers/gameState.js";

test("resetGame clears state", () => {
  joinedPlayers.add("1");
  playerRoles.set("1", "Mafia");

  resetGame();

  assert.strictEqual(joinedPlayers.size, 0);
  assert.strictEqual(playerRoles.size, 0);
});

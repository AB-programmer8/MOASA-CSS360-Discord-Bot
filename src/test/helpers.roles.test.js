

import test from "node:test";
import assert from "node:assert";
import { assignRoles } from "../helpers/roles.js";


test("assignRoles assigns correct roles", () => {
  const players = new Set(["1", "2", "3", "4"]);

  const roles = assignRoles(players);

  assert.strictEqual(roles.size, 4);

  const values = [...roles.values()];

  assert(values.includes("Mafia"));
  assert(values.includes("Doctor"));
  assert.strictEqual(values.filter(r => r === "Civilian").length, 2);
});

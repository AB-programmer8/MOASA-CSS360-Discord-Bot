//import { SlashCommandBuilder } from "discord.js";
import pkg from "discord.js";
const { SlashCommandBuilder } = pkg;

import { resetGame } from "../helpers/gameState.js";

let data;

if (process.env.NODE_ENV !== "test") {
  data = new SlashCommandBuilder()
    .setName("reset")
    .setDescription("Reset the Mafia game (admin only)");
}

export { data };


// export const data = new SlashCommandBuilder()
//   .setName("reset")
//   .setDescription("Reset the Mafia game (admin only)");

export async function execute(interaction) {
  resetGame();
  await interaction.reply({ content: "✅ Game has been reset!", ephemeral: true});
}

export default { data, execute };

// export default {
//   data: new SlashCommandBuilder()
//     .setName("reset")
//     .setDescription("Reset the Mafia game (admin only)"),

//   async execute(interaction) {
//     resetGame();
//     await interaction.reply({ content: "✅ Game has been reset!", ephemeral: true });
//   },
//};

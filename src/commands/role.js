// commands/role.js
//import { SlashCommandBuilder } from "discord.js";
import pkg from "discord.js";
const { SlashCommandBuilder } = pkg;

import { playerRoles } from "../helpers/gameState.js";
import { ROLE_COMMANDS } from "./roleCommands.js"

// export const data = new SlashCommandBuilder()
//   .setName("reset")
//   .setDescription("Reset the Mafia game (admin only)");

// export async function execute(interaction) {
//   resetGame();
//   await interaction.reply({ content: "✅ Game has been reset!", ephemeral: true});
// }


//export default {
  // data: new SlashCommandBuilder()
  //   .setName("role")
  //   .setDescription("View your Mafia role"),
  let data;

if (process.env.NODE_ENV !== "test") {
  data = new SlashCommandBuilder()
    .setName("role")
    .setDescription("View your mafia role");
}

export { data };

  // export const data = new SlashCommandBuilder()
  // .setName("role")
  // .setDescription("View your Mafia role");

  export async function execute(interaction) {
  const role = playerRoles.get(interaction.user.id);

    if (!role) {
      return interaction.reply({
        content: "❌ You are not part of an active Mafia game.",
        ephemeral: true,
      });
    }

    const commands = ROLE_COMMANDS[role] || "Good luck!";

    await interaction.reply({
      content:
        `🎭 **Your Role: ${role}**\n\n` +
        `${commands}\n\n` +
        "Do not reveal your role to other players.\n" +
        "Use `/mycommands` to view your role's commands at any time.\n" +
        "Good luck… 😈",
      ephemeral: true,
    });
}

  //async execute(interaction) {
    // const role = playerRoles.get(interaction.user.id);

    // if (!role) {
    //   return interaction.reply({
    //     content: "❌ You are not part of an active Mafia game.",
    //     ephemeral: true,
    //   });
    // }

    // const commands = ROLE_COMMANDS[role] || "Good luck!";

    // await interaction.reply({
    //   content:
    //     `🎭 **Your Role: ${role}**\n\n` +
    //     `${commands}\n\n` +
    //     "Do not reveal your role to other players.\n" +
    //     "Use `/mycommands` to view your role's commands at any time.\n" +
    //     "Good luck… 😈",
    //   ephemeral: true,
    // });
  //},
//};

export default { data, execute };
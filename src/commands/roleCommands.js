//import { SlashCommandBuilder } from "discord.js";
import pkg from "discord.js";
const { SlashCommandBuilder } = pkg;

import { playerRoles } from "../helpers/gameState.js";

export const ROLE_COMMANDS = {
  "Mafia": "🕵️ **Mafia Commands:**\n• `/kill` - Eliminate a player in this round.",
  "Doctor": "🩺 **Doctor Commands:**\n• `/save` - Choose a player to protect.",
  "Civilian": "👥 **Civilian Commands:**\n• '/vote [username]' - Vote for who you think is the Mafia."
};

// export const data = new SlashCommandBuilder()
//   .setName("reset")
//   .setDescription("Reset the Mafia game (admin only)");

// export async function execute(interaction) {
//   resetGame();
//   await interaction.reply({ content: "✅ Game has been reset!", ephemeral: true});
// }

//export default {
  // data: new SlashCommandBuilder()
  //   .setName("mycommands")
  //   .setDescription("List commands for your role"),
  let data;

if (process.env.NODE_ENV !== "test") {
  data = new SlashCommandBuilder()
    .setName("mycommands")
    .setDescription("List commands for your role");
}

export { data };

  // export const data = new SlashCommandBuilder()
  // .setName("mycommands")
  // .setDescription("List commands for your role");
  export async function execute(interaction) {
  const role = playerRoles.get(interaction.user.id);

    if (!role) {
      return interaction.reply({ content: "No role found!", ephemeral: true });
    }

    await interaction.reply({
      content: `${ROLE_COMMANDS[role]}`,
      ephemeral: true,
    });
}

  //async execute(interaction) {
    // const role = playerRoles.get(interaction.user.id);

    // if (!role) {
    //   return interaction.reply({ content: "No role found!", ephemeral: true });
    // }

    // await interaction.reply({
    //   content: `${ROLE_COMMANDS[role]}`,
    //   ephemeral: true,
    // });
  //},
//};

export default { data, execute };
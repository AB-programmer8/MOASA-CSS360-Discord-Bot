//import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import pkg from "discord.js";
const { SlashCommandBuilder, EmbedBuilder } = pkg;


// export const data = new SlashCommandBuilder()
//   .setName("reset")
//   .setDescription("Reset the Mafia game (admin only)");

// export async function execute(interaction) {
//   resetGame();
//   await interaction.reply({ content: "✅ Game has been reset!", ephemeral: true});
// }


//export default {
  // data: new SlashCommandBuilder()
  //   .setName("rules")
  //   .setDescription("View the rules of the Mafia game"),
  let data;

if (process.env.NODE_ENV !== "test") {
  data = new SlashCommandBuilder()
    .setName("rules")
    .setDescription("View the rules of the Mafia game");
}

export { data };

  // export const data = new SlashCommandBuilder()
  // .setName("rules")
  // .setDescription("View the rules of the Mafia game");

  export async function execute(interaction) {
  const rulesEmbed = new EmbedBuilder()
      .setTitle("🕵️ Mafia Game Rules")
      .setColor(0x8b0000)
      .setDescription(
        "**Objective**\n" +
        "• Mafia: eliminate all civilians\n" +
        "• Civilians: identify and eliminate the mafia\n\n" +

        "**Roles**\n" +
        "🕵️ **Mafia**\n" +
        "• Secretly choose a player to eliminate each night\n\n" +

        "🩺 **Doctor**\n" +
        "• Each night, choose one player to protect\n" +
        "• The protected player survives if targeted by the Mafia\n" +
        "• You may not choose to protect yourself\n\n" +

        "👥 **Civilians**\n" +
        "• No special abilities\n" +
        "• Work together to identify the Mafia\n\n" +

        "**Gameplay Rules**\n" +
        "• Do not reveal your role unless the game allows it\n" +
        "• No private messages during the game unless instructed\n" +
        "• Dead players may not talk\n" +
        "• Follow the moderator’s instructions at all times\n\n" +

        "**Conduct**\n" +
        "• No cheating or outside communication\n" +
        "• Be respectful to all players\n" +
        "• Have fun and play fair 🎭"
      )
      .setFooter({ text: "Good luck… trust no one." });

    await interaction.reply({ embeds: [rulesEmbed] });
}
  //async execute(interaction) {
    // const rulesEmbed = new EmbedBuilder()
    //   .setTitle("🕵️ Mafia Game Rules")
    //   .setColor(0x8b0000)
    //   .setDescription(
    //     "**Objective**\n" +
    //     "• Mafia: eliminate all civilians\n" +
    //     "• Civilians: identify and eliminate the mafia\n\n" +

    //     "**Roles**\n" +
    //     "🕵️ **Mafia**\n" +
    //     "• Secretly choose a player to eliminate each night\n\n" +

    //     "🩺 **Doctor**\n" +
    //     "• Each night, choose one player to protect\n" +
    //     "• The protected player survives if targeted by the Mafia\n" +
    //     "• You may not choose to protect yourself\n\n" +

    //     "👥 **Civilians**\n" +
    //     "• No special abilities\n" +
    //     "• Work together to identify the Mafia\n\n" +

    //     "**Gameplay Rules**\n" +
    //     "• Do not reveal your role unless the game allows it\n" +
    //     "• No private messages during the game unless instructed\n" +
    //     "• Dead players may not talk\n" +
    //     "• Follow the moderator’s instructions at all times\n\n" +

    //     "**Conduct**\n" +
    //     "• No cheating or outside communication\n" +
    //     "• Be respectful to all players\n" +
    //     "• Have fun and play fair 🎭"
    //   )
    //   .setFooter({ text: "Good luck… trust no one." });

    // await interaction.reply({ embeds: [rulesEmbed] });
  //},
//};

export default { data, execute };

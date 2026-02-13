//import { SlashCommandBuilder } from "discord.js";
import pkg from "discord.js";
const { SlashCommandBuilder } = pkg;

import { assignRoles } from "../helpers/roles.js";
import { joinedPlayers, playerRoles } from "../helpers/gameState.js";

let joinOpen = false;
//const joinedPlayers = new Set();
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function formatPlayers(client, players) {
  if (players.size === 0) return "None";
  return [...players]
    .map(id => {
      const user = client.users.cache.get(id);
      return user ? user.username : `<@${id}>`;
    })
    .join(", ");
}
// export const data = new SlashCommandBuilder()
//   .setName("reset")
//   .setDescription("Reset the Mafia game (admin only)");

// export async function execute(interaction) {
//   resetGame();
//   await interaction.reply({ content: "✅ Game has been reset!", ephemeral: true});
// }

//export default {
  // data: new SlashCommandBuilder()
  //   .setName("join")
  //   .setDescription("Join the Mafia game"),
  let data;

if (process.env.NODE_ENV !== "test") {
  data = new SlashCommandBuilder()
    .setName("join")
    .setDescription("Join the game");
}

// export { data };

  // export const data = new SlashCommandBuilder()
  // .setName("join")
  // .setDescription("Join the Mafia game");

  export async function execute(interaction) {
    if (interaction.channel.name !== "mafia-game") {
    return interaction.reply({
      content: "This command can only be used in the mafia-game channel.",
      ephemeral: true
    });
  }

  const userId = interaction.user.id;

    // Start joining(after first person joined)
    if (joinOpen) {
      if (joinedPlayers.has(userId)) {
        return interaction.reply({ content: "You already joined!", ephemeral: true });
      }
      
      joinedPlayers.add(userId);
      
      return interaction.reply({
        content: `✅ You joined the game! Total players: ${joinedPlayers.size}`,
        ephemeral: true 
      });
    }

    // Start joining(first person)
    joinOpen = true;
    joinedPlayers.clear();
    joinedPlayers.add(userId);

    let remaining = 15; // Set to 15 seconds

    await interaction.reply({
      content: generateJoinText(remaining, interaction.client, joinedPlayers),
      fetchReply: true
    });

    // Countdwon loop
    while (remaining > 0) {
      await sleep(1000);
      remaining--;

      if (!joinOpen) break; 

      try {
        // Show the newest joinedPlayers and edit
        await interaction.editReply({
          content: generateJoinText(remaining, interaction.client, joinedPlayers)
        });
      } catch (error) {
        console.error("Update error:", error);
      }
    }

    // Finish
    joinOpen = false;
    const finalSize = joinedPlayers.size;

    if (finalSize < 3) {
      await interaction.editReply({
        content: `❌ **Recruitment Closed**\nNot enough players. (Min: 3, Current: ${finalSize})`
      });
    } else {
      await interaction.editReply({
        content:
          `✅ **Recruitment Closed!**\n` +
          `Total Players: **${finalSize}**\n` +
          `Members: ${formatPlayers(interaction.client, joinedPlayers)}\n\n` +
          `🎭 Roles have been assigned!\nUse \`/role\` to view your role privately.`
      });

      const roles = assignRoles(joinedPlayers);

      // store roles for /role command
      for (const [userId, role] of roles.entries()) {
        playerRoles.set(userId, role);
      }
    }
}

  //async execute(interaction) {
    // const userId = interaction.user.id;

    // // Start joining(after first person joined)
    // if (joinOpen) {
    //   if (joinedPlayers.has(userId)) {
    //     return interaction.reply({ content: "You already joined!", ephemeral: true });
    //   }
      
    //   joinedPlayers.add(userId);
      
    //   return interaction.reply({
    //     content: `✅ You joined the game! Total players: ${joinedPlayers.size}`,
    //     ephemeral: true 
    //   });
    // }

    // // Start joining(first person)
    // joinOpen = true;
    // joinedPlayers.clear();
    // joinedPlayers.add(userId);

    // let remaining = 15; // Set to 15 seconds

    // await interaction.reply({
    //   content: generateJoinText(remaining, interaction.client, joinedPlayers),
    //   fetchReply: true
    // });

    // // Countdwon loop
    // while (remaining > 0) {
    //   await sleep(1000);
    //   remaining--;

    //   if (!joinOpen) break; 

    //   try {
    //     // Show the newest joinedPlayers and edit
    //     await interaction.editReply({
    //       content: generateJoinText(remaining, interaction.client, joinedPlayers)
    //     });
    //   } catch (error) {
    //     console.error("Update error:", error);
    //   }
    // }

    // // Finish
    // joinOpen = false;
    // const finalSize = joinedPlayers.size;

    // if (finalSize < 3) {
    //   await interaction.editReply({
    //     content: `❌ **Recruitment Closed**\nNot enough players. (Min: 3, Current: ${finalSize})`
    //   });
    // } else {
    //   await interaction.editReply({
    //     content:
    //       `✅ **Recruitment Closed!**\n` +
    //       `Total Players: **${finalSize}**\n` +
    //       `Members: ${formatPlayers(interaction.client, joinedPlayers)}\n\n` +
    //       `🎭 Roles have been assigned!\nUse \`/role\` to view your role privately.`
    //   });

    //   const roles = assignRoles(joinedPlayers);

    //   // store roles for /role command
    //   for (const [userId, role] of roles.entries()) {
    //     playerRoles.set(userId, role);
    //   }
    // }
  //}
//};

export { data };
export default { data, execute };


function generateJoinText(timeLeft, client, players) {
  return "🕵️ **Mafia Game Recruitment!**\n" +
    "Type `/join` to participate.\n" +
    `⏱ Closing in **${timeLeft}** seconds...\n\n` +
    `Current Players (**${players.size}**): ${formatPlayers(client, players)}`;
}
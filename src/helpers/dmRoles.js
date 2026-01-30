export const dmRoles = async (roles, guild) => {
  for (const [userId, role] of roles.entries()) {
    try {
      const member = await guild.members.fetch(userId);

      await member.send(
        `🎭 **Your Role: ${role}**\n\n` +
        "Do not reveal your role to other players unless instructed.\n" +
        "Good luck… 😈"
      );
    } catch (err) {
      console.error(`Failed to DM user ${userId}`, err);
    }
  }
};
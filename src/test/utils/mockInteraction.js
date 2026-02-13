export function createMockInteraction({
  userId = "123",
  channelName = "mafia-game"
} = {}) {
  return {
    user: { id: userId },
    channel: {
      name: channelName,
      id: "channel123"
    },
    client: {
      users: {
        fetch: async (id) => ({
          id,
          send: async () => {}
        })
      }
    },
    reply: async function (payload) {
      this.replied = payload;
      return payload;
    },
    editReply: async function (payload) {
      this.edited = payload;
      return payload;
    }
  };
}

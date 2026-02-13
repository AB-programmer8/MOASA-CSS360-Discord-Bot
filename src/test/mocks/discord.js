// export class SlashCommandBuilder {
//   setName() { return this; }
//   setDescription() { return this; }
//   addSubcommand(fn) {
//     fn({
//       setName() { return this; },
//       setDescription() { return this; }
//     });
//     return this;
//   }
// }

// export class EmbedBuilder {
//   setTitle() { return this; }
//   setColor() { return this; }
//   setFooter() { return this; }
//   setDescription() { return this; }
//   addFields() { return this; }
// }

class SlashCommandBuilder {
  setName() { return this; }
  setDescription() { return this; }
  addUserOption() { return this; }
}

class EmbedBuilder {
  setTitle() { return this; }
  setDescription() { return this; }
  setColor() { return this; }
}

export default {
  SlashCommandBuilder,
  EmbedBuilder,
};


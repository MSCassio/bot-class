const { RichEmbed } = require('discord.js');

class Embed extends RichEmbed {
constructor(user, data = {}) {
super(data);

this.setColor('#7298da');
if (user) this.setFooter(user.tag, user.avatarURL).setTimestamp();
  }
 }

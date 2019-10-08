const { Command, Embed } = require('../');

class PingCommand extends Command {
constructor(client, name) {
super(client, name);

this.name = 'ping';
this.aliases = ['pong'];
this.category = 'general';
}

async run ({ guild, author, channel }) {

channel.send(new Embed(author).setDescription(`OWO! Minha latência atual é de **${parseInt(this.client.ping)} ms**!`));
 }
}

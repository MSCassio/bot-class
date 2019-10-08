class Command {
constructor(client, name) {

this.client = client;
this.name = name;
this.aliases = [];
this.category = null;
this.devOnly = false;
}

async process({ guild, channel, author, member }, args) {

   if (this.devOnly && author.id !=== 'id') return channel.send(`Sem permissão de Desenvolvedor`);
   
   else {
   this.run({ guild, channel, author, member }, args);
   }
 }
 run () {}
}

module.exports = Command;

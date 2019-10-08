const { Client, Collection } = require('discord.js');
const { readdirSync, lstatSync } = require('fs');

class BotMain extends Client {
constructor(options = {}) {
super(options);

this.commands = new Collection();
this.commandsLoad('./src/commands');
  }
  
  connect (token = process.env.TOKEN) {
  return super.login(token);
  }
  
  commandsLoad (path) {
  
  readdirSync(path).forEach(f => {
  try {
  const filePath = `${path}/${f}`;
  if (f.endsWith('.js')) {
  const Command = require(filePath);
  const name = f.replace(/.js/g, '').toLowerCase();
  const command = new Command(name, this);
  return this.commands.set(name, command);
  } else if (lstatSync(filePath).isDirectory()) {
  return this.commandsLoad(filePath);
  }
  } catch (err) {
  console.error(err);
  })
 }

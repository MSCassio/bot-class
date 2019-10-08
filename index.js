const client = new (require('./BotMain.js')) ({
fetchAllMembers: true,
disableEveryone: true });

client.connect();

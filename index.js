// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent] });

// Import the readline module
const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, c => {
  console.log(`Prêt! Connecté en tant que ${c.user.tag}`);
  rl.prompt();
});

// Listen for lines entered in the terminal and send them as messages
rl.on('line', (input) => {
  const channel = client.channels.cache.get('channelId'); // Replace channelId with your destination channel ID
  if (!channel) return;
  channel.send(input);
});

// Log in to Discord with your client's token
client.login(token);

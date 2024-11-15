const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');  // For creating zip files

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent] });

const TOKEN = 'MTI4NjAxMDA3NjE1ODYyMzgyNQ.GJaN-2.gvDRZLcyaIalPnVJM3Ns8a76ek_lDmOnBrQl6w
';  // Replace with your bot's token
const FILE_HOSTING_URL = 'https://yourfilehosting.com/path/to/zipfile'; // Replace with the link to the hosted zip file

client.once('ready', () => {
  console.log('Bot is online!');
});

client.on('messageCreate', async (message) => {
  if (message.content === '!mainexem' && !message.author.bot) {
    try {
      const user = message.author;

      // Step 1: Send DM asking for the download link
      await user.send("Please find the requested zip file here: ");
      await user.send(FILE_HOSTING_URL);  // Provide the link to the zip file

      // Optional: Confirm to the user that the file has been sent
      await user.send("The zip file contains the following files: `priv.p12`, `mobile.provision`, and `password.txt`.");
      
    } catch (error) {
      console.error('Error during the process:', error);
      message.reply('There was an error while processing your request.');
    }
  }
});

client.login(TOKEN);

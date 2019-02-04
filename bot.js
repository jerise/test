const Discord = require('discord.js');
const { Client, Util } = require('discord.js');
const client = new Discord.Client();
const { PREFIX, GOOGLE_API_KEY } = require('./config');
const prefix = '#'
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();
const moment = require('moment');
const fs = require("fs");
const coolDown = new Set();
const db = require('quick.db')
const ms = require('ms')
const bot = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`cahelp |  `,"https://www.twitch.tv/7alabygamer98")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.on('message', async msg => {
             client.snek = require('snekfetch');
           var p = "#"
         if(msg.content.startsWith(p + "say")) {
          let args = msg.content.split(' ').slice(1).join(' ');
         if(!args) return args.missing(msg, 'No text added', this.help);
         msg.channel.startTyping();
         const searchMessage = await msg.channel.send('🖌️Painting...');
         const { body } = await client.snek.get(`https://nekobot.xyz/api/imagegen?type=clyde&text=${encodeURIComponent(args)}`);
         msg.channel.send({file: { attachment:body.message, name: 'clyde.png'}}).then(()=> { searchMessage.delete(); msg.channel.stopTyping(); });
       };
       });



client.on("message", (message) => {
                        if (message.channel.type === "dm") {
                    if (message.author.id === client.user.id) return;
                    let yumz = new Discord.RichEmbed()
                                .setTimestamp()
                                .setTitle("Direct Message To The Bot")
                                .addField(`Sent By:`, `<@${message.author.id}>`)
                                .setColor("RANDOM")
                                .setThumbnail(message.author.displayAvatarURL)
                                .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
                                .setFooter(`DM Bot Messages | DM Logs`)
                            client.users.get("448444251504640012").send(yumz)
                        }
            });

client.on('message', message => {
     var prefix = "#";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "h") {
    let say = new Discord.RichEmbed()
        .setTitle('Text emboss :')
   message.channel.send(`\n ${zalgo(args.join(' '))}`);
  }

});

client.login(process.env.BOT_TOKEN);

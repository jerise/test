const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");
const client = new Discord.Client();
const fs = require("fs");/////////////Mal Team
const config = require("./config.json");/////////////Mal Team


/*/ Start of loading events /*//////////////Mal Team
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);/////////////Mal Team
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});/////////////Mal Team
/*/ End of loading events /*/

/*/ Start of loading commands /*//////////////Mal Team
client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
  }/////////////Mal Team
});/////////////Mal Team
/*/ End of loading commands /*//////////////Mal Team
/////////////Mal Team
/*/* Login as the bot. /*//////////////Mal Team
client.login(config.token);//////////////Mal Team

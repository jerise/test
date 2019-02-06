const config = require("../config.json");
const fs = require("fs")/////////////Mal Team

exports.run = (client, message, args) => {
if(message.author.id !== config.ownerID) return;
if(message.content.startsWith(config.prefix + "prefix")) {/////////////Mal Team
    // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    // change the configuration in memory/////////////Mal Team
    config.prefix = newPrefix;/////////////Mal Team
    message.channel.send(`Prefix has been updated to ${newPrefix}`).catch(console.error);
  
    // Now we have to save the file./////////////Mal Team
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  }/////////////Mal Team
}
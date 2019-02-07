const Discord = require('discord.js');
const { Client, Util } = require('discord.js');
const client = new Discord.Client();
const prefix = '#'
const { PREFIX, GOOGLE_API_KEY } = require('./config');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();
const moment = require('moment');
const fs = require("fs");
const coolDown = new Set();
const Canvas = require('canvas');
const db = require('quick.db')
const ms = require('ms')
const bot = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
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


const seender = 'لعمل منشن لمرسل الرساله قم بكتابة [المرسل] في الرسالة.';
const server = 'لكتابة اسم السيرفر قم بكتابة [السيرفر] في الرسالة.';
const user = 'لعمل منشن للشخص قم بكتابة [العضو] في الرسالة.';
 
client.on('message', message => {
   if(!message.channel.guild) return;
    var success = new Discord.RichEmbed()
    .setDescription(`تم أرسال رسالتك بنجاح.`)
    .setColor('GREEN')
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`**▶ 📝 لأرسال رسالة امبد قم بالضغط على \n ▶ ✏ لأرسال رسالة عادية قم بالضغط على \n ★ ${user} \n ★ ${server} \n ★ ${seender}**`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
 
EmbedBc.on("collect", r => {
 
message.channel.send(success);
message.guild.members.forEach(m => {
let EmbedRep = args.replace('[السيرفر]' ,message.guild.name).replace('[العضو]', m).replace('[المرسل]', `${message.author}`)
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(EmbedRep)
.setFooter(`${prefix}invite | لدعوة برودكاست بوت`)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(success);
message.guild.members.forEach(m => {
let NormalRep = args.replace('[السيرفر]' ,message.guild.name).replace('[العضو]', m).replace('[المرسل]', `${message.author}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});

client.on("message",async message => {
if(message.content === 'shop'){//الامر
let staff = message.guild.member(message.author).roles.find('name' ,"shop");
      if(!staff) return message.reply(`**Only Sellers | :x:**`)
var shopc = message.guild.channels.find("name","shop")
  if(!shopc) return message.reply("لا اجد الروم المخصص للبيع")
    let shop = '';
      let fillter = m => m.author.id === message.author.id
      
     

      await message.channel.send("اكتب الاشياء الذي سوف تبيعها").then(e => {
           message.channel.awaitMessages(fillter, { time: 60000, max: 1                                    
})
     .then(co => {
       shop = co.first().content;
        co.first().delete();
     
let desc = '';
        
e.edit("اكتب الدفع عند مين؟").then(e => {
  message.channel.awaitMessages(fillter, { time: 60000, max: 1 })

     .then(co => {
       desc = co.first().content;
        co.first().delete();
e.edit("Done").then(e => {
  shopc.send(`@everyone <$> @here
${message.guild.name}:tm: Shop :arrow_down:
======================
${shop}
=================
**الدفع عند:** **${desc}**

**تم الارسال بواسطة:** ${message.author}
@everyone </> @here`)
  })
})
  })
})
  })
           
      
  
     
  
      
           
}
});

giftKeys = {};
let devs = ["448444251504640012",""]; // تقدر تضيف ايدي ثالث نفس الفكره تسوي كذا let devs = ["ايديك","ايدي خويك او إي ادمن","ايدي خويك الثالث"];
client.on("message", msg =>{
  let args = msg.content.split(" ").slice(1)[0];
  let cmd = msg.content.split(' ')[0]
  if(cmd === `${prefix}giftR`){
  let roleW = msg.mentions.roles.first();
  if(!devs.includes(msg.author.id)){
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - انت لاتمتلك الصلاحية`);
    msg.reply(embed).then( z => z.delete(3000));
     return
  }
  if(!roleW) {
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - منشن الرتبة \`${prefix}giftR <@admin-role>\``);
    msg.reply(embed).then( z => z.delete(3000)); return
  };
  let role = msg.guild.roles.find(`name`, roleW.name);
  if(!role) {
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - Could't find \`${roleW.name}\` role.`);
  msg.reply(embed).then( msgs => msgs.delete(3000));
  return
  }
  var randomkeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var gift = "";
  for (var y = 0; y < 16; y++) {   ///16
    gift +=  `${randomkeys.charAt(Math.floor(Math.random() * randomkeys.length))}`;
  }
  giftKeys[gift] = role;
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:ok_hand: - **تم ارسآل الكود على الخاص**`);
  msg.reply(embed);
  let embed2= new Discord.RichEmbed()
  .setAuthor(msg.author.username, msg.author.displayAvatarURL)
  .setThumbnail(msg.author.avatarURL)
  .addField("**Key Of Gift**", gift,true)
  .addField("Role",giftKeys[gift].name,true)
  .addField("This Key Made by", msg.author, true)
  .addField("The Room", msg.channel , true)
  .setTimestamp()
  .setFooter(client.user.username,client.user.displayAvatarURL)  
  msg.author.send(embed2);
};
if( cmd === `${prefix}used`){
 
  if(!args) {  
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - **الرجاء ادخال كود الهدية** \`${prefix}used <Key>\``)
    msg.reply(embed).then( z => z.delete(3000));
    return
}
let embed = new Discord.RichEmbed()
.setTitle(`**جاري التحقق من الكود**`)
.setColor("#42f4f4")
  msg.reply(embed).then( msgs =>{
  if(giftKeys[args]){
    let hav = msg.member.roles.find(`name`, giftKeys[args].name);
    if(hav){
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **انت تمتلك هذه الرتبة مسبقًا**  \`${giftKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    return
    }
    let embed = new Discord.RichEmbed()
    .setTitle(`:tada: - **مبروك تم اعطائك رتبة** \`${giftKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    msg.member.addRole(giftKeys[args]);
    delete giftKeys[args]
  }else{
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **الكود غير صيحيح أو انه مستعمل من قبل**`)
    .setColor("#42f4f4")
    msgs.edit(embed)
  }});
};
});

client.login(process.env.BOT_TOKEN);

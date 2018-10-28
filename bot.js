const Discord = require("discord.js")

const moment = require("moment")

const client = new Discord.Client();

const canvas = require("canvas");

const fs = require('fs')

const child_process = require("child_process");

const Rocket = new Discord.Client();

const jimp = require("jimp");// npm i jimp

const package = ('package.json');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const dateFormat = require('dateformat');







const prefix = '$'

/////////

client.on('message', function(message) {
	const myID = "368768446327947265";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "sn")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send('**SetName,Done!**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "s")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send('**Streaming,Done!🎶**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "p")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send('**Playing,Done!🎶**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "l")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send('**Listening,Done!🎶**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "w")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send('**Watching,Done!🎶**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
				        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});

client.on('guildMemberAdd', member=> {



    client.channels.get("505300946096488451").send(`** # Wèlčomè Ťo Maģic..  **
    **# YourName.**: ${member} .`);

    });

var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.find("name", ", Magic Server.")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', 'magic');
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.find("name", ", Magic Server.")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
 channel.send(`** Joined By : # ${Invite.inviter}   ** `)            
 }
            dat[Inv] = Invite.uses;
        })
    })
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**Welcome To Maģic**.'
   ${member}`) 
}).catch(console.error)
})



var ss = 0;
 
client.on('voiceStateUpdate', (o,n) => {
    if (o.voiceChannel && !n.voiceChannel) {
        ss-=1
        n.guild.channels.get("505616173094666280").edit({
            name : "# Maģic Online. : [" + ss+ "]"
        })
    };
    if (n.voiceChannel && !o.voiceChannel) {
        ss+=1
        n.guild.channels.get("505616173094666280").edit({
            name : "# Maģic Online. : [" + ss+ "]"
        })
    }
})
client.on("ready", () => {
    client.guilds.get("505286693532729345").members.forEach(m => {
        if (m.voiceChannel) {
            ss+=1
        };
        client.channels.get("505616173094666280").edit({
            name : "# Maģic Online. : [" + ss+ "]"
        })
    });
 
});

	client.on('message', message => {



if (message.author.bot) return;

  if (message.content.split(" ")[0].toLowerCase() === prefix + "قفل") {

                        if(!message.channel.guild) return;



if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You Need MANAGE_MESSAGES Permission').then(message => message.delete(5000))

           message.channel.overwritePermissions(message.guild.id, {

         SEND_MESSAGES: false



           }).then(() => {

 const e = new Discord.RichEmbed()

               .setAuthor('Channel Disabled By : '+message.author.username)

                .setColor('#36393e')

               

               message.channel.send(e)

               });

             }

if (message.content.split(" ")[0].toLowerCase() === prefix + "فتح") {

    if(!message.channel.guild) return;



if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You Need MANAGE_MESSAGES Permission').then(message => message.delete(5000))

           message.channel.overwritePermissions(message.guild.id, {

         SEND_MESSAGES: true



           }).then(() => {

               const e = new Discord.RichEmbed()

               .setAuthor('Channel Enabled By : '+message.author.username)

                        .setColor('#36393e')

               

               message.channel.send(e)

           });

             }







});

  client.on('message', message => {

    if(message.content.includes('discord.gg')){

                                            if(!message.channel.guild) return message.reply('**- :chocolate_bar: #Wèlčomè Ťo Our.:microphone:.**');

        if (!message.member.hasPermissions(['ADMINISTRATOR'])){

        message.delete()

    return message.reply(`**ممـنوع آلـنشر هـنآ .. روآبـط ديسكـورد.**`)

    }

}

});


  client.on('message', message => {

    if(message.content.includes('youtube')){

                                            if(!message.channel.guild) return message.reply('**- :chocolate_bar: #Wèlčomè Ťo Our.:microphone:.**');

        if (!message.member.hasPermissions(['ADMINISTRATOR'])){

        message.delete()

    return message.reply(`**ممـنوع آلـنشر هـنآ .. روآبـط يوتيوب.**`)

    }

}

});

client.on('message',async message => {
  if(message.content.startsWith(prefix + "bcall")) {
if(message.member.hasPermissions(['ADMINISTRATOR'])) {
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
    message.channel.send('🇧🇨| **ارسل الرسالة الان**').then(msg => {

    let awaitM = message.channel.awaitMessages(filter, {
      max: 1,
      time: 20000,
      errors: ['time']
    })
    .then(collected => {
      collected.first().delete();
      thisMessage = collected.first().content;
      msg.edit('🇧🇨| **هل انت متأكد؟**');
      let awaitY = message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
        max: 1,
        time: 20000,
        errors: ['time']
      })
      .then(collected => {
        if(collected.first().content === 'لا') {
          msg.delete();
          message.delete();
          thisFalse = false;
        }
        if(collected.first().content === 'نعم') {
          if(thisFalse === false) return;
        message.guild.members.forEach(member => {
          msg.edit('🇧🇨| **جاري الارسال**');
          collected.first().delete();
          member.send(`${thisMessage}\n\n${member} ,\nتم الارسال من : ${message.guild.name}\n تم الارسال بواسطة : ${message.author.tag}`);
        });
        }
      });
    });
    });
} else return message.reply('لا يوجد لديك الصلاحيات')
  }
});

client.on('message', message => {

 if (message.content.startsWith('Mb')) {

  var norElden= new Discord.RichEmbed()

  .addField('اسم السيرفر ',` **__${message.guild.name}__**`)

      .addField('عدد الاعضاء',`**__${message.guild.memberCount}__**`)

  .setColor('RANDOM')

message.channel.send({ embed: norElden });

  }

});

 client.on('message', message => {
    if(message.content.startsWith(prefix + 'moveall')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });

    client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
        if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("⚠️|`انت لا تمتلك الخاصيه المطلوبة`");  
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``للأستخدام اكتب  : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("`لا تستطيع سحب `"+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }
}
});

const adminprefix = "$";
const devs = ['368768446327947265'];

client.on('message', message => {
if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(` Restarting : ${message.author.username}`);
        console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`تم اعادة تشغيل البوت`);
    }
  
  });

client.on('message', message => { 
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`OurBot.`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
/*جميع الحقوق محفوظهه لريبل ولسيرفر كودز
رآح يرسل للأونر تحذير + م يتطلب ملفات سويته لكم داتا مؤقت
سو روم بأسم log 
أو غيره من الكود عشان يرسل هنا التحذير
nvm i 10 
nvm use 10
npm i discord.js
*/
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });
  

client.login(process.env.BOT_TOKEN); 

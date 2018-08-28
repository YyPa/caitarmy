const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setAuthor("Twerk zamanı.")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor('RANDOM')
  .setImage("https://78.media.tumblr.com/7ffed20b4c84aad2bdf206673ecf16ab/tumblr_o32slx6Eat1sll7qho1_400.gif")
  .setFooter("Panda çaktırma :D",)
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'twerk',
  description: 'Ping Gösterir',
  usage: 'twerk'
};

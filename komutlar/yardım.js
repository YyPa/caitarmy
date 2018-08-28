const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Cait Army Kalp :heart: Gerekli **" , `:heart::heart::heart: Discord Sunucuna (mod log) Adında Bir Kanal Ekle mod log kanalı  olmazsa Bir Çok İşleminiz Başarısız Olur ... :heart::heart::heart:` )
.addField("**Eğlence ve Kullanıcı Komutları:**", ` c!atombombası = kaçın lan bomba patladı xD \nc!bantroll = Troll Ban xD \nc!bağış = Bağış Yapmanız için gereken barkodu Atar (İninal) \nc!koş = Koş Lan Köpek Geliyoo SSD::ADSD:ASD: \nc!hesapla = Yazdığınız İşlemi Cevaplar \nc!emoji = Yazdığınız Kelimeyi Dönüştürür \nc!anime = Anime Fotoları Atar   \nc!avatar = Profil Fotonuzu Atar  \nc!bulanık = Bulanık pp Nizi Gönderir  \nc!çayiç = Çay İçer  \nc!çekiç =Çekiç Atarsınız  \nc!yumrukat = Yumruk Atar. \nc!herkeseçay = Herkese Çay Verir \nc!çayaşekerat = Çayına şeker Atar \nc!muz = Senin Muzun Kaç cm İse Onu Söyler  \nc!twerk = Twerk Atan Bayanlar xD \nc!wtf = OH my GODDD xD \nc!saat = Türkiye Saatini Gösterir \nc!sigara = Sigara İçersiniz \nc!yaz = Bota Birşey Yazdırırsınız  \nc!çekiliş = Çekiliş Yapar \nc!davet = Botun Sahibinin Discord Sunucusu <3 \nc!zamanlayıcı = Belirlediğiniz Süre Geçtikden Sonra Bilgi Verir  \nc!ping = Botun Gecikme Süresi \nc!kullanıcıbilgim = Senin Hakkında Bilgi Verir`)
  .addField("**Yetkili Komutları**", ` c!sustur = Sustur <Kullanıcı> <sebep> \nc!temizle <sayı> = Sohbeti Temizler \nc!sil <sayı> = Sohbeti Temizler  \nc!ban = İstediğiniz Bir Kullanıcıyı Banlar \nc!kick = İstediğiniz Bir  Kullanıcıyı Banlar \nc!davet = botun davet linkini atar \nc!kilit = bulunduğunuz kanalı istediğiniz zamanla kilitler \nc!ping = Botun Gecikme Süresini Belirler \nc!uyar = istediğiniz bir kullanıcıyı uyarır`)
  .addField("**Ana Komutlar**", " c!bugbuldum <bulduğunuz bug> = Bulduğunuz Bugu Bize Bildirirsiniz \nc!tavsiye <tavsiyeniz> = Tavsiye Yollarsınız \nc!sw = Botun Bulunduğu Serverler \nc!sunucu = Sunucu Hakkında Bilgi Verir \nc!yardım = BOT Komutlarını Atar. \nc!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nc!ping = BOT Gecikme Süresini Söyler. \nc!davet = BOT Davet Linkini Atar. \nc!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı**", " **ZakkyMallak** Eğer Bir Konuda Sorun Olursa c!davet Yaz ve sahibin dc sine gidip ona bu durumu bildir :heart: ")
  .setFooter('**---------------Cait Army Bot---------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};

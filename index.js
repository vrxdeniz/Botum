const { stripIndents, oneLine } = require('common-tags');
const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = "vrx!";
let owner = "203116573211230208";

bot.on("ready", () => {
    bot.user.setGame(prefix + "yardım | VRX Company")
    console.log("Bağlandım!")
});

bot.login("NDA2NTc4NzQyOTk1OTc2MTk0.DU9DzA.a9pRw789sPC1VVZhWfXLPN7Gf1w")

bot.on("message", message => {

    if (message.content.toLowerCase() === "sa") {
        message.reply("**Aleyküm Selam!**")
    }

    if (message.content === prefix + "sunucubilgi") {
        const embed = new Discord.RichEmbed()

            .addField("Sunucu Adı", message.guild.name, true)

            .addField("Sunucu ID", message.guild.id, true)

            .addField("Sunucu Sahibi", message.guild.owner, true)

            .addField("Toplam Üye Sayısı", message.guild.memberCount, true)

            .addField("AFK Süresi", message.guild.afkTimeout, true)

            .setFooter("Oluşturulma Tarihi " + message.guild.createdAt)

            .setColor(0xff0000)

        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "bilgi") {
        const embed = new Discord.RichEmbed()

            .addField("Bot Sahibi", `<@${owner}>`, true)

            .addField("Version", "0.0.2", true)

            .addField("Toplam Sunucu Sayısı", bot.guilds.size, true)

            .addField("Toplam Kullanıcı Sayısı", bot.users.size, true)

            .addField("Toplam Kanal Sayısı", bot.channels.size, true)

            .setColor(0x000001)

        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "kurabiye") {
        message.channel.sendMessage(`Canım gel buraya sana kurabiye vereceğim! <@${message.author.id}>`)
        message.react("🍪")
    }

    if (message.content === prefix + "yardım") {
        message.channel.sendMessage(stripIndents`
**Selam, ben ${bot.user.username}!** Şuanda görmekte olduğunuz kısım benim bütün komutlarımı göstermektedir.

**Bilgi Komutları**
\`\`\`fix
${prefix}yardım - Botun bütün komutlarını size gösterir.
${prefix}sunucubilgi - Sunucu hakkkında detaylı bilgi verir.
${prefix}bilgi - Bot hakkında bilgi verir.
\`\`\`

**Eğlence Komutları**
\`\`\`fix
${prefix}kurabiye - Size kurabiye verir.
\`\`\` `)
    }

});

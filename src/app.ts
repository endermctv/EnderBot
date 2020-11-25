require('dotenv').config()
import './sentry.js'
import './functions'
import {
    Client,
    MessageEmbed,
    version
} from 'discord.js'
import 'moment'

const client = new Client()
const prefix = '/'

client.on('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}.`)
    client.user.setActivity(`${client.users.cache.size} membres`, {type: 'WATCHING'})
})

// client.on('guildMemberAdd', member => {
//     const channel = member.guild.channels.cache.find(ch => ch.id === '739784345505759292')
//     if (!channel) return
//     channel.send(`Welcome to the server, ${member}`)
// })

client.on('message', async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase()

    if(cmd === 'say'){
        let embed = new MessageEmbed()
            .setDescription(args.join(` `))
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp(Date.now())
        message.channel.send(embed)
        await message.delete()
    }

    if(cmd === 'suggest'){
        let embed = new MessageEmbed()
            .setTitle(`Nouvelle suggestion ?`)
            .setDescription(`Vous souhaitez faire une suggestion ? Utilisez la commande \`${prefix}suggest\` suivi de votre suggestion !`)
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp(Date.now())
        message.channel.send(embed)
        await message.delete()
    }

    if(cmd === 'ping'){
        let ping = Date.now()
        let embed = new MessageEmbed()
            .setTitle(`Pong !`)
            .setDescription(`Ma latence est de \`${Date.now() - ping} ms\`.`)
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp(Date.now())
        message.channel.send(embed)
        await message.delete()
    }

    if(cmd === 'bot'){
        let embed = new MessageEmbed()
            .setTitle(`Informations du bot`)
            .addField(`Développeur`, `<@587570961939955713>`, true)
            //.addField(`Pseudo`, client.user.username, true)
            .addField(`Languages`, `TypeScript et JavaScript`, true)
            .addField(`Version de discord.js`, version, true)
            .addField(`Version de Node.js`, process.version, true)
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp(Date.now())
        message.channel.send(embed)
        await message.delete()
    }

    if(cmd === 'user'){
        let member = message.member
        if(message.mentions.members.first()) member = message.mentions.members.first()
        let presence: string
        let bot: string
        if(member.user.presence.status === "online") presence = "En ligne"
        if(member.user.presence.status === "idle") presence = "Inactif"
        if(member.user.presence.status === "dnd") presence = "Ne pas déranger"
        if(member.user.presence.status === "offline") presence = "Hors ligne"
        if(member.user.bot === true) bot = "Oui"
        if(member.user.bot === false) bot = "Non"
        let embed = new MessageEmbed()
            .setTitle(`Informations de ${member.user.username}`)
            .addField(`Pseudo`, member.user.username, true)
            .addField(`Présence`, presence, true)
            .addField(`Bot`, bot, true)
            .setFooter(member.user.tag, member.user.avatarURL())
            .setTimestamp(Date.now())
        message.channel.send(embed)
        await message.delete()
    }

    if(cmd === 'help'){
        let argsSynthaxe = '`<>` : obligatoire • `[]` : facultatif'
        if(args[0] === 'fun'){
            let embed = new MessageEmbed()
                .setTitle(`Aide : fun`)
                .setDescription(argsSynthaxe)
                .addField(`\`${prefix}say <message>\``, `Permet de faire « parler » le bot (votre message sera dans un embed).`, true)
                .setFooter(client.user.username, client.user.avatarURL())
                .setTimestamp(Date.now())
            message.channel.send(embed)
            await message.delete()
        }else if(args[0] === 'utils'){
            let embed = new MessageEmbed()
                .setTitle(`Aide : utilité`)
                .setDescription(argsSynthaxe)
                .addField(`\`${prefix}bot\``, `Permet d'avoir des informations sur le bot.`, true)
                .addField(`\`${prefix}user [utilisateur]\``, `Permet d'avoir des informations sur un utilisateur.`, true)
                .setFooter(client.user.username, client.user.avatarURL())
                .setTimestamp(Date.now())
            message.channel.send(embed)
            await message.delete()
        }else{
            let embed = new MessageEmbed()
                .setTitle(`Aide`)
                .addField(`Fun`, `\`${prefix}help fun\``, true)
                .addField(`Utilité`, `\`${prefix}help utils\``, true)
                .addField(`Modération`, `\`${prefix}help mod\``, true)
                .addField(`Administration`, `\`${prefix}help admin\``, true)
                .setFooter(client.user.username, client.user.avatarURL())
                .setTimestamp(Date.now())
            message.channel.send(embed)
            await message.delete()
        }
    }
})

client.login(process.env.TOKEN)

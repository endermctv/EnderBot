require('dotenv').config()
import './server'
import {
    Client,
    MessageEmbed,
    version
} from 'discord.js'

const client = new Client()
const prefix = '/'

client.on('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}.`)
    client.user.setActivity(`${client.users.cache.size - 1} membres`, {type: 'WATCHING'})
})

// client.on('guildMemberAdd', member => {
//     const channel = member.guild.channels.cache.find(ch => ch.id === '739784345505759292')
//     channel.send(`Welcome to the server, ${member}`)
// })

client.on('message', async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase()

    function error(msg: string){
        let embed = new MessageEmbed()
            .setTitle(`Une erreur est survenue...`)
            .setDescription(msg)
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp(Date.now())
        message.channel.send(embed)
    }

    if(cmd === 'say'){
        let embed = new MessageEmbed()
            .setDescription(args.join(` `))
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp(Date.now())
        message.channel.send(embed)
        await message.delete()
    }

    if(cmd === 'website'){
        let embed = new MessageEmbed()
            .setTitle(`Accéder au site web`)
            .setDescription(`⚠ Le site web est encore en développement, merci de ne pas faire de remarques à ce sujet !\n\nAccès : http://localhost:3000`)
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp(Date.now())
        message.channel.send(embed)
        await message.delete()
    }

    if(cmd === 'bot-info'){
        let embed = new MessageEmbed()
            .setTitle(`Informations du bot`)
            .addField(`Développeur`, `<@587570961939955713>`, true)
            //.addField(`Pseudo`, client.user.username, true)
            .addField(`Language de programmation`, `[TypeScript](https://www.typescriptlang.org/) • [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)`, true)
            .addField(`Version de discord.js`, version, true)
            .addField(`Version de Node.js`, process.version, true)
            .setFooter(client.user.username, client.user.avatarURL())
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
                .addField(`\`${prefix}bot-info\``, `Permet d'avoir des informations sur le bot.`, true)
                .addField(`\`${prefix}website\``, `Permet d'avoir l'url pour accéder au site (en développement).`, true)
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

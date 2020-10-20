require('dotenv').config()
import './server'
import './config'
import {
    Client,
    MessageEmbed
} from 'discord.js'

const client = new Client()

client.on('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}.`)
    client.user.setActivity(`des gens`, {type: 'WATCHING'})
})

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

    if(cmd === 'dashboard'){
        if(!message.member.hasPermission('ADMINISTRATOR')) message.channel.send('test');

        let embed = new MessageEmbed()
            .setTitle(`Accéder au tableau de bord`)
            .setDescription(`Pour accéder au tableau de bord, merci de [cliquer ici](http://localhost:3000).\nCe message va automatiquement se supprimer après 10 secondes.`)
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp(Date.now())
        message.channel.send(embed).then(m => m.delete({timeout:10000}))
        await message.delete()
    }
})

client.login(process.env.TOKEN)

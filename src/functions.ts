import {
    Client,
    MessageEmbed
} from 'discord.js'

const client = new Client()

function error(msg: string){
    let message: { channel: { send: (arg0: MessageEmbed) => void } }
    let embed = new MessageEmbed()
        .setTitle(`Une erreur est survenue...`)
        .setDescription(msg)
        .setFooter(client.user.username, client.user.avatarURL())
        .setTimestamp(Date.now())
    message.channel.send(embed)
}
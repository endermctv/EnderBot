require('dotenv').config()
require('./server')
const { Client, MessageEmbed } = require('discord.js')
const express = require('express')
const { prefix } = require('./config')

const client = new Client()

client.on('ready', () => {
    console.log(`Statut : prêt.\nConnecté en tant que ${client.user.tag}.`)
    client.user.setActivity(`le ${prefix}help`, {type:'WATCHING'})
})

client.on('message', async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase()

    if(cmd === 'say'){
        message.channel.send(args.join(''))
        await message.delete()
    }

    if(cmd === 'dashboard'){
        if(!message.member.hasPermission('ADMINISTRATOR')) message.channel.send('test');
        const embed = new MessageEmbed()
            .setTitle(`Accéder au tableau de bord`)
            .setDescription(`Pour accéder au tableau de bord, merci de [cliquer ici](http://localhost:3000).\nCe message va automatiquement se supprimer après 10 secondes.`)
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp(Date.now())
        message.channel.send(embed).then(m => m.delete({timeout:10000}))
        await message.delete()
    }
})

client.login(process.env.TOKEN)

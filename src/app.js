import { Client } from 'discord.js'
import 'config.json'
const client = new Client()

client.login(process.env.TOKEN)
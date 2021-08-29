const fs = require('fs')
const { Client, Collection, Intents } = require('discord.js')
require('dotenv').config()
const logger = require('./logger.js')

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

// loading of events
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'))

for (const file of eventFiles) {
	const event = require(`./events/${file}`)
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args))
	} else {
		client.on(event.name, (...args) => event.execute(...args))
	}
}

// loading of commands

client.commands = new Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
	const command = require(`./commands/${file}`)
	client.commands.set(command.data.name, command)
}

// command handling

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return

	const command = client.commands.get(interaction.commandName)

	if (!command) return

	try {
		await command.execute(interaction)
	} catch (error) {
		console.error(error)
		const id = logger.writeError('commands', error)
		await interaction.reply({ content: 'Sorry, we ran into an error! (ID: ' + id + ')', ephemeral: true })
	}
})

client.login(process.env.TOKEN)

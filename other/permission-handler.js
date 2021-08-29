const fs = require('fs')
require('dotenv').config()

module.exports = {
	async deployPermissions(client) {
		const guild = client.guilds.cache.find((g) => g.id === process.env.GUILD_ID)
		if (guild == null) {
			console.log('could not setup command permissions as guild ID not set in .env')
			return
		}

		const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

		for (const file of commandFiles) {
			const commandFile = require(`../commands/${file}`)
			const commandName = file.replace('.js', '')
			const command = guild.commands.cache.find(cmd => cmd.name === commandName)

			if (!command.defaultPermission) {
				const roles = commandFile.roles
				const permissions = []

				for (const role of roles) {
					permissions.push(
						{
							id: role,
							type: 'ROLE',
							permission: true,
						})
				}

				command.permissions.set({ permissions })
			}
		}
	},
}
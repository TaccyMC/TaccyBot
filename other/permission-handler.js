require('dotenv').config()

module.exports = {
	async deployPermissions(client) {
		const guild = client.guilds.cache.find((g) => g.id === process.env.GUILD_ID)
		if (guild == null) {
			console.log('could not setup command permissions as guild ID not set in .env')
			return
		}

		guild.commands.cache.forEach(command => {
			console.log(command.name, command.defaultPermission)
			if (!command.defaultPermission) {
				console.log('2')
				const permissions = [
					{
						id: '403366964669579266',
						type: 'USER',
						permission: true,
					},
				]
				command.permissions.set({ permissions })
			}
		})
	},
}
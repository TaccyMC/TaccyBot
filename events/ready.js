const permission_handler = require('../other/permission-handler.js')

module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		const guild = client.guilds.cache.find((g) => g.id === process.env.GUILD_ID)
		await guild.commands.fetch()
		console.log(`Logged in as ${client.user.tag}`)
		await permission_handler.deployPermissions(client)
	},
}
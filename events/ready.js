const permission_handler = require('../other/permission-handler.js')

module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		const guild = client.guilds.cache.find((g) => g.id === process.env.GUILD_ID)
		await guild.commands.fetch()
		console.log(`Logged in as ${client.user.tag}`)
		client.user.setActivity('twitch.tv/ThumbTac_', { type: 'WATCHING' })
		await permission_handler.deployPermissions(client)
		process.send('ready')
	},
}
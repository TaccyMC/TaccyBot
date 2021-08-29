const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('error')
		.setDescription('Throws an error'),
	async execute(interaction) {
		await interaction.reply('Loser!')
		await interaction.reply('ur bad')
	},
}
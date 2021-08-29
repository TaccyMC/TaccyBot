const { getEmbedFromName } = require('../commands/template.js')

module.exports = {
	async execute(interaction) {
		const embed = getEmbedFromName('rules')
		await interaction.channel.send({ embeds: [embed] })
	},
}
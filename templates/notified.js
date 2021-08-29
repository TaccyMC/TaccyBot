const { getEmbedFromName } = require('../commands/template.js')
const { MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
	async execute(interaction) {
		const embed = getEmbedFromName('notified')
		const buttons = new MessageActionRow()
			.addComponents(
				new MessageButton().setCustomId('notified-enable').setLabel('Enable').setStyle('PRIMARY'),
				new MessageButton().setCustomId('notified-disable').setLabel('Disable').setStyle('SECONDARY'),
			)
		await interaction.channel.send({ embeds: [embed], components: [buttons] })
	},
}
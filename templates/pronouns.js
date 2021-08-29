const { getEmbedFromName } = require('../commands/template.js')
const { MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
	async execute(interaction) {
		const embed = getEmbedFromName('pronouns')
		const buttons = new MessageActionRow()
			.addComponents(
				new MessageButton().setCustomId('he-him').setLabel('He/Him').setStyle('SUCCESS'),
				new MessageButton().setCustomId('she-her').setLabel('She/Her').setStyle('SUCCESS'),
				new MessageButton().setCustomId('they-their').setLabel('They/Them').setStyle('SUCCESS'),
				new MessageButton().setCustomId('ask-me').setLabel('Ask Me').setStyle('SUCCESS'),
			)
		await interaction.channel.send({ embeds: [embed], components: [buttons] })
	},
}
const { getEmbedFromName } = require('../commands/template.js')
const { MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
	async execute(interaction) {
		const embed = getEmbedFromName('pronouns')
		const buttons = new MessageActionRow()
			.addComponents(
				new MessageButton().setCustomId('pronoun-he').setLabel('He/Him').setStyle('SUCCESS'),
				new MessageButton().setCustomId('pronoun-she').setLabel('She/Her').setStyle('SUCCESS'),
				new MessageButton().setCustomId('pronoun-they').setLabel('They/Them').setStyle('SUCCESS'),
				new MessageButton().setCustomId('pronoun-ask').setLabel('Ask Me').setStyle('SUCCESS'),
				new MessageButton().setCustomId('pronoun-clear').setLabel('Clear').setStyle('SECONDARY'),
			)
		await interaction.channel.send({ embeds: [embed], components: [buttons] })
	},
}
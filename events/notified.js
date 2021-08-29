const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		if (!interaction.isButton()) return
		// todo: source from config
		const notifiedRole = interaction.guild.roles.cache.find(role => role.name == 'Notified')
		if (interaction.customId === 'notified-enable') {
			interaction.member.roles.add(notifiedRole)
			const embed = new MessageEmbed()
				.setColor('#5865f2')
				.setTitle('Role Added')
				.setDescription('You\'ve been given the notified role!')

			interaction.reply({ embeds: [embed], ephemeral: true })
		} else if (interaction.customId === 'notified-disable') {
			interaction.member.roles.remove(notifiedRole)
			const embed = new MessageEmbed()
				.setColor('#4f545c')
				.setTitle('Role Removed')
				.setDescription('The notified role has been removed.')

			interaction.reply({ embeds: [embed], ephemeral: true })
		}
	},
}
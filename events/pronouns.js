const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		if (!interaction.isButton()) return
		// todo: source from config
		const heRole = interaction.guild.roles.cache.find(role => role.name == 'He/Him')
		const sheRole = interaction.guild.roles.cache.find(role => role.name == 'She/Her')
		const theyRole = interaction.guild.roles.cache.find(role => role.name == 'They/Them')
		const askRole = interaction.guild.roles.cache.find(role => role.name == 'Ask Me')

		if (interaction.customId === 'pronoun-he') {
			interaction.member.roles.add(heRole)
			const embed = new MessageEmbed()
				.setColor('#3ba55d')
				.setTitle('Role Added')
				.setDescription('You\'ve been given the `He/Him` role!')

			interaction.reply({ embeds: [embed], ephemeral: true })
		} else if (interaction.customId === 'pronoun-she') {
			interaction.member.roles.add(sheRole)
			const embed = new MessageEmbed()
				.setColor('#3ba55d')
				.setTitle('Role Added')
				.setDescription('You\'ve been given the `She/Her` role!')

			interaction.reply({ embeds: [embed], ephemeral: true })
		} else if (interaction.customId === 'pronoun-they') {
			interaction.member.roles.add(theyRole)
			const embed = new MessageEmbed()
				.setColor('#3ba55d')
				.setTitle('Role Added')
				.setDescription('You\'ve been given the `They/Them` role!')

			interaction.reply({ embeds: [embed], ephemeral: true })
		} else if (interaction.customId === 'pronoun-ask') {
			interaction.member.roles.add(askRole)
			const embed = new MessageEmbed()
				.setColor('#3ba55d')
				.setTitle('Role Added')
				.setDescription('You\'ve been given the `Ask Me` role!')

			interaction.reply({ embeds: [embed], ephemeral: true })
		} else if (interaction.customId === 'pronoun-clear') {
			interaction.member.roles.remove(heRole)
			interaction.member.roles.remove(sheRole)
			interaction.member.roles.remove(theyRole)
			interaction.member.roles.remove(askRole)
			const embed = new MessageEmbed()
				.setColor('#4f545c')
				.setTitle('Role Added')
				.setDescription('Your pronoun roles have been removed.')

			interaction.reply({ embeds: [embed], ephemeral: true })
		}
	},
}
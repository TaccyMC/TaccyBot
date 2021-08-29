const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('Deletes messages in a channel')
		.setDefaultPermission(false)
		.addIntegerOption(option =>
			option.setName('messages')
				.setDescription('The amount of messages to clear')
				.setRequired(true))
		.addChannelOption(option =>
			option.setName('channel')
				.setDescription('The channel to clear messages from')
				.setRequired(false)),
	roles: ['881529341534691338'],
	async execute(interaction) {
		const messages = interaction.options.getInteger('messages')
		let channel = interaction.options.getChannel('channel')
		if (channel == null) {
			channel = interaction.channel
		}
		channel.bulkDelete(messages)

		const content = 'Deleted ' + messages + ((messages > 1) ? ' messages' : ' message')

		const embed = new MessageEmbed()
			.setColor('#3ba55d')
			.setTitle('Success')
			.setDescription(content)

		await interaction.reply({ embeds: [embed], ephemeral: true })
	},
}
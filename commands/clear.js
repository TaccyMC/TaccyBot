const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('Deletes messages in a channel')
		.addIntegerOption(option =>
			option.setName('messages')
				.setDescription('The amount of messages to clear')
				.setRequired(true))
		.addChannelOption(option =>
			option.setName('channel')
				.setDescription('The channel to clear messages from')
				.setRequired(false)),
	async execute(interaction) {
		const messages = interaction.options.getInteger('messages')
		let channel = interaction.options.getChannel('channel')
		if (channel == null) {
			channel = interaction.channel
		}
		channel.bulkDelete(messages)

		const content = 'Deleted ' + messages + ((messages > 1) ? ' messages' : ' message')

		const embed = new MessageEmbed()
			.setColor('#62BD35')
			.setTitle('Success')
			.setDescription(content)
			.setTimestamp()

		await interaction.reply({ embeds: [embed], ephemeral: true })
	},
}
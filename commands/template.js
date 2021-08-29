const fs = require('fs')
const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

const templates = []

const templateFiles = fs.readdirSync('./templates').filter(file => file.endsWith('.js'))
templateFiles.forEach(file => {
	const templateName = file.replace('.js', '')
	templates.push([templateName, templateName])
})

module.exports = {
	data: new SlashCommandBuilder()
		.setName('template')
		.setDescription('Sends a template in the current channel')
		.setDefaultPermission(false)
		.addStringOption(option =>
			option.setName('template')
				.setDescription('The template you would like to execute')
				.setRequired(true)
				.addChoices(templates),
		),
	roles: ['881529341534691338'],
	async execute(interaction) {
		const name = interaction.options.getString('template')
		const template = getTemplateFromName(name)
		if (template == null) {
			return await interaction.reply('That template couldn\'t be found!')
		}
		const embed = new MessageEmbed()
			.setColor('#0ABE12')
			.setTitle('Executed template')
			.setDescription(`The template \`${name}.js\` has been executed!`)
		await interaction.reply({ embeds: [embed], ephemeral: true })
		await template.execute(interaction)
	},
	getEmbedFromName,
}

function getTemplateFromName(name) {
	const path = `./templates/${name}.js`
	if (fs.existsSync(path)) {
		const template = require(`../templates/${name}.js`)
		return template
	}
	return null
}

function getEmbedFromName(name) {
	const data = fs.readFileSync('./templates/embeds/' + name + '.json', { encoding:'utf8', flag:'r' });
	return JSON.parse(data)
}
const fs = require('fs')

function writeError(prefix, error) {
	const id = getRandom(1000, 9999)
	const name = prefix + '_' + id
	writeTextFile('./logs/errors/', name + id, error)
	return id
}

function writeTextFile(directory, name, content) {
	fs.writeFile(directory + name + '.txt', content, (error) => {
		console.log(error)
	})
}

function getRandom(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min) + min)
}

module.exports = {
	writeError,
}
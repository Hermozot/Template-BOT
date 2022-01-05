const { readdirSync } = require('fs')


const commandFiles = readdirSync('./utils').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./utils/${file}`);
	client.commands.set(command.name, command);
}
const { readdirSync } = require('fs')


const eventFiles = readdirSync('./event').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./event/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(client, ...args));
	} else {
		client.on(event.name, (...args) => event.execute(client, ...args));
	}
}
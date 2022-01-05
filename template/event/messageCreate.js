const { prefix } = require('../config.json');

module.exports = {
    name: 'messageCreate',
    async execute(client, message,) {

        if (message.author.bot) return
        if (message.channel.type == "dm") return;

        const args = message.content.slice(prefix.length).trim().split(' ')
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName) || client.commands.find(command => command.aliases && command.aliases.includes(commandName));
        if (!command) return

        if (!message.content.startsWith(prefix) || message.author.bot) return;

        try {
            command.execute(client, message, args);
        } catch (error) {
            message.channel.send('Une erreur est survenue.')
            console.log('[MESSAGE ERROR] Une erreur est survenue dans le code.'.red)

        };
    }
}
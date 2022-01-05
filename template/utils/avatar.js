const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'avatar',

    async execute(client, message, args){
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!member){
            const embed_0_member = new MessageEmbed()
            .setTitle('Avatar de ' + message.author.username)
            .setImage(message.author.displayAvatarURL({ dynamic: true, size: 4096}))
            .setColor(client.color)
            message.reply({ embeds: [embed_0_member] })
            return
        }

        if(member){
            const embed_1_member = new MessageEmbed()
            .setTitle('Avatar de ' + member.user.username)
            .setImage(member.user.displayAvatarURL({ dynamic: true, size: 4096}))
            .setColor(client.color)
            message.reply({ embeds: [embed_1_member] })
            return
        }
    }
}
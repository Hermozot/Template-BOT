const { CommandInteraction,MessageEmbed } = require('discord.js')
const colors = require('colors')
const moment = require('moment')

module.exports = {
    name: 'userinfo',
    aliases: ['si'],
/**
 * 
 * @param {CommandInteraction} Interaction 
 */

    execute(Interaction) {
        const Target = message.mentions.user.first() || message.author;
        const Member = member.guild.cache.get(Target.id)

        let embed = new MessageEmbed()
            .setAuthor('${Target.username}', Target.displayAvatarURL({ dynamic: true }))
            .setThumbnail(Target.displayAvatarURL({ dynamic: true }))
            .setTitle(`UserInfo de + ${Target.username}`)
            .setDescription(`**Informations sur l'utilistateur** : \n **ID**: + ${Target.id} \n **Rôles**: ${Member.roles.cache.map(r => r).join(' ').replace("@everyone", " ")}`)
            .addField('**A rejoins le serveur depuis**: `${moment(Member.joinedAt).format("MMMM Do YYYY, h:mm:ss a")}\n**-** ${moment(Member.joinedAt).startOf("day").fromNow} `')
            .addField('**Es sur discord depuis**: `${moment(Target.createdAt).format("MMMM Do YYYY, h:mm:ss a")}\n**-** ${moment(Target.createdAt).startOf("day").fromNow} `')    
            Interaction.reply({ embeds: [embed] })
    }
}
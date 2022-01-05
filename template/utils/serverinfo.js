const { CommandInteraction,MessageEmbed } = require('discord.js')
const colors = require('colors')

module.exports = {
    name: 'serverinfo',
    aliases: ['si'],
/**
 * 
 * @param {CommandInteraction} Interaction 
 */

    execute(Interaction) {
        const { Guild } = intraction;

        const  { createdTimestamp, ownerID, description, members, membercount, channel, emojis, stickers, preniumSince} = Guild;

        let Embed = new MessageEmbed ()
        .setColor('Purple')
        .setAuthor(guild.name, guild.IconURL({ dynamic: true }))
        .setThumbnail(guild.IconURL({ dynamic: true }))
        .addFiedls(
            {
                name: "GENERAL",
                value: 
                `
                Nom du serveur: ${guild.name},
                A été crée: <t:${parseInt(createdTimestamp / 1000 )}:R>,
                Le créateur est: <@${ownerID}>,

                Description: ${description}
                `
            },
            {
                name: "🎭 | UTILISATEURS",
                value:
                `
                - Nombre de Membres: ${members.cache.filter((m) => !m.user.bot).size}
                - Nombre de bots : ${members.cache.filter((m) => !m.user.bot).size}
                
                Total: ${membercount}
                `
            },
            {
                name: "📙 | CHANNELS",
                value: 
                `
                -Nombre de Salons Textuels: ${channel.cache.filter((c) => c.type === "GUILD_TEXT")}.size
                -Nombre de Salons Vocaux: ${channel.cache.filter((c) => c.type === "GUILD_VOICE")}.size
                -Nombre de Fils : ${channel.cache.filter((c) => c.type === "GUILD_NEWS_THREAD" && "GUILD_PUBLIC_THREAD"  && "GUILD_PRIVATE_THREAD")}.size
                -Nombre de catégories: ${channel.cache.filter((c) => c.type === "GUILD_CATEGORY")}.size
                -Nombre de salons deconférences: ${channel.cache.filter((c) => c.type === "GUILD_STAGE_VOICE")}.size
                -Nombre de salons d'annonces: ${channel.cache.filter((c) => c.type === "GUILD_NEWS")}.size


                Total: ${channel.cache.size}
                `
            },
            {
                name: "😁 | Émojis",
                value: 
                `
                - Émojis animés: ${emojis.cache.filter((e) => e.animated)}.size
                - Émojis statiques: ${emojis.cache.filter((e) => e.animated)}.size
                - Autocollants: ${stickers.cache.size}
                
                Total: ${stickers.cache.size + emojis.cache.size}
                `
            },
            {
                name: "🎁 | Nitro Stats",
                value: 
                `
                - Rôles : ${guild.role.cache.size}
                - Tier de boost : ${guild.preniumTier.replace("TIER_", "")}
                - Boosts sur le serveur: ${guild.preniumSubscriptionCount}
                - Boosters: ${members.cache.filter((m) => preniumSince).size}
                `
            }
        )
        
        .setFooter("Dernier contrôle")
        .setTimestamp()
        Interaction.reply({ embeds: [Embed] })
    }
}
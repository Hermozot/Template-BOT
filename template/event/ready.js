module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(`[READY] Je suis connecter à ${client.user.username}`.blue);
        try { } catch (error) {
            console.log(`[READY ERROR] Je n'ai pas réussi a me connecter a ${client.user.username}`.red)
        }

        var compteurStatus = 1
        setInterval(async () => {
            status = [`๖̶ζ͜͡CB Mod`,
                `By ⁶⁶⁷Hermozo#0667`
            ]
            compteurStatus = (compteurStatus + 1) % (status.length);
            client.user.setPresence({
                activities: [{
                    name: `${status[compteurStatus]}`,
                    type: "STREAMING",
                    url: "https://www.twitch.tv/hermozo_"
                }],
                status: "idle"
            })
        }, 5000);
    }
}
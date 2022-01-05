const { readdirSync } = require('fs')
const { colors } = require('colors')

const { connect } = require('mongoose');
const { dbconnect } = require('./config.json')

connect(dbconnect, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => {
	console.log('[DATABASE] Je suis co à mongoDB'.green)
}).catch(() => {
	console.log('[DATABASE] Impossible de se co à mongoDB'.red)
})

client.commands = new Collection()
client.a = require('./commande/shemas')
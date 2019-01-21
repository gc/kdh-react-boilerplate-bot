const { Client } = require('klasa');

const { token, clientSecret, clientID } = require('../config');

Client.use(require('klasa-dashboard-hooks'));

class Bot extends Client {

	constructor(options) {
		super(options);
		this.options.clientSecret = clientSecret;
		this.options.clientID = clientID;
	}

}

const botClient = new Bot({
	fetchAllMembers: false,
	// messageCacheMaxSize: 50,
	messageCacheLifetime: 600,
	messageSweepInterval: 3600,
	/* Klasa options */
	createPiecesFolders: false,
	providers: { default: 'json' },
	/* Dashboard */
	dashboardHooks: { apiPrefix: '/', port: '80' }
});

botClient.login(token);

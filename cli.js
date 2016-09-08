#!/usr/bin/env node
'use strict';
const meow = require('meow');
const wifiPassword = require('wifi-password');

const cli = meow(`
	Usage
	  $ wifi-password [network-name]

	Example
	  $ wifi-password
	  unicorns
	  $ wifi-password foo-network
	  foosecretpassword
`);

wifiPassword(cli.input[0])
	.then(console.log)
	.catch(err => {
		if (err.message === `Your network doesn't have a password`) {
			console.error(err.message);
			process.exit(1);
		}

		throw err;
	});

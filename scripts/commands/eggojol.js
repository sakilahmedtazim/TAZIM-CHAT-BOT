const fs = require("fs");
module.exports.config = {
	name: "gojol",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "gojol",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("amogus")==0 || event.body.indexOf("গজল")==0 || event.body.indexOf("Gojol")==0 || event.body.indexOf("gojol")==0) {
		var msg = {
				body: "🥰❤️🥀\n\nআমার বস KAWSAR এর পছন্দের গজল 🥰\n\nনামঃ মুজে কুফা ওয়লো\n\nভাষাঃ উর্দু \n\n------------------------------------------------------------",
				attachment: fs.createReadStream(__dirname + `/noprefix/mujhekufa.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
const fs = require("fs");
module.exports.config = {
	name: "Kawsar",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "kawsar",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Kawsar")==0 || event.body.indexOf("কাওসার")==0 || event.body.indexOf("কাউছার")==0 || event.body.indexOf("@Mohammad Kawsar")==0) {
		var msg = {
				body: "যেকোনো প্রয়োজনে আমার বস এর সাথে যোগাযোগ করুন👇https://www.facebook.com/KAWSAR.XD1",
				attachment: fs.createReadStream(__dirname + `/noprefix/kawsar221.jpg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
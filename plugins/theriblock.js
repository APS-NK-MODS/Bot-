/* codded by raashii
use this git under copyright
dont change credit
*/

const Rashi = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
const Language = require('../language');
const Lang = Language.getString('evaluators');
const SLang = Language.getString('conventer');
const NLang = Language.getString('scrapers');
const googleTTS = require('google-translate-tts');
const Heroku = require('heroku-client');
const heroku = new Heroku({
	token: Config.HEROKU.API_KEY
});

let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

var rashi_desc = ''
var OFF = ''
var ON = ''

if (Config.LANG == 'EN') {

  rashi_desc = 'change theri block mode'
  OFF = '๐๐ก๐๐ซ๐ข ๐๐ฅ๐จ๐๐ค ๐๐๐๐ญ๐ฎ๐ซ๐ ๐ฌ๐ฎ๐๐๐๐ฌ๐ฌ๐๐ฎ๐ฅ๐ฅ๐ฒ ๐ฌ๐ก๐ฎ๐ญ๐๐จ๐ฐ๐ง๐๐ \n          ๐ฉ๐ฅ๐๐๐ฌ๐ ๐ฐ๐๐ข๐ญ ๐๐๐ฐ ๐ฆ๐ข๐ง๐ฎ๐ญ๐ ๐งโโ๏ธ'
  ON = '๐๐ก๐๐ซ๐ข ๐๐ฅ๐จ๐๐ค ๐๐๐๐ญ๐ฎ๐ซ๐ ๐ฌ๐ฎ๐๐๐๐ฌ๐ฌ๐๐ฎ๐ฅ๐ฅ๐ฒ ๐จ๐ฉ๐๐ง๐๐ \n          ๐ฉ๐ฅ๐๐๐ฌ๐ ๐ฐ๐๐ข๐ญ ๐๐๐ฐ ๐ฆ๐ข๐ง๐ฎ๐ญ๐ ๐งโโ๏ธ'
}

if (Config.LANG == 'ML') {

  rashi_desc = 'theri block mode เดฎเดพเดฑเตเดฑเดพเตป'
  OFF = '*Theri Block Mode OFF เดเดเตเดเดฟ๐*'
  ON = '*Theri Block Mode ON เดเดเตเดเดฟ๐*'
}

Rashi.addCommand({ pattern: 'theriblock ?(.*)', fromMe: true, desc: rashi_desc, usage: '.theriblock on / off' }, (async (message, match) => {
  if (match[1] == 'off') {
    await heroku.patch(baseURI + '/config-vars', {
      body: {
                        ['THERI_BLOCK']: 'false'
      }
    });
    await message.sendMessage(OFF)
  } else if (match[1] == 'on') {
    await heroku.patch(baseURI + '/config-vars', {
      body: {
                        ['THERI_BLOCK']: 'true'
      }
    });
    await message.sendMessage(ON)
  }
}));


var theri_var = ''
async function theri() {
	await heroku.get(baseURI + '/config-vars').then(async (vars) => {
		theri_var = vars.THERI_BLOCK
	});
}
theri()
var ldc = ''
if (Config.LANG == 'EN') rashi = '*Theri Detected! mone ee theri vilich block akkanamothalali paranna alla appo pinne , oke bye \n\n ๐๐*'
if (Config.LANG == 'ML') rashi = 'เดจเต เดคเตเดฑเดฟ เดตเดฟเดณเดฟเดเตเดเต เดเดพเตป เดจเดฟเดจเตเดจเต เดฌเตเดฒเตเดเตเดเต เดเดเตเดเดฟ เดเดคเตเดฐเต เดเดณเตเดณเต'
Rashi.addCommand({ on: 'text', fromMe: false, onlyPm: true }, (async (message, match) => {
	if (theri_var == 'true' && message.jid !== '9082891698-1616356915@g.us') {
		let regex1 = new RegExp('myr')
		let regex2 = new RegExp('Myr')
  	let regex3 = new RegExp('poori')
  	let regex4 = new RegExp('Poori')
  	let regex5 = new RegExp('Myre')
  	let regex6 = new RegExp('myre')
  	let regex7 = new RegExp('meir')
  	let regex8 = new RegExp('thayoli')
  	let regex9 = new RegExp('Thayoli')
  	let regex10 = new RegExp('Thaayoli')
    let regex11 = new RegExp('Thayolli')
    let regex12 = new RegExp('Thaayolli')
    let regex13 = new RegExp('Thayyoli')
  	
		if (regex1.test(message.message)) {
			await message.client.sendMessage(message.jid, rashi, MessageType.text, { quoted: message.data })
			await message.client.blockUser(message.jid, "add");
		}
		else if (regex2.test(message.message)) {
			await message.client.sendMessage(message.jid, rashi, MessageType.text, { quoted: message.data })
			await message.client.blockUser(message.jid, "add");
		}
			else if (regex3.test(message.message)) {
			await message.client.sendMessage(message.jid, rashi, MessageType.text, { quoted: message.data })
			await message.client.blockUser(message.jid, "add");
		}
			else if (regex4.test(message.message)) {
				await message.client.sendMessage(message.jid, rashi, MessageType.text, { quoted: message.data })
				await message.client.blockUser(message.jid, "add");
			}
				else if (regex5.test(message.message)) {
					await message.client.sendMessage(message.jid, rashi, MessageType.text, { quoted: message.data })
					await message.client.blockUser(message.jid, "add");
				}
		else if (regex6.test(message.message)) {
			await message.client.sendMessage(message.jid, rashi, MessageType.text, { quoted: message.data })
			await message.client.blockUser(message.jid, "add");
		}
			else if (regex7.test(message.message)) {
				await message.client.sendMessage(message.jid, rashi, MessageType.text, { quoted: message.data })
				await message.client.blockUser(message.jid, "add");
			}
				else if (regex8.test(message.message)) {
					await message.client.sendMessage(message.jid, rashi, MessageType.text, { quoted: message.data })
					await message.client.blockUser(message.jid, "add");
				}
					else if (regex9.test(message.message)) {
						await message.client.sendMessage(message.jid, rashi, MessageType.text, { quoted: message.data })
						await message.client.blockUser(message.jid, "add");
					}
						else if (regex10.test(message.message)) {
							await message.client.sendMessage(message.jid, rashi, MessageType.text, { quoted: message.data })
							await message.client.blockUser(message.jid, "add");
						}
							else if (regex11.test(message.message)) {
								await message.client.sendMessage(message.jid, rashi, MessageType.text, { quoted: message.data })
								await message.client.blockUser(message.jid, "add");
							}
								else if (regex12.test(message.message)) {
									await message.client.sendMessage(message.jid, rashi, MessageType.text, { quoted: message.data })
									await message.client.blockUser(message.jid, "add");
								}
									else if (regex13.test(message.message)) {
										await message.client.sendMessage(message.jid, rashi, MessageType.text, { quoted: message.data })
										await message.client.blockUser(message.jid, "add");
									}
									
	}
}));

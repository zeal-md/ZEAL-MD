/* Copyright (C) 2022 Sourav KL11.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
ZEAL-MD - zeal
*/
const {Module} = require('../main')
const {getString} = require('./misc/lang');
const {readFileSync} = require('fs');
const {saveMessage} = require('./misc/saveMessage');
const Lang = getString('group');
Module({pattern: 'tag ?(.*)',use: 'group', fromMe: true, desc: Lang.TAGALL_DESC}, (async (message, match) => {
if (match[1] === "all" || !message.reply_message) return;
var target = message.jid
if (match[1] && /[0-9]+(-[0-9]+|)(@g.us|@s.whatsapp.net)/g.test(match[1])) target = [...match[1].match(/[0-9]+(-[0-9]+|)(@g.us|@s.whatsapp.net)/g)][0];
var group = await message.client.groupMetadata(target)
var jids = [];
if (match[1].includes('admin')){
        var admins = group.participants.filter(v => v.admin !== null).map(x => x.id);
        admins.map(async (user) => {
            jids.push(user.replace('c.us', 's.whatsapp.net'));
        });   
} else {
group.participants.map(async(user) => {
jids.push(user.id.replace('c.us', 's.whatsapp.net'));});
}
await message.forwardMessage(target,message.quoted,{detectLinks: true,contextInfo: {mentionedJid: jids}});
}))
Module({pattern: 'forward ?(.*)',use: 'utility', fromMe: true, desc: "Forwards message"}, (async (message, match) => {
    if (!message.reply_message) return await message.sendReply("*Reply to a message*\n*Ex: .forward jid jid ...*")
    let Jids = [...match[1]?.match(/[0-9]+(-[0-9]+|)(@g.us|@s.whatsapp.net)/g)] || [message.jid]
        for (let jid of Jids) {
      await message.forwardMessage(jid, message.quoted,{detectLinks: true});
    }
}));
Module({pattern: 'send ?(.*)',use: 'utility', fromMe: true, desc: "Sends message"}, (async (message, match) => {
    if (!message.reply_message) return await message.sendReply("*Reply to a message*\n*Ex: .send jid jid ...*")
     if (!match[1]) match[1] = message.jid
    let Jids = [...match[1]?.match(/[0-9]+(-[0-9]+|)(@g.us|@s.whatsapp.net)/g)] || [message.jid];
        for (let jid of Jids) {
     await message.forwardMessage(jid, message.quoted,{contextInfo:{isForwarded: false},detectLinks: true});
    await new Promise((r) => setTimeout(r, 5000))
        }
}));

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const Path = require("path");
const Discord = require("discord.js");
const Functions = require("./functions");
const onExit_1 = require("./onExit");
const client = new Discord.Client();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
});
client.on('voiceStateUpdate', (before, after) => {
    if (before.voiceChannelID !== after.voiceChannelID) {
        let msg;
        if (!before.voiceChannelID) {
            msg = `**${after.user.username}** hat sich in Channel **${after.voiceChannel.name}** eingeloggt.`;
        }
        else if (!after.voiceChannelID) {
            msg = `**${after.user.username}** hat die Verbindung getrennt.`;
        }
        else {
            msg = `**${after.user.username}** ging von Channel **${before.voiceChannel.name}** nach **${after.voiceChannel.name}**.`;
        }
        Functions.getChannel(client, "testing").sendMessage(msg);
    }
});
client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!!');
    }
});
onExit_1.onExit(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield Functions.getChannel(client, "testing").sendMessage("Bye!");
        yield client.destroy();
        //graceful shutdown
        process.exit();
    });
});
let json = JSON.parse(fs.readFileSync(Path.join(__dirname, "../config.json"), "utf-8"));
client.login(json.token);

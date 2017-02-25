"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Functions = require("../functions");
const baseModule_1 = require("./baseModule");
class ClientTrackerModule extends baseModule_1.BaseModule {
    constructor() {
        super("ClientTracker");
    }
    load() { }
    unload() { }
    registerEvents(client) {
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
    }
}
exports.ClientTrackerModule = ClientTrackerModule;

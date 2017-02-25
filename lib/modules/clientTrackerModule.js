"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const Functions = require("../functions");
const baseModule_1 = require("./baseModule");
class ClientTrackerModule extends baseModule_1.BaseModule {
    constructor(config) {
        super("ClientTracker", config);
        this.config.modules.ClientTracker = Object.assign({ channel: "serverlog" }, config.modules.ClientTracker);
    }
    load() { }
    unload() { }
    registerEvents(client) {
        client.on('voiceStateUpdate', (before, after) => {
            if (before.voiceChannelID !== after.voiceChannelID) {
                let msg = `[${moment().format("HH:mm:ss")}] **${after.user.username}** `;
                if (!before.voiceChannelID) {
                    msg += `hat sich in Channel **${after.voiceChannel.name}** eingeloggt.`;
                }
                else if (!after.voiceChannelID) {
                    msg += `hat die Verbindung getrennt.`;
                }
                else {
                    msg += `ging von Channel **${before.voiceChannel.name}** nach **${after.voiceChannel.name}**.`;
                }
                Functions.getChannel(client, this.config.modules.ClientTracker.channel).sendMessage(msg);
            }
        });
    }
}
exports.ClientTrackerModule = ClientTrackerModule;

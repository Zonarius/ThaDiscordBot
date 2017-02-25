import * as Discord from "discord.js";
import * as Functions from "../functions";
import { BaseModule } from "./baseModule";

export class ClientTrackerModule extends BaseModule {
    constructor() {
        super("ClientTracker");
    }

    load(): void { }

    unload(): void { }

    registerEvents(client: Discord.Client): void {
        client.on('voiceStateUpdate', (before, after) => {
            if (before.voiceChannelID !== after.voiceChannelID) {
                let msg;

                if (!before.voiceChannelID) { // joined
                    msg = `**${after.user.username}** hat sich in Channel **${after.voiceChannel.name}** eingeloggt.`;
                }
                else if (!after.voiceChannelID) {   // left
                    msg = `**${after.user.username}** hat die Verbindung getrennt.`;
                }
                else { // switch
                    msg = `**${after.user.username}** ging von Channel **${before.voiceChannel.name}** nach **${after.voiceChannel.name}**.`;
                }

                Functions.getChannel(client, "testing").sendMessage(msg);
            }
        });
    }
}
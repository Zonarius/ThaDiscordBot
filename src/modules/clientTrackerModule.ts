import * as Discord from "discord.js";
import * as moment from "moment";
import * as Functions from "../functions";
import { BaseModule } from "./baseModule";

export class ClientTrackerModule extends BaseModule {
    constructor(config: Config) {
        super("ClientTracker", config);

        this.config.modules.ClientTracker =
            {
                channel: "serverlog",
                ...config.modules.ClientTracker
            }
    }

    load(): void { }

    unload(): void { }

    registerEvents(client: Discord.Client): void {
        client.on('voiceStateUpdate', (before, after) => {
            if (before.voiceChannelID !== after.voiceChannelID) {
                let msg: string = `[${moment().format("HH:mm:ss")}] **${after.user.username}** `;

                if (!before.voiceChannelID) { // joined
                    msg += `hat sich in Channel **${after.voiceChannel.name}** eingeloggt.`;
                }
                else if (!after.voiceChannelID) {   // left
                    msg += `hat die Verbindung getrennt.`;
                }
                else { // switch
                    msg += `ging von Channel **${before.voiceChannel.name}** nach **${after.voiceChannel.name}**.`;
                }

                Functions.getChannel(client, this.config.modules.ClientTracker.channel).sendMessage(msg);
            }
        });
    }
}
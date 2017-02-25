import * as fs from "fs";
import * as Path from "path";
import * as Discord from "discord.js";
import * as Functions from "./functions";
import {onExit} from "./onExit";

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
});

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

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!!');
    }
});


onExit(async function () {
    await Functions.getChannel(client, "testing").sendMessage("Bye!");
    await client.destroy();

    //graceful shutdown
    process.exit();
});

let json:Config = JSON.parse(fs.readFileSync(Path.join(__dirname, "../config.json"), "utf-8"));
client.login(json.token);
// Discord bot - connects to server, loads all modules and 
import * as fs from "fs";
import * as Path from "path";
import * as Discord from "discord.js";
import * as Functions from "./functions";
import { BaseModule } from "./modules/baseModule";
import { loadModules } from "./moduleManager";
import { onExit } from "./onExit";

const client = new Discord.Client();

loadModules(client);

client.on('debug', (info: string) => {
    console.log(`Debug: ${info}`);
});
client.on('error', (error: Error) => {
    console.log(`Error: ${error.message}`);
});
client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
});
client.on('warn', (info: string) => {
    console.log(`Warning: ${info}`);
});

onExit(async function () {
    await Functions.getChannel(client, "testing").sendMessage("Bye!");
    await client.destroy();

    //graceful shutdown
    process.exit();
});

let json: Config = JSON.parse(fs.readFileSync(Path.join(__dirname, "../config.json"), "utf-8"));
client.login(json.token);
// Discord bot - DO NOT CHANGE
import * as fs from "fs";
import * as Path from "path";
import * as Discord from "discord.js";
import * as Functions from "./functions";
import { BaseModule } from "./modules/baseModule";
import { loadModules } from "./moduleManager";
import { onExit } from "./onExit";

let config: Config;
let configPath = Path.join(__dirname, "../config.json");

if (fs.existsSync(configPath)) {
    config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
} else {
    config = {
        ...config,
        ...Functions.getEnvVars()
    };
}


if (!config.token) {
    console.log("Undefined token. Set the token in config.json or as environment variable DISCORD_TOKEN");
    process.exit(1);
}

const client = new Discord.Client();
loadModules(client, config);

if (config.debug) {
    client.on("debug", (info: string) => {
        console.log(`Debug: ${info}`);
    });
}
client.on("error", (error: Error) => {
    console.log(`Error: ${error.message}`);
});
client.on("warn", (info: string) => {
    console.log(`Warning: ${info}`);
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.username}!`);
});
onExit(async function () {
    await Functions.getChannel(client, "testing").sendMessage("Bye!");
    await client.destroy();

    // graceful shutdown
    process.exit();
});

client.login(config.token);
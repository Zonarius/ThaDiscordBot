"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Discord bot - DO NOT CHANGE
const fs = require("fs");
const Path = require("path");
const Discord = require("discord.js");
const Functions = require("./functions");
const moduleManager_1 = require("./moduleManager");
const onExit_1 = require("./onExit");
let config;
let configPath = Path.join(__dirname, "../config.json");
if (fs.existsSync(configPath)) {
    config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
}
else {
    config = __assign({}, config, Functions.getEnvVars());
}
if (!config.token) {
    console.log("Undefined token. Set the token in config.json or as environment variable DISCORD_TOKEN");
    process.exit(1);
}
const client = new Discord.Client();
moduleManager_1.loadModules(client, config);
if (config.debug) {
    client.on("debug", (info) => {
        console.log(`Debug: ${info}`);
    });
}
client.on("error", (error) => {
    console.log(`Error: ${error.message}`);
});
client.on("warn", (info) => {
    console.log(`Warning: ${info}`);
});
client.on("ready", () => {
    console.log(`Logged in as ${client.user.username}!`);
});
onExit_1.onExit(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield Functions.getChannel(client, "testing").sendMessage("Bye!");
        yield client.destroy();
        // graceful shutdown
        process.exit();
    });
});
client.login(config.token);
//# sourceMappingURL=index.js.map
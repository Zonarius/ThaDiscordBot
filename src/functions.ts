import * as Discord from "discord.js";

export function getChannel(client: Discord.Client, name: string): Discord.TextChannel {
    let channels = <Discord.Collection<string, Discord.TextChannel>>client.channels;
    return channels.find("name", name);
}

/**
 * Returns an object of all defined environment variables. Guaranteed to have no undefined values.
 */
export function getEnvVars() {
    // Set environment variables here
    let envs = {
        "token": process.env.DISCORD_TOKEN
    };

    Object.keys(envs).forEach(key => {
        if (envs[key] === undefined) {
            delete envs[key];
        }
    })
    return envs;
}
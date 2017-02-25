import * as Discord from "discord.js";

export function getChannel (client:Discord.Client, name:string) : Discord.TextChannel
{
    let channels = <Discord.Collection<string, Discord.TextChannel>> client.channels;
    return channels.find("name", "testing")
}
import * as Discord from "discord.js";

export abstract class BaseModule {
    constructor(protected name: string, protected config: Config) {
    }

    // Called when the client starts. Set variables/read files/etc. here.
    abstract load(): void;

    // Called when the client stops. Write files/etc. here.
    abstract unload(): void;

    // Called when the client starts. 
    abstract registerEvents(client: Discord.Client): void;

    /*
    // Emitted whenever a channel is created.
    client.on('channelCreate', (channel : Discord.Channel) => {
    });
    // Emitted whenever a channel is deleted.
    client.on('channelDelete', (channel : Discord.Channel) => {
    });
    // Emitted whenever the pins of a channel are updated. Due to the nature of the WebSocket event, not much information can be provided easily here - you need to manually check the pins yourself.
    client.on('channelPinsUpdate', (channel : Discord.Channel, time : Date) => {
    });
    // Emitted whenever a channel is updated - e.g. name change, topic change.
    client.on('channelUpdate', (oldChannel : Discord.Channel, newChannel : Discord.Channel) => {
    });
    // Emitted for general debugging information.
    client.on('debug', (info : string) => {
    });
    // Emitted whenever the client websocket is disconnected.
    client.on('disconnect', (event : CloseEvent) => {
    });
    // Emitted whenever a custom emoji is created in a guild.
    client.on('emojiCreate', (emoji : Discord.Emoji) => {
    });
    // Emitted whenever a custom guild emoji is deleted.
    client.on('emojiDelete', (emoji : Discord.Emoji) => {
    });
    // Emitted whenever a custom guild emoji is updated.
    client.on('emojiUpdate', (oldEmoji : Discord.Emoji, newEmoji : Discord.Emoji) => {
    });
    // Emitted whenever the Client encounters a serious connection error.
    client.on('error', (error : Error) => {
    });
    // Emitted whenever a member is banned from a guild.
    client.on('guildBanAdd', (guild : Discord.Guild, user : Discord.User) => {
    });
    // Emitted whenever a member is unbanned from a guild.
    client.on('guildBanRemove', (guild : Discord.Guild, user : Discord.User) => {
    });
    // Emitted whenever the client joins a guild.
    client.on('guildCreate', (guild : Discord.Guild) => {
    });
    // Emitted whenever a guild is deleted/left.
    client.on('guildDelete', (guild : Discord.Guild) => {
    });
    // Emitted whenever a user joins a guild.
    client.on('guildMemberAdd', (member : Discord.GuildMember) => {
    });
    // Emitted whenever a member becomes available in a large guild.
    client.on('guildMemberAvailable', (member : Discord.GuildMember) => {
    });
    // Emitted whenever a member leaves a guild, or is kicked.
    client.on('guildMemberRemove', (member : Discord.GuildMember) => {
    });
    // Emitted whenever a chunk of guild members is received (all members come from the same guild.
    client.on('guildMembersChunk', (members : Array<Discord.GuildMember>) => {
    });
    // Emitted once a guild member starts/stops speaking.
    client.on('guildMemberSpeaking', (member : Discord.GuildMember, speaking : boolean) => {
    });
    // Emitted whenever a guild member changes - i.e. new role, removed role, nickname.
    client.on('guildMemberUpdate', (oldMember : Discord.GuildMember, newMember : Discord.GuildMember) => {
    });
    // Emitted whenever a guild becomes unavailable, likely due to a server outage.
    client.on('guildUnavailable', (guild : Discord.Guild) => {
    });
    // Emitted whenever a guild is updated - e.g. name change.
    client.on('guildUpdate', (oldGuild : Discord.Guild, newGuild : Discord.Guild) => {
    });
    // Emitted whenever a message is created.
    client.on('message', (message : Discord.Message) => {
    });
    // Emitted whenever a message is deleted.
    client.on('messageDelete', (message : Discord.Message) => {
    });
    // Emitted whenever messages are deleted in bulk.
    client.on('messageDeleteBulk', (messages : Discord.Collection<string, Discord.Message>) => {
    });
    // Emitted whenever a reaction is added to a message.
    client.on('messageReactionAdd', (reaction : Discord.MessageReaction, user : Discord.User) => {
    });
    // Emitted whenever a reaction is removed from a message.
    client.on('messageReactionRemove', (reaction : Discord.MessageReaction, user : Discord.User) => {
    });
    // Emitted whenever all reactions are removed from a message.
    client.on('messageReactionRemoveAll', (reaction : Discord.MessageReaction) => {
    });
    // Emitted whenever a message is updated - e.g. embed or content change.
    client.on('messageUpdate', (oldMessage : Discord.Message, newMessage : Discord.Message) => {
    });
    // Emitted whenever a guild member's presence changes, or they change one of their details.
    client.on('presenceUpdate', (oldMember : Discord.GuildMember, newMember : Discord.GuildMember) => {
    });
    // Emitted when the Client becomes ready to start working.
    client.on('ready', () => {
    });
    // Emitted when the Client tries to reconnect after being disconnected.
    client.on('reconnecting', () => {
    });
    // Emitted whenever a role is created.
    client.on('roleCreate', (role : Discord.Role) => {
    });
    // Emitted whenever a guild role is deleted.
    client.on('roleDelete', (role : Discord.Role) => {
    });
    // Emitted whenever a guild role is updated.
    client.on('roleUpdate', (oldRole : Discord.Role, newRole : Discord.Role) => {
    });
    // Emitted whenever a user starts typing in a channel.
    client.on('typingStart', (channel : Discord.Channel, user : Discord.User) => {
    });
    // Emitted whenever a user stops typing in a channel.
    client.on('typingStop', (channel : Discord.Channel, user : Discord.User) => {
    });
    // Emitted whenever a note is updated.
    client.on('userNoteUpdate', (user : Discord.User, oldNote : string, newNote : string) => {
    });
    // Emitted whenever a user's details (e.g. username) are changed.
    client.on('userUpdate', (oldUser : Discord.User, newUser : Discord.User) => {
    });
    // Emitted whenever a user changes voice state - e.g. joins/leaves a channel, mutes/unmutes.
    client.on('voiceStateUpdate', (oldMember : Discord.GuildMember, newMember : Discord.GuildMember) => {
    });
    // Emitted for general warnings.
    client.on('warn', (info : string) => {
    });
    */
}
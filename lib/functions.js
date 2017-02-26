"use strict";
function getChannel(client, name) {
    let channels = client.channels;
    return channels.find("name", name);
}
exports.getChannel = getChannel;
/**
 * Returns an object of all defined environment variables. Guaranteed to have no undefined values.
 */
function getEnvVars() {
    // Set environment variables here
    let envs = {
        "token": process.env.DISCORD_TOKEN
    };
    Object.keys(envs).forEach(key => {
        if (envs[key] === undefined) {
            delete envs[key];
        }
    });
    return envs;
}
exports.getEnvVars = getEnvVars;
//# sourceMappingURL=functions.js.map
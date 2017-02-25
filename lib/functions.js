"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getChannel(client, name) {
    let channels = client.channels;
    return channels.find("name", "testing");
}
exports.getChannel = getChannel;

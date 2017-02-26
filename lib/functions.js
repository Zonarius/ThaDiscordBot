"use strict";
function getChannel(client, name) {
    let channels = client.channels;
    return channels.find("name", name);
}
exports.getChannel = getChannel;
//# sourceMappingURL=functions.js.map
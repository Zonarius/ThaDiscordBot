"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onExit(fun) {
    if (process.platform === "win32") {
        var rl = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on("SIGINT", function () {
            process.emit("SIGINT");
        });
    }
    process.on("SIGINT", fun);
}
exports.onExit = onExit;

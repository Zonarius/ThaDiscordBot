"use strict";
function onExit(fun) {
    if (process.platform === "win32") {
        let rl = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on("SIGINT", function () {
            process.emit("SIGINT");
        });
    }
    process.on("SIGINT", fun);
    process.on("SIGTERM", fun);
}
exports.onExit = onExit;
//# sourceMappingURL=onExit.js.map
"use strict";
const clientTrackerModule_1 = require("./modules/clientTrackerModule");
let modules = [];
function loadModules(client, config) {
    loadModule(client, new clientTrackerModule_1.ClientTrackerModule(config));
}
exports.loadModules = loadModules;
function loadModule(client, module) {
    modules.push(module);
    module.load();
    module.registerEvents(client);
}
function unloadModules() {
    modules.forEach(x => x.unload());
}
exports.unloadModules = unloadModules;
//# sourceMappingURL=moduleManager.js.map
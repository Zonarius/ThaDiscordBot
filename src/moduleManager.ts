import * as Discord from "discord.js";
import { ClientTrackerModule } from "./modules/clientTrackerModule";
import { BaseModule } from "./modules/baseModule";

var modules: BaseModule[] = [];

export function loadModules(client: Discord.Client): void {
    loadModule(client, new ClientTrackerModule());
}

function loadModule(client: Discord.Client, module: BaseModule): void {
    modules.push(module);

    module.load();
    module.registerEvents(client);
}

export function unloadModules(): void {
    modules.forEach(x => x.unload());
}
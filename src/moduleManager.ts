import * as Discord from "discord.js";
import { ClientTrackerModule } from "./modules/clientTrackerModule";
import { BaseModule } from "./modules/baseModule";

let modules: BaseModule[] = [];

export function loadModules(client: Discord.Client, config: Config): void {
    loadModule(client, new ClientTrackerModule(config));
}

function loadModule(client: Discord.Client, module: BaseModule): void {
    modules.push(module);

    module.load();
    module.registerEvents(client);
}

export function unloadModules(): void {
    modules.forEach(x => x.unload());
}
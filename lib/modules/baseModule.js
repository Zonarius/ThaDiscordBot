"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseModule {
    constructor(name, config) {
        this.name = name;
        this.config = config;
        if (!this.config.modules) {
            this.config.modules = {};
        }
    }
}
exports.BaseModule = BaseModule;

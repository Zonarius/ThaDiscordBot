# ThaDiscordBot

## Install
1. Pull repository
2. `npm install`

## Configuration
Copy config.example.json to config.json and edit to your likings.

Possible options:
* `token` (`string`, required) - token from Discord API
* `debug` (`boolean`, optional, default: `false`) - enables debug message from Discord API

## Start
`npm start`

## Adding a new module

1. Create a new class (which extends BaseModule) in the modules folder
2. Copy all needed events from the BaseModule
3. Create an instance in loadModules (moduleManager.ts)
# ThaDiscordBot

[![Docker Automated build](https://img.shields.io/docker/automated/tharyo/thadiscordbot.svg)](https://hub.docker.com/r/tharyo/thadiscordbot/)
[![Dependency Status](https://david-dm.org/ThaRyo/ThaDiscordBot.svg)](https://david-dm.org/ThaRyo/ThaDiscordBot)

## Guidelines
* Follow [https://gitmoji.carloscuesta.me/](https://gitmoji.carloscuesta.me/) for your commit messages.

## Install
1. Pull repository
2. `npm install`

You can also user the [docker image hosted by docker hub](https://hub.docker.com/r/tharyo/thadiscordbot/).

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
const cli = require('commander')
const packageJson = require('./package.json')

// Load sub-commands
require('./commands')(cli)

// Initilize CLI options
cli.version(packageJson.version).usage('<command> [options]')

module.exports = cli

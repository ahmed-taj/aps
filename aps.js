const cli = require('commander')
const packageJson = require('./package.json')

// Initilize CLI options
cli.version(packageJson.version).usage('<command> [options]')

module.exports = cli

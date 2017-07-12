const app = require('commander')
const inquirer = require('inquirer')
const packageJson = require('./package.json')

// Load sub-commands
require('./commands')(app)

// Initilize CLI options
app.name('aps').version(packageJson.version)

// Make prompt accessible
app.prompt = inquirer.prompt

module.exports = app

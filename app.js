const app = require('commander')
const packageJson = require('./package.json')

// Load sub-commands
require('./commands')(app)

// Initilize CLI options
app.name('aps').version(packageJson.version)

module.exports = app

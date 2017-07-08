const aps = require('./aps')

// Parse args
aps.parse(process.argv)

// Print help if no sub-command is passed
if (!process.argv.slice(2).length) {
  aps.help()
}

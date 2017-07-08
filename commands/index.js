const fs = require('fs')
const path = require('path')

const onlyCommands = filename => {
  return (
    /\.js$/.test(filename) &&
    !/\.test\.js$/.test(filename) &&
    filename !== 'index.js'
  )
}

module.exports = program => {
  // List commands files
  const filesList = fs.readdirSync(__dirname).filter(onlyCommands)

  for (let filename of filesList) {
    // Require command
    const command = require(path.join(__dirname, filename))

    // Initialize command
    command(program)
  }
}

const chalk = require('chalk')
const path = require('path')
const fs = require('fs')

/**
 * Bootstrap a new project based on a given awesome `scripts`.
 *
 * Package name will be determined using the following convention:
 *
 *    ${scripts}-awesome-scripts
 *
 * @param {String} scripts identifier
 * @param {String} name project name
 */
const bootstrap = (scripts, name) => {
  const dir = path.resolve(name)

  // Project directory must be empty
  if (fs.existsSync(dir)) {
    console.error(chalk.red(`The project directory must be empty`))
    process.exit(1)
  }
  console.log(`Bootstrapping a new project in ${chalk.green(dir)}\n`)
}

module.exports = bootstrap

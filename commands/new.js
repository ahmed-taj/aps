const chalk = require('chalk')
const path = require('path')
const bootstrap = require('../lib/bootstrap')
const validate = require('../lib/util/validate')

module.exports = cli => {
  cli
    .command('new')
    .arguments('<scripts-identifier>')
    .description('bootstrap a new project based on a given awesome scripts')
    .action(scripts => {
      cli
        .prompt({
          name: 'name',
          message: 'Choose project name',
          default: path.basename(process.cwd()),
          validate: validate.projectName
        })
        .then(ans => {
          bootstrap(scripts, ans.name)
        })
        .catch(err => {
          console.error(
            chalk.red(
              'Could not bootstrap the project due the following error(s):'
            )
          )
          console.log()
          console.log(chalk.red(err))
          console.log()
          console.log(
            chalk.red(
              `If you think that is a bug in ${chalk.blue(
                chalk.bold('aps')
              )} itself please report it here:`
            )
          )
          console.log()
          console.log(
            chalk.red('    https://github.com/ahmed-taj/aps/issues/new')
          )
          process.exit(1)
        })
    })
}

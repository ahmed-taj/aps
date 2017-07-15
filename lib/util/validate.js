const checkPackageName = require('validate-npm-package-name')
const red = require('chalk').red

exports.projectName = name => {
  const result = checkPackageName(name)
  if (result.validForNewPackages) {
    return true
  }
  let messages = result.errors || result.warnings

  // We will only show just the first error or warning message
  return red(messages[0])
}

module.exports = exports

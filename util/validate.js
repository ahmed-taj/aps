const checkPackageName = require('validate-npm-package-name')

exports.projectName = name => {
  const result = checkPackageName(name)
  if (result.validForNewPackages) {
    return true
  }
  const logs = [].concat(result.errors, result.warnings)

  let messages = ''
  logs.forEach(item => {
    if (item) {
      messages += ` * ${item}`
    }
  })
  return messages
}

module.exports = exports

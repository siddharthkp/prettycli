const chalk = require('chalk')

const colorMap = {
  info: 'green',
  warn: 'yellow',
  loading: 'blue',
  error: 'red'
}

const print = (message, label, type) => {
  const color = colorMap[type]
  console.log(
    chalk.inverse.bold[color](` ${label} `),
    chalk[color](message),
    '\n'
  )
}

const info = (message, label = 'INFO') => print(message, label, 'info')
const warn = (message, label = 'WARN') => print(message, label, 'warn')
const loading = (message, label = 'LOADING') => print(message, label, 'loading')

const command = message => chalk.blue(message)
const link = command

const error = (err, options) => {
  const label = 'ERROR'
  if (!options) options = { exit: true, silent: false, label }
  print('error', options.label || label, err)
  if (options.silent) process.exit(1)
  if (options.exit) throw new Error(err)
}

module.exports = { info, loading, warn, error, command, link }

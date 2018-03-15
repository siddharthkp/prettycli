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

const info = (label, message) => print('info', label, message)
const warn = message => print('warn', 'WARN', message)
const loading = (label, message) => print('loading', label, message)

const command = command => chalk.blue(command)
const link = url => chalk.blue(url)

const error = (err, options) => {
  const label = 'ERROR'
  if (!options) options = { exit: true, silent: false, label }
  print('error', options.label || label, err)
  if (options.silent) process.exit(1)
  if (options.exit) throw new Error(err)
}

module.exports = { info, loading, warn, error, command, link }

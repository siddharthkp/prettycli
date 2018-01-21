const chalk = require('chalk')
const width = require('string-width')

const colorMap = {
  info: 'green',
  warn: 'yellow',
  loading: 'blue',
  error: 'red'
}

const print = (type, label, message) => {
  const color = colorMap[type]

  const fmtDate = chalk.grey(new Date().toLocaleTimeString())
  const fmtLabel = chalk.inverse.bold[color](` ${label} `)
  const fmtMessage = chalk[color](message)

  const widthChars = width(fmtLabel) + width(fmtMessage) + width(fmtDate)

  let logSpace = process.stdout.columns - widthChars - 2
  if (logSpace <= 0) logSpace = 10

  console.log(
    `${fmtLabel} ${fmtMessage}${' '.repeat(logSpace)}${fmtDate}`,
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

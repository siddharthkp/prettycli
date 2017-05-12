const chalk = require('chalk');

const colorMap = {
  info: 'green',
  warn: 'yellow',
  loading: 'blue',
  error: 'red'
};

const print = (type, label, message) => {
  const color = colorMap[type];
  console.log(chalk.inverse.bold[color](` ${label} `), chalk[color](message), '\n');
};

const info = (label, message) => print('info', label, message);
const warn = (message) => print('warn', 'WARN', message);
const loading = (label, message) => print('loading', label, message);

const command = (command) => chalk.blue(command);
const link = (url) => chalk.blue(url);

const error = (err, options = {exit: true}) => {
  print('error', 'ERROR', err);
  if (options.exit) throw(new Error(err));
};

module.exports = {info, loading, warn, error, command, link};

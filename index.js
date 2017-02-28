const chalk = require('chalk');

const colorMap = {
  info: 'green',
  warning: 'yellow',
  loading: 'blue',
  error: 'red'
};

const print = (type, label, message) => {
  const color = colorMap[type];
  console.log(chalk.inverse.bold[color](` ${label} `), chalk[color](message), '\n');
};

const info = (label, message) => print('info', label, message);
const warning = (message) => print('warning', 'WARN', message);
const loading = (label, message) => print('loading', label, message);

const command = (command) => chalk.blue(command);
const link = (url) => chalk.blue(url);

const error = (err) => {
  console.log();
  print('error', 'ERROR', err);
  console.log(chalk.red`

    If you think this is a bug, you should raise a bug.

  `);
  throw(new Error(err));
};

module.exports = {info, loading, warning, error, command, link};

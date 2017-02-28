### prettycli

Pretty print messages on the terminal

&nbsp;

####  Usage

```js

// Require what you need from prettycli

const {info, warn} = require('prettycli');

/*

  There are 6 functions:

  Print to stdout:
  1. info: (label, message)
  2. loading: (label, message)
  3. warn: (message)
  4. error: (message)

  Returns pretty string (does not print)
  5. command: (command)
  6. link: (url)

*/

if (!process.env.PRODUCTION) info('BUILD', 'Running dev stuff');
else warn('This is production mode! Are you sure?');

```

&nbsp;

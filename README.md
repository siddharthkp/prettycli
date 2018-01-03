<p align="center">
  <img src="https://cdn.rawgit.com/siddharthkp/prettycli/64428632b46e83ef3717ec1b67113952b9b86e6b/screenshot.svg" width="1200"/>
  <br><br>
  <b>Pretty print messages on the terminal</b>
  <br><br>
</p>

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

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)
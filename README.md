# RandomRes
RandomRes is a simple module to make it easy for you to get random values, you can install this module via npm

# Install
``` npm install --save randomres ```

# How to Use
``` javascript
const randomres = require('randomres')
randomres.String() // default value

randomres.String({
  length: 15,
  charset: 'alphabet'
})
```

# License
This module is released under the [MIT License](https://github.com/febriadj/randomres-module/blob/master/LICENSE)
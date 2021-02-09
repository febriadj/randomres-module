# RandomRes
![nodejs](https://img.shields.io/badge/nodejs-00a896?style=for-the-badge&logo=node.js&logoColor=white)
![build](https://img.shields.io/badge/randomres-d62828?style=for-the-badge&logo=npm&logoColor=white)
<br>

RandomRes is a simple module to make it easy for you to get random values, you can install this module via npm

# Install
``` npm install --save randomres ```

# How to Use
``` javascript
// STRING VALUE
const randomres = require('randomres')

// default value
randomres.String({}) //-> pt6K5g4x0G

randomres.String({
  length: 15,
  charset: 'alphabet'
})

const value = 'yourvalue'
randomres.String({
  charset: value
})

```

``` javascript
// INTEGER VALUE
const randomres = require('randomres')

// default value
randomres.Integer({}) //-> 3584312377

randomres.Integer({
  length: 12,
  remove: 4
})

```

# Procedure

### String Value :
- By default, the length of the <b>String</b> value is 10
- There is no maximum limit for the length of <b>String</b> values
- ``` charset: 'alphabet' ``` This is the key to getting value only from A-Z & a-z
- In the charset, you can enter your own value ( must be of a string data type )

# License
This module is released under the [MIT License](https://github.com/febriadj/randomres-module/blob/master/LICENSE)
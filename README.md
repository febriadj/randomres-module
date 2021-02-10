# RandomRes
![nodejs](https://img.shields.io/badge/nodejs-00a896?style=for-the-badge&logo=node.js&logoColor=white)
![build](https://img.shields.io/badge/randomres-d62828?style=for-the-badge&logo=npm&logoColor=white)
<br>

RandomRes is a simple module to make it easy for you to get values from several data types randomly

# Install
``` npm install -g randomres ```<br>

``` npm install --save randomres ```

# How to Use
``` javascript
// string value
const randomres = require('randomres')

// default value
randomres.str() //-> pt6K5g4x0G

randomres.str({
  collect: 'alphabet',
  length: 15
})

randomres.str({
  collect: 'uppercase',
  length: 22
})

```

``` javascript
// scrambles own value
const randomres = require('randomres')

const fruits = ['banana', 'apple', 'avocado']
randomres.compile({
  set: fruits
})

const description = 'Get random value with RandomRes'
randomres.compile({
  set: description,
  length: 100 
})

```

# License
This module is released under the [MIT License](https://github.com/febriadj/randomres-module/blob/master/LICENSE)
'use strict'

exports.String = function({ length, charset }) {
  this.length = length
  this.charset = charset

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const numeric = '0123456789'

  const concat = numeric.concat( alphabet )
  let result = []
  
  for ( let i = 0; i < 10; i++ ) result[i] = concat[Math.floor( Math.random() * concat.length )]
  return result.join('')
}
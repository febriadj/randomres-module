'use strict'

exports.String = function({ length, charset }) {
  this.length = length
  this.charset = charset

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const numeric = '01234567890123456789'

  if ( this.charset == undefined ) {

    if ( this.length == undefined ) {
      const concat = numeric.concat( alphabet )
      let result = []
      
      for ( let i = 0; i < 10; i++ ) result[i] = concat[Math.floor( Math.random() * concat.length )]
      return result.join('')
    
    } else {
      const concat = numeric.concat( alphabet )
      let result = []
      
      for ( let i = 0; i < this.length; i++ ) result[i] = concat[Math.floor( Math.random() * concat.length )]
      return result.join('')
    }

  } else if ( this.charset == 'alphabet' ) {

    if ( this.length == undefined ) {
      let result = []
      
      for ( let i = 0; i < 10; i++ ) result[i] = alphabet[Math.floor( Math.random() * alphabet.length )]
      return result.join('')
    
    } else {
      let result = []
      
      for ( let i = 0; i < this.length; i++ ) result[i] = alphabet[Math.floor( Math.random() * alphabet.length )]
      return result.join('')
    }

  } else if ( this.charset != undefined && this.charset.length > 0 && typeof this.charset == 'string' ) {
    
    if ( this.length == undefined ) {
      let result = []
      
      for ( let i = 0; i < this.charset.length; i++ ) result[i] = this.charset[Math.floor( Math.random() * this.charset.length )]
      return result.join('')
    
    } else {
      let result = []
      
      for ( let i = 0; i < this.length; i++ ) result[i] = this.charset[Math.floor( Math.random() * this.charset.length )]
      return result.join('')
    }

  } else if ( typeof this.charset != 'string' ) {
    return new Error('the charset value must be a string')

  } else {
    return new Error('this command cannot be executed')
  }
}
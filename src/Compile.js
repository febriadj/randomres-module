'use strict'

exports.compile = function(options) {
  if ( typeof options == 'object' ) {
    const { set, length } = options

    if ( set == undefined ) return new Error('this function takes the value from an object')

    if ( typeof set == 'string' || 'object' ) {
      
      if ( length == undefined ) {
        let result = []
        for ( let i = 0; i < set.length; i++ ) result[i] = set[Math.floor( Math.random() * set.length )]
  
        return result.join('')
        
      } else {
        let result = []
        for ( let i = 0; i < length; i++  ) result[i] = set[Math.floor( Math.random() * set.length )]
  
        return result.join('')
      }
    }

  } else {
    return new Error('this function takes the value from an object')
  }
}
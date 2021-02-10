exports.compile = function( options ) {
  if ( typeof options == 'object' ) {
    // key and value declarations
    const { set, length } = options

    // To perform this function, you must initialize its set key and value
    if ( set == undefined ) return new Error('Please initialize the set key and its value')

    if ( typeof set == 'string' ) {
      // the value length is the original length of the input value
      if ( length == undefined ) {
        let result = []
        for ( let i = 0; i < set.length; i++ ) result[i] = set[Math.floor( Math.random() * set.length )]
        return result.join('') 
      }

      let result = []
      for ( let i = 0; i < length; i++  ) result[i] = set[Math.floor( Math.random() * set.length )]
      return result.join('')
    }

    if ( typeof set == 'object' ) {
      // the value length is the original length of the input value
      if ( length == undefined ) {
        let result = []
        for ( let i = 0; i < set.length; i++ ) result[i] = set[Math.floor( Math.random() * set.length )]
        return result 
      }

      let result = []
      for ( let i = 0; i < length; i++  ) result[i] = set[Math.floor( Math.random() * set.length )]
      return result
    }
  }
  
  // have to initialize the object
  return new Error('Please initialize the set key and its value')
}
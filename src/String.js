exports.str = function( options ) {

  const number = '0123456789',
        upper  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lower  = upper.toLowerCase()
  
  // combine
  const alphabet = upper.concat(lower),
        origin   = alphabet.concat(number)

  if ( typeof options == 'string' || typeof options == 'number' ) {
    return new Error(`Cannot execute values ​​of the '${ typeof options }' data type`)
  }

  if ( typeof options == 'object' ) {
    
    // key and value declarations
    const { collect, length } = options

    if ( collect == undefined ) {
      // if you have declared an object, you must enter at least one value
      if ( length == undefined ) return new Error('Please fill this object with at least one value')

      let result = []
      for ( let i = 0; i < length; i++ ) result[i] = origin[Math.floor(Math.random() * origin.length)]
      return result.join('')
    }

    // only results in uppercase
    if ( collect === 'uppercase' ) {
      if ( length == undefined ) {
        let result = []
        for ( let i = 0; i < 10; i++ ) result[i] = upper[Math.floor(Math.random() * upper.length)]
        return result.join('')
      }

      let result = []
      for ( let i = 0; i < length; i++ ) result[i] = upper[Math.floor(Math.random() * upper.length)]
      return result.join('')
    }

    // only results in lowercase
    if ( collect === 'lowercase' ) {
      if ( length == undefined ) {
        let result = []
        for ( let i = 0; i < 10; i++ ) result[i] = lower[Math.floor(Math.random() * lower.length)]
        return result.join('')
      }
  
      let result = []
      for ( let i = 0; i < length; i++ ) result[i] = lower[Math.floor(Math.random() * lower.length)]
      return result.join('')
    }

    if ( collect === 'alphabet' ) {
      if ( length == undefined ) {
        let result = []
        for ( let i = 0; i < 10; i++ ) result[i] = alphabet[Math.floor(Math.random() * alphabet.length)]
        return result.join('')
      }
  
      let result = []
      for ( let i = 0; i < length; i++ ) result[i] = alphabet[Math.floor(Math.random() * alphabet.length)]
      return result.join('')
    }

    // if the collect value is not available
    return new Error("'" + collect + "'" + ' this value is not available')
  
  }

  // default value
  // the value comes from the origin variable
  let result = []
  for ( let i = 0; i < 10; i++ ) result[i] = origin[Math.floor(Math.random() * origin.length)]
  return result.join('')

}
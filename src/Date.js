exports.date = function( options ) {

  // the parameter must be an object
  if ( typeof options == 'string' || typeof options == 'number' ) {
    return new Error(`Cannot execute values ​​of the '${ typeof options }' data type`)
  }

  if ( typeof options == 'object' ) {
    const { start, end } = options

    if ( start > end ) return new Error('The end value must be greater than the start value')
    if ( typeof start && typeof end != 'number' ) return new Error('Value must be a number')

    if ( start == undefined ) {
      if ( end == undefined ) return new Error('This function requires at least one value')

      const config = new Date()
      const endDate = new Date( end, config.getMonth(), config.getDate() )
      return new Date(new Date().getTime() + Math.random() * (endDate.getTime() - new Date().getTime()));
    }

    if ( end == undefined ) {
      if ( start == undefined ) return new Error('This function requires at least one value')

      const config = new Date(),
            startDate = new Date( start, config.getMonth(), config.getDate() )
            
      return new Date(startDate.getTime() + Math.random() * (new Date( startDate.getFullYear() + 1, config.getMonth(), config.getDate() ) - startDate.getTime()))
    }

    const config = new Date(),
          startDate = new Date( start, config.getMonth(), config.getDate() ),
          endDate = new Date( end, config.getMonth(), config.getDate() )

    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
  }

  // default value
  const config = new Date()
  return new Date(new Date().getTime() + Math.random() * (new Date( config.getFullYear() + 1, config.getMonth(), config.getDate() ) - new Date().getTime()))

}
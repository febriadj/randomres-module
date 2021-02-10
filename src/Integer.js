'use strict'

exports.int = function({ length, remove }) {
  this.length = length
  this.remove = remove

  const number = [1,2,3,4,5,6,7,8,9]
  
  if ( this.remove == undefined ) {

    if ( this.length == undefined || this.length > 16 ) {
      let arr = []
      
      for ( let i = 0; i < 10; i++ ) arr[i] = number[Math.floor( Math.random() * number.length )]
      const result = arr.join('')
      
      return Number(result)
    
    } else {
      let arr = []
      
      for ( let i = 0; i < this.length; i++ ) arr[i] = number[Math.floor( Math.random() * number.length )]
      const result = arr.join('')

      return Number(result)
    }

  } else if ( typeof this.remove == 'number' ) {
    
    if ( this.length == undefined || this.length > 16 ) {
      let box = []
      
      for ( let i = 0; i < number.length; i++ ) {
        if ( number[i] != this.remove ) {
          box[i] = number[i]
        }
      }
      
      let toStr = box.join('')
      let newNumber = [...toStr]
      let arr = []
      
      for ( let i = 0; i < 10; i++ ) arr[i] = newNumber[Math.floor( Math.random() * newNumber.length )]
      const result = arr.join('')
      
      return Number(result)
    
    } else {
      let box = []
      
      for ( let i = 0; i < number.length; i++ ) {
        if ( number[i] != this.remove ) {
          box[i] = number[i]
        }
      }
      
      let toStr = box.join('')
      let newNumber = [...toStr]
      let arr = []

      for ( let i = 0; i < this.length; i++ ) arr[i] = newNumber[Math.floor( Math.random() * newNumber.length )]
      const result = arr.join('')
      
      return Number(result)
    }
  
  }

}
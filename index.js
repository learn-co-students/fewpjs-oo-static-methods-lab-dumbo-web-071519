class Formatter {
  //add static methods here

  static capitalize(str){
    let capFirst = str.charAt(0).toUpperCase()
    return capFirst + str.slice(1)
    }//end of capitalize

    static sanitize(str){
      return str.replace(/[^\w '-]/ig, '')
    }//end of sani
    
  static titleize(str) {
    let exception = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let array = str.split(' ')
    let result = []

    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        result.push(this.capitalize(array[i]))
      }
      else {
        if (exception.includes(array[i])) {
          result.push(array[i])
        }
        else {
          result.push(this.capitalize(array[i]))
        }
      }
    }
    return result.join(' ')
  }// end of titleize
  

}// end of formatter class


 

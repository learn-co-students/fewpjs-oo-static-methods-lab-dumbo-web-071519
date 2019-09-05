class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }
  static titleize(str){
    const ignore = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let newStr = str.split(' ')
    newStr = newStr.map((letter) => {
      
      if (ignore.indexOf(letter) > -1 && newStr[0] !== letter) {
        return letter
      }
      else {
        return Formatter.capitalize(letter)
      }
    }).join(' ')

    return newStr
  }
}
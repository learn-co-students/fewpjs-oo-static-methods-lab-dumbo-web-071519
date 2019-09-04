class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }
  static titleize(str){
    const words = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const arr = str.split(' ');
    let newStr = '';
    newStr += this.capitalize(arr[0]);
    arr.shift();
    arr.forEach(function(duh){
      console.log(duh, words.includes(duh))
      if (words.includes(duh) === false){
        const newWord = Formatter.capitalize(duh);
        newStr += " " + newWord;
      } else{
        newStr += " " + duh;
      }
      
    })
    return newStr;
  }

}
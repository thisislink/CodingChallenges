var capitals = function (word) {
    let indexes = [];
    //loop thru string, determine if each char is uppercase
    //if uppercase, store index in indexes
    for(let i = 0; i < word.length; i++) {
      if(word.charAt(i) === word.charAt(i).toUpperCase()) indexes.push(i);
    }
    //return indexes
    return indexes;
};
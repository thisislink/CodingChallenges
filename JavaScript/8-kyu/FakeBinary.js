function fakeBin(x){
    //convert string of digits to array
    let stringToArray = x.split('');
  
    //loop through array
    for(let i = 0; i < stringToArray.length; i++) {
      //check if position is < 5
      if(stringToArray[i] < 5) {
        //if true change value to 0
        stringToArray[i] = 0;
      } else {
        //else if false, change value to 1
        stringToArray[i] = 1;
      }
    }
    //convert array back to string and return string
    return stringToArray.join('');
  }
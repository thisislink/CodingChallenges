function sumDigits(number) {
    //get abs value of number
    let absolute = Math.abs(number);
    //split number into array, convert string then to number 
    let toArray = absolute.toString().split('').map(Number); 
    //keep track of sum
    let sumNumbers = 0;
    //loop thru array and sum each value
    for(let i = 0; i < toArray.length; i++) {
      sumNumbers += toArray[i]
    }
    //return sum
    return sumNumbers;
    
}
  
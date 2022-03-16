function squareDigits(num){
    //convert num into array
    let numToArr = Array.from(String(num), Number);
    
    //loop thru array and square each number and return as int
    return parseInt(numToArr.map(x => {return Math.pow(x,2)}).join(""));
}
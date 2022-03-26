function countPositivesSumNegatives(input) {
    //track count of positive numbers and sum of negative numbers
    let countPositives = 0;
    let sumNegatives = 0;
    
    //edge case of empty array
    if(!input || input.length === 0) return [];
    
    //loop through array checking for negatives and positives
    for(let i = 0; i < input.length; i++) {
      //if number is positive and not 0, increment countPositives
      if(Math.sign(input[i]) === 1) {
        countPositives++;
      } else {
        //if number is negative and not 0, add to sumNegatives  
        sumNegatives += input[i];
      } 
    }
      return [countPositives, sumNegatives];
}
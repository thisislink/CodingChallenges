function stray(numbers) {
    //sort array
    numbers.sort((a,b) => a-b)
    
    //check if first and second value match and return last value if true
    if(numbers[0] === numbers[1]) return numbers[numbers.length -1]
    
    //else return first value
    return numbers[0];
}
function powersOfTwo(n){
    let results = []; //create array to store list of powers of 2
    //use loop to push powers of 2^0 to 2^n into results array
    for(let i = 0; i <= n; i++) {
      results.push(Math.pow(2,i));
    }
    //return results array
    return results;
}
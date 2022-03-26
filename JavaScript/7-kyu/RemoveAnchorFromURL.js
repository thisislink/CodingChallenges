function removeUrlAnchor(url){
    //convert URL string to array 
    let urlToArray = url.split('');
    
    //edge case: if no # found return array as url string
    if(!urlToArray.indexOf('#')) return urlToArray.join('');
    
    //loop thru array until find #
    for(let i = 0; i < urlToArray.length; i++) {
      if(urlToArray[i] === '#') {
        urlToArray.splice(urlToArray.indexOf('#'));
      }         
    } 
    
    //convert array back to string and return
    return urlToArray.join('');
}
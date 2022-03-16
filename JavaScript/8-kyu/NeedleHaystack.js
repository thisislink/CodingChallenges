function findNeedle(haystack) {
    let needlePosition = 0;
    //loop through haystack
    for(let i = 0; i < haystack.length; i++) {
      if(haystack[i] === 'needle') {
        needlePosition = i;
      }
    }
    //if value of junk is needle return position found
    return `found the needle at position ${needlePosition}`;
}
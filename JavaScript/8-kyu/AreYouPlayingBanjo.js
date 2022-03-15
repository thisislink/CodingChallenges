function areYouPlayingBanjo(name) {
    //check if first letter is R or r
    if(name[0] === 'r' || name[0] === 'R') {  
      //if true, return name plays banjo
      return name + ' plays banjo';
    } else {
        //if false, return name does not play banjo
        return name + ' does not play banjo';
    }
}
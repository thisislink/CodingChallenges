function betterThanAverage(classPoints, yourPoints) {
    //get length of classPoints to get number of peers in class for average
    let peersInClass = classPoints.length;
    //create variable to store sum of peers points
    let peersTotalPoints = 0;
    //loop through classPoint to get sum 
    for(let i = 0; i < peersInClass; i++) {
      peersTotalPoints += classPoints[i];
    }
    //add my point to class total points
    peersTotalPoints += yourPoints;
    //calculate the average 
    let classAverage = peersTotalPoints/peersInClass;
    //if my points better than average return true
    if(yourPoints >= classAverage) return true;
    //else return false
    if(yourPoints < classAverage) return false;
}
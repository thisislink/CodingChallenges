function findShort(s){
    let sorted = s.split(" ");
    sorted.sort((a, b) => a.length - b.length);
    return sorted[0].length;
}
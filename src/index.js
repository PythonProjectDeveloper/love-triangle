/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  preferences = preferences.map( n => n - 1)

  let count = 0
  for ( let i=0; i < preferences.length; i++ ){ 
    let second=preferences[i];
    let third=preferences[second];
    let first=preferences[third];

    if(first===i && second < i && third < i) ++count
  }
  return count
};

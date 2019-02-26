/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  preferences = preferences.map( n => n - 1)

  let count = 0
  for ( let i=0; i < preferences.length; ++i ){ 
    if ( preferences[i] === -1 ) continue

    let triangle = [i]
    let next_lover = preferences[i]

    while ( next_lover > -1 && next_lover < preferences.length && next_lover !== -1){
      if ( triangle.indexOf(next_lover) > -1 ) {
		    triangle.push(next_lover)
		    if (triangle.lastIndexOf(next_lover) - triangle.indexOf(next_lover) === 3) count += 1

		    triangle.forEach( i => preferences[i] = -1 )
		    break
	    }

	    triangle.push(next_lover)
	    next_lover = preferences[next_lover]

      if ( next_lover === -1 ) triangle.forEach( i => preferences[i] = -1 )

    }
  } 
    return count
};

//TODO: 
//! Take Set as Input [Done]
//! Return Set as Output [Done]
//! Write an Iterable [Done]


function validateSetOrThrowError(set){
  if(!(set instanceof Set)){
    throw new TypeError(`Expected a Set, instead got ${set} of type ${typeof set}`)
  }
}

function getIndicesOfOnesInBinary(binaryDigits){
  return binaryDigits.split('').reduce((acc, value, index)=>{
    if(value === '1'){
      acc.push(index);
    }
    return acc
  }, [])
}


function padWithZeroInFront(string, size){
  while(string.length < size){
    string = '0' + string;
  }
  return string;
}


//thanks to GeeksForGeeks for the algo hint.
function* genPowerSet(set){
  const array = Array.from(set);
  const numberOfSubset = 2 ** set.size;

  for(let i = 0; i<numberOfSubset; i++){
    const binary = padWithZeroInFront(i.toString(2), set.size);
    const oneIndices = getIndicesOfOnesInBinary(binary);
    yield new Set(oneIndices.map(index=>array[index]));
  }
}


// You can change the `args`
function iterPowerSet(set) {
  validateSetOrThrowError(set);

  return new Set([...genPowerSet(set)]);
}


export {
  iterPowerSet,
};


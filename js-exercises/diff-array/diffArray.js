function getIntersection(firstSet, secondSet){
  const intersection = new Set();

  firstSet.forEach(value=>{
    secondSet.has(value) && intersection.add(value)
  })

  return intersection;
}



function getDifference(union, intersection){
  const difference = new Set();

  union.forEach(value=>{
    !(intersection.has(value)) && difference.add(value);
  })
  return difference;
}



function diffArray(firstArray, secondArray) {
  const firstSet = new Set(firstArray);
  const secondSet = new Set(secondArray);

  const union = new Set([...firstArray, ...secondArray]);
  const intersection = getIntersection(firstSet, secondSet);
  const difference = getDifference(union, intersection);
  return Array.from(difference);
}




// const obj = {a: 1}
// const testCases = [[[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [2, 3, 4]], [[1, 'str', obj],['str', obj, 2]]]
// testCases.forEach(t=>console.log(diffArray(t[0],t[1])))




export {
  diffArray,
};

// Thanks to the one who wrote the test cases.

function sumFibs(num, prevOfPrevFib = 0, prevFib = 1) { //rename to sumOddFibs

  //exit condition
  if (prevFib > num) {
    return 0;
  }

  return (prevFib % 2 && prevFib) + sumFibs(num, prevFib, prevFib + prevOfPrevFib);
}



function cacheFunction(sumFibs) {
  const memo = {};
  return (value)=>{
    if(!memo.hasOwnProperty(value)){
      memo[value] = sumFibs(value);
    }
    return memo[value]
  }
}




export { sumFibs, cacheFunction };

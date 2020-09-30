//write a cmp func for els, array could store anything

//sorting takes O(nlogn)
//finding k times min from array takes O(kn) = O(n*n)


//anther approach do one pass of Quick sort with kth max element as pivot and sort the first half.
//but finding kth max will take O(kn) = O(n*n)

//use other sorts like selection, where and stop after kth iteration, but still time complexity = O(k*n) = O(n*n)


//normal sorting is the best way to go in general

function cmpFn(a,b){
  return a-b;
}

function minima(k, array, cmp=cmpFn) {
  const arrayCopy = [...array];
  return arrayCopy.sort(cmp).slice(0,k);
}

export { minima };

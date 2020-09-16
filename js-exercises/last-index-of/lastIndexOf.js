
function lastIndexOf(number, listOfNumbers) { //contrived recusive solution
  const lengthOfList = listOfNumbers.length;

  //exit fail
  if (!lengthOfList) {
    return -1;
  }

  //exit success
  if (listOfNumbers.pop() === number) { //mutation of actual list is fine for this problem.
    return lengthOfList - 1;
  }

  return lastIndexOf(number, listOfNumbers)
}

export {
  lastIndexOf,
};

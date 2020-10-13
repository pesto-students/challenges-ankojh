
function validateBoundTypeOrThrowError(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) { //NaN will print "number is not a number"?
    throw new TypeError(`Invalid bound received ${typeof value} is not a number. Expected of type number, instead got ${value} of type ${typeof value}`)
  }
}

function rangeIter(lb, ub) {
  validateBoundTypeOrThrowError(lb);
  validateBoundTypeOrThrowError(ub);
  let currentValue;
  return {
    [Symbol.iterator]() {
      currentValue = lb;
      return this;
    },
    next() {
      if (currentValue > ub) {
        return { done: true }
      }
      return { value: currentValue++, done: false }
    }
  }
}


export { rangeIter };

function checkValidNumberOrThrowError(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw TypeError(`Expected of type 'number', instead got ${value} of type '${typeof value}'`) //value.toString?
  }
}


function checkValidIteratorOrThrowError(value){
  if (typeof value[Symbol.iterator] !== 'function'){
    throw TypeError(`Expected an Iterator, instead got ${value}'`) 
  }
}


function* count(start, step = 1) {
  checkValidNumberOrThrowError(start);
  checkValidNumberOrThrowError(step);

  while (true) {
    yield(start);
    start+=step;
  }

}

function* cycle(iterator, n = Infinity) {
  //iterator which has symbol.iterator
  //iterable which has next()
  checkValidIteratorOrThrowError(iterator);
  checkValidNumberOrThrowError(n);
  while (n--) {
    for (let el of iterator) {
      yield el;
    }
  }

}

function* repeat(value, n = Infinity) {
  //doesn't matter what value it is, undefined, null,.
  checkValidNumberOrThrowError(n);
  while (n--) {
    yield value;
  }
}


export {
  count,
  cycle,
  repeat
}
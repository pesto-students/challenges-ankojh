function IsCallable(callbackfn) {
  return typeof callbackfn === 'function'
}



function forEach(callbackfn, thisArg) {
  const O = Object.assign({}, this);
  const len = this.length;

  if (IsCallable(callbackfn) === false) {
    throw new TypeError('callback function is not of type function');
  }

  const T = thisArg === undefined ? undefined : thisArg;

  let k = 0;
  while (k < len) {
    const Pk = k.toString();
    const kPresent = O.hasOwnProperty(Pk);
    if (kPresent === true) {
      const kValue = O[Pk];
      callbackfn.call(T, kValue, k, this); //spec says last operator to be O {Object}, wrong maybe 
    }
    k++;
  }
  return undefined;
}


function map(callbackfn, thisArg){
  const O = Object.assign({}, this);
  const len = this.length;

  if (IsCallable(callbackfn) === false) {
    throw new TypeError('callback function is not of type function');
  }

  const T = thisArg === undefined ? undefined : thisArg;
 
  const A = []//species array???

  let k = 0;
  while (k < len) {
    const Pk = k.toString();
    const kPresent = O.hasOwnProperty(Pk);
    if (kPresent === true) {
      const kValue = O[Pk];
      const mappedValue = callbackfn.call(T, kValue, k, this); //this or O
      A[k] = mappedValue;
    }
    k++;
  }
  return A;
}


function filter(callbackfn, thisArg){
  const O = Object.assign({}, this);
  const len = this.length;

  if (IsCallable(callbackfn) === false) {
    throw new TypeError('callback function is not of type function');
  }

  const T = thisArg === undefined ? undefined : thisArg;

  const A = []//species array bs.

  let k = 0;
  let to = 0;
  while (k < len) {
    const Pk = k.toString();
    const kPresent = O.hasOwnProperty(Pk);
    if (kPresent === true) {
      const kValue = O[Pk];
      const selected = Boolean(callbackfn.call(T, kValue, k, this)) //this, O
      if(selected === true){
        A[to] = kValue
        to++;
      }
    }
    k++;
  }
  return A;
}


function reduce(callbackfn, initialValue){
  const O = Object.assign({}, this);
  const len = this.length;

  if (IsCallable(callbackfn) === false) {
    throw new TypeError('callback function is not of type function');
  }

  if(len === 0 && initialValue === undefined){
    throw new TypeError('cant reduce array of length zero with no initial value');
  }

  let k = 0;
  let accumulator = 0;
  if(initialValue !== undefined){
    accumulator = initialValue;
  }
  else{
    let kPresent = false;

    while(kPresent === false && k < len){
      const Pk = k.toString(); 
      kPresent = O.hasOwnProperty(Pk);
      if(kPresent === true){
        accumulator = O[Pk]
      }
      k++;
    }
  }

  while(k<len){
    const Pk = k.toString(); 
    const kPresent = O.hasOwnProperty(Pk);
    if(kPresent === true){
      const kValue = O[Pk];
      accumulator = callbackfn.call(undefined, accumulator, kValue, k, this) // O vs this??
    }
    k++;
  }

  return accumulator;
}


export {
  forEach,
  map,
  filter,
  reduce,
}
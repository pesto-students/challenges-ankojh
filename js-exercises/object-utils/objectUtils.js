// your implementation
function IsCallable(object) {
  return typeof object === 'function'
}

function checkIsCallbackFnCallableOrThrowError(callbackfn){
  if (IsCallable(callbackfn) === false) {
    throw new TypeError('Callback function passed is not callable');
  }
}


function map(callbackfn, thisArg) {
  checkIsCallbackFnCallableOrThrowError(callbackfn)

  const result = {}
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      const value = this[key];
      const [mKey, mValue] = callbackfn.call(thisArg, [key, value], this)
      result[mKey] = mValue;
    }
  }

  return result;
}


function filter(callbackfn, thisArg) {
  checkIsCallbackFnCallableOrThrowError(callbackfn)

  const result = {}
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      const value = this[key];
      const isSelected = Boolean(callbackfn.call(thisArg, [key, value], this));
      if (isSelected === true) {
        result[key] = value;
      }
    }
  }

  return result;

}


function invert() { //pass a value stringifying function?? let's handle everything on our own
  const result = {}
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      const value = this[key];
      if (typeof value == 'function') {
        result[String(value)] = key;
      }
      else {
        result[JSON.stringify(value)] = key;
      }
    }
  }
  return result;
}


function merge(...objs) { // merge means own properties? or parent too??
  return Object.assign({}, this, ...objs)
}


function all(callbackfn, thisArg) {
  checkIsCallbackFnCallableOrThrowError(callbackfn)


  for (const key in this) {
    if (this.hasOwnProperty(key)) {

      const value = this[key];

      if (Boolean(callbackfn.call(thisArg, [key, value], this)) === false) {
        return false;
      }
    }
  }

  return true;

}


function some(callbackfn, thisArg) {
  checkIsCallbackFnCallableOrThrowError(callbackfn)

  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      const value = this[key];

      if (Boolean(callbackfn.call(thisArg, [key, value], this)) === true) {
        return true;
      }
    }
  }

  return false;
}


export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};

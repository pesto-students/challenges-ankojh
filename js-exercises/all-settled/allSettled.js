const STATUS_FULFILLED = 'fulfilled';
const STATUS_REJECTED = 'rejected';

function isIterable(iterable) {
  return iterable && iterable[Symbol.iterator] && typeof iterable[Symbol.iterator] === 'function'
}


function promisify(value) {
  if (value instanceof Promise) {
    return value;
  }
  return Promise.resolve(value)
}


function allSettled(iterable) {
  if (!isIterable(iterable)) {
    throw new TypeError(`${promises} is not an iterable, cannot read [Symbol.iterator]()`);
  }

  const elements = [...iterable];
  const element = elements.shift();
  const promise = promisify(element);

  return new Promise(async resolve => {
    let restPromisesValue;
    let promiseValue;

    function tryResolvingThisPromise() { //* move this func out
      if (promiseValue){
        if (!elements.length) {
          resolve([promiseValue]);
        }
        else if (restPromisesValue) {
          resolve([promiseValue, ...restPromisesValue]);
        }
      }
    }

    promise.then(value => {
      promiseValue = { status: STATUS_FULFILLED, value };
      tryResolvingThisPromise();
    }).catch(reason => {
      promiseValue = { state: STATUS_REJECTED, reason };
      tryResolvingThisPromise();
    })

    restPromisesValue = elements.length ? await allSettled(elements) : []
    tryResolvingThisPromise();

  });
}



//! The following implementation fails for unhandled async rejections

// async function allSettled(iterable) {
//   if (!isIterable(iterable)) {
//     throw new TypeError(`${promises} is not an iterable, cannot read`)
//   }

//   const promises = iterable.map(promisify);

//   const result = []
//   for (let promise of promises) {
//     const r = {}
//     try {
//       r.status = STATUS_FULFILLED;
//       r.value = await promise;
//     }
//     catch (e) {
//       r.status = STATUS_REJECTED;
//       r.reason = `${e}`;
//     }
//     result.push(r);
//   }

//   return result;
// }





//! Test Case

// async function main(){
// console.log(await allSettled([
//   Promise.resolve(33),
//   Promise.resolve(33),
//   Promise.reject(33),
//   Promise.resolve(33),
//   new Promise((resolve, reject) => setTimeout(() => reject(66), 1000)),
//   99,
//   99,
//   99,
//   99,
//   Promise.reject(new Error('an error')),
//   Promise.reject(new Error('an error')),
// ]))}

// main();


export { allSettled };

const fibonacciIter = {
  [Symbol.iterator](){
    let prevPrevValue = 0;
    let prevValue = 1;
    return {
      next(){
        const currentValue = prevPrevValue + prevValue;
        prevPrevValue = prevValue;
        prevValue = currentValue;
        return { value: currentValue, done: false}
      }
    }
  }
};


// console.log(fibonacciIter[Symbol.iterator]().next());


// const iterator = fibonacciIter[Symbol.iterator]();


// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())


// for(let i of fibonacciIter){
//   console.log(i);
// }


export { fibonacciIter };

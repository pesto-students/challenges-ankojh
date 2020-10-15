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

export { fibonacciIter };

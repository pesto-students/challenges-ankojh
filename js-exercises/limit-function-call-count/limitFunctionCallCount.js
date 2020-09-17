const limitFunctionCallCount = (cb, n) => {
  let callCounter = 0;

  return (...args) => {
    if (callCounter++ < n) {
      return cb(...args);
    }
    return null;
  }
};

export {
  limitFunctionCallCount,
};

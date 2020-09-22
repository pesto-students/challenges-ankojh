

const sumEvenArgs = (...args) => {
  return args.reduce((acc, value) => acc += value % 2 == 0 ? value : 0, 0)
};

export { sumEvenArgs };

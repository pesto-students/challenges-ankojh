import { count, cycle, repeat } from './iterInfinite'

function take(iterator, n = 0) {
  const result = []
  for (let el of iterator) {
    if (!n--) {
      return result;
    }
    result.push(el);
  }
  return result;
}


describe('take (for test)', () => {
  it('should take first n items', () => {
    expect(take([1, 2, 3, 4], 2)).toEqual([1, 2])
    expect(take('1234', 2)).toEqual(['1', '2'])
    expect(take(new Set([1, 2, 3, 4]), 2)).toEqual([1, 2])
  })
})


describe('count', () => {
  it('should throw error for any invalid args', () => {

    expect(() => count().next()).toThrow();
    expect(() => count(null).next()).toThrow();
    expect(() => count(NaN).next()).toThrow();
    expect(() => count(undefined).next()).toThrow();
    expect(() => count(1, NaN).next()).toThrow();
  })
  it('should count without step', () => {
    expect(take(count(1), 5)).toEqual([1, 2, 3, 4, 5])
    expect(take(count(-99), 5)).toEqual([-99, -98, -97, -96, -95])


  })
  it('should count with step', () => {
    expect(take(count(1, 2), 5)).toEqual([1, 3, 5, 7, 9])
    expect(take(count(-99, 11), 5)).toEqual([-99, -88, -77, -66, -55])
  })
})


describe('cycle', () => {
  it('should throw error for invalid args', () => {
    expect(() => cycle().next()).toThrow()
    expect(() => cycle(Promise.resolve(10)).next()).toThrow()
    expect(() => cycle({}).next()).toThrow()
    expect(() => cycle({}, null).next()).toThrow()
    expect(() => cycle([1, 2, 3], NaN).next()).toThrow()
    expect(() => cycle([1, 2, 3], null).next()).toThrow()
  })
  it('should cycle infinitely when n is not passed ', () => {
    expect(take(cycle([1, 2, 3]), 5)).toEqual([1, 2, 3, 1, 2])
    expect(take(cycle(['1', '2', '3']), 2)).toEqual(['1', '2'])
  })
  it('should cycle finitely when n is passed', () => {
    expect(take(cycle([1, 2, 3], 3), 10)).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3])
    expect(take(cycle(['1', '2', '3'], 0), 10)).toEqual([])
    expect(take(cycle(new Set([1, 2, 3]), 1), 10)).toEqual([1, 2, 3])
  })
})

describe('repeat', () => {
  it('should throw error for invalid arguments', () => {
    expect(() => repeat(null, null).next()).toThrow()
    expect(() => repeat(null, NaN).next()).toThrow()
  })
  it('should repeat indefinitely when n is not passed', () => {
    expect(take(repeat(10), 5)).toEqual([10, 10, 10, 10, 10])
    expect(take(repeat(null), 5)).toEqual([null, null, null, null, null])
    expect(take(repeat({ a: 5 }), 5)).toEqual([{ a: 5 }, { a: 5 }, { a: 5 }, { a: 5 }, { a: 5 }])
  })
  it('should repeat finitely when n is passed', () => {
    expect(take(repeat(10, 0), 10)).toEqual([])
    expect(take(repeat(10, 10), 10)).toEqual([10, 10, 10, 10, 10, 10, 10, 10, 10, 10])
    expect(take(repeat(5, 5), 10)).toEqual([5, 5, 5, 5, 5])

  })
})
import { iterPowerSet } from './iterPowerSet';

describe('iterPowerSet', () => {
  it('should throw error when set is not passed', () => {
    expect(() => iterPowerSet()).toThrow();
    expect(() => iterPowerSet([1, 2, 3])).toThrow();
    expect(() => iterPowerSet(123)).toThrow();
    expect(() => iterPowerSet('123')).toThrow();
  });

  it('should return a set', () => {
    expect(iterPowerSet(new Set([1, 2, 3]))).toBeInstanceOf(Set);
    expect(iterPowerSet(new Set(['1', '2', '3']))).toBeInstanceOf(Set);
    expect(iterPowerSet(new Set([{}, 2, '3']))).toBeInstanceOf(Set);
  })

  it('should generate all subsets', () => {
    expect(iterPowerSet(new Set([1, 2, 3]))).toEqual(new Set([
      new Set([]),
      new Set([3]),
      new Set([2]),
      new Set([2,3]),
      new Set([1]),
      new Set([1, 3]),
      new Set([1, 2]),
      new Set([1, 2, 3])
    ]))


    expect(iterPowerSet(new Set(['1', 2, {}]))).toEqual(new Set([
      new Set([]),
      new Set([{}]),
      new Set([2]),
      new Set([2, {}]),
      new Set(['1']),
      new Set(['1', {}]),
      new Set(['1', 2]),
      new Set(['1', 2, {}])
    ]))


    // 000
    // 001
    // 010
    // 011
    // 100
    // 101
    // 110
    // 111
  })


});

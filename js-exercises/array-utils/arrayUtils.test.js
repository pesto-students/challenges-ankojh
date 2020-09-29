// Write your own test cases.
import {forEach, map, filter, reduce} from './arrayUtils'


Array.prototype._forEach = forEach;
Array.prototype._map = map;
Array.prototype._filter = filter;
Array.prototype._reduce = reduce;


describe('arrayUtils-map', () => {
  it('should map return correct values', () => {
    expect(
      [1, 2, 3, 4]._map(value => value * 2)
    ).toEqual([2, 4, 6, 8]);
    expect(
      [1, 2, undefined, 3]._map(value => value)
    ).toEqual([1, 2, undefined, 3]);
  });
});

describe('arrayUtils-filter', () => {
  it('should filter return correct values', () => {
    expect(
      [1, 2, 3, 4]._filter(value => value % 2)
    ).toEqual([1, 3]);
    expect(
      [1, 2, undefined, 3]._filter(value => value)
    ).toEqual([1, 2, 3]);
  });
});

describe('arrayUtils-reduce', () => {
  it('should reduce return correct values', () => {
    expect(
      [1, 2, 3, 4]._reduce((acc,value) => acc+value)
    ).toEqual(10);
  });
});
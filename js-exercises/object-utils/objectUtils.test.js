import {
  map,
  filter,
  invert,
  merge,
  all,
  some
} from './objectUtils';


Object.prototype._map = map;
Object.prototype._filter = filter;
Object.prototype._invert = invert;
Object.prototype._merge = merge;
Object.prototype._all = all;
Object.prototype._some = some;




describe('objectUtils', () => {
  it('should return correct map results', () => {
    expect(
      { a: 1, b: 2, c: 3 }._map(([key, value]) => { return [`key${key}`, value] })
    ).toEqual({ keya: 1, keyb: 2, keyc: 3 });
    expect(
      { a: 1, b: 2, c: 3 }._map(([key, value]) => { return [`key${key}`, value*2] })
    ).toEqual({ keya: 2, keyb: 4, keyc: 6 });
  });



  it('should return correct filter results', () => {
    expect(
      { a: 1, b: 2, c: 3 }._filter(([key, _]) => { return key === 'a' })
    ).toEqual({ a: 1 });
    expect(
      { a: 1, b: 2, c: 3 }._filter(([_, value]) => { return value % 2 })
    ).toEqual({ a: 1, c: 3 });
  });



  it('should return correct all results', () => {
    expect(
      { a: 1, b: 2, c: 3 }._all(([key, _]) => { return key === 'a' })
    ).toEqual(false);
    expect(
      { a: 1, b: 2, c: 3 }._all(([_, value]) => { return value < 5 })
    ).toEqual(true);
  });



  it('should return correct some results', () => {
    expect(
      { a: 1, b: 2, c: 3 }._some(([key, _]) => { return key === 'a' })
    ).toEqual(true);
    expect(
      { a: 1, b: 2, c: 3 }._some(([_, value]) => { return value > 5 })
    ).toEqual(false);
  });


  it('should return correct merge results', () => {
    let func = a=>a;
    expect(
      { a: 1, b: 2, c: 3 }._merge({d:4, e:5}, {f:6, g:7})
    ).toEqual({a:1,b:2,c:3,d:4,e:5,f:6,g:7});
    expect(
      { a: 1, b: 2, c: 3 }._merge({ d: func,e:5})
    ).toEqual({ a: 1, b: 2, c: 3, d: func, e:5});
  });


  it('should return correct invert results', () => {
    let func = a => a;
    expect(
      { a: 1, b: 2, c: 3 }._invert()
    ).toEqual({'1': 'a', '2': 'b', '3': 'c'})
    expect(
      { d: func, e: 5 }._invert()
    ).toEqual({ [func.toString()]:'d', '5': 'e' });
  });

});

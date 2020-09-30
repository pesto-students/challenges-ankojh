import { deepEqual } from "./deepEqual";

describe("deepEqual", () => {

  it('should compare primitives', () => {
    const a = 1
    const b = 2
    const c = true
    const d = 1
    expect(deepEqual(a, b)).toEqual(false);
    expect(deepEqual(a, c)).toEqual(false);
    expect(deepEqual(a, d)).toEqual(true);
  });

  it('should compare empty objects', () => {
    const a = {}
    const b = {}
    const c = a
    expect(deepEqual(a, b)).toEqual(true);
    expect(deepEqual(a, c)).toEqual(true);
  });

  it('should compare simple objects with primitive values', () => {
    const a = { a: 1, b: 'b', c: false }
    const b = { a: 1, b: 'b', c: false }
    const c = { a: 1, b: 'b', c: true }
    expect(deepEqual(a, b)).toEqual(true);
    expect(deepEqual(a, c)).toEqual(false);
  })

  it('should compare other objects with primitive values', () => {
    const a = [1, 2, 3, 4, 5];
    const b = [1, 2, 3, 4];
    const c = [1, 2, 3, 4, 5];

    const d = '12345'
    const e = '1234'
    const f = '12345'


    // const g = new Set([1, 2, 3, 4, 5])
    // const h = new Set([1, 2, 3, 4])
    // const i = new Set([1, 2, 3, 4, 5]) // fails

    expect(deepEqual(a, b)).toEqual(false);
    expect(deepEqual(a, c)).toEqual(true);

    expect(deepEqual(d, e)).toEqual(false);
    expect(deepEqual(d, f)).toEqual(true);

    // expect(deepEqual(g, h)).toEqual(false);
    // expect(deepEqual(g, i)).toEqual(true);
  })


  it('should compare objects with properties as functions', () => {
    const func = () => { }
    const a = { a: 1, b: func }
    const b = { a: 1, b: func }
    const c = { a: 1, b: () => { } }

    expect(deepEqual(a, b)).toEqual(true);
    expect(deepEqual(a, c)).toEqual(false);
  })

  it('should compare objects with nested objects', () => {
    const obj = { a: 1 }
    const a = obj
    const b = { a: 1, b: { a: 1, b: obj } }
    const c = { a: 1, b: { ...obj, b: obj } }
    const d = { a: 1, b: { b: obj } }

    expect(deepEqual(a, b)).toEqual(false);
    expect(deepEqual(b, c)).toEqual(true);
    expect(deepEqual(c, d)).toEqual(false);
  })



  it('should compare object with descriptorProperties', () => {
    const a = { a: 1, };
    Object.defineProperty(a, 'b', { value: 1 })

    const b = { a: 1 };
    Object.defineProperty(b, 'b', { value: 1 })

    const c = { a: 1 };
    Object.defineProperty(c, 'b', { value: 1, enumerable: true })

    const d = {};
    Object.defineProperty(d, 'a', { value: 1, enumerable: true, configurable: true, writable: true })

    const e = { a: 1 }

    expect(deepEqual(a, b, { matchDescriptors: true })).toEqual(true);
    expect(deepEqual(b, c, { matchDescriptors: true })).toEqual(false);
    expect(deepEqual(c, d, { matchDescriptors: true })).toEqual(false);
    expect(deepEqual(a, d, { matchDescriptors: true })).toEqual(false);
    expect(deepEqual(e, d, { matchDescriptors: true })).toEqual(true);

  })

  it('should compare objects with accessor properties', () => {
    const a = { a: 1, set b(v) { }, get b() { return this.a } }
    const b = { a: 1, set b(v) { }, get b() { return this.a } }
    expect(deepEqual(a, b)).toEqual(true);
    expect(deepEqual(a, b, { matchDescriptors: true })).toEqual(false);
  })

  it('should compare objects with symbol properties', () => {
    const a = { a: 1, [Symbol()]: 'a' }
    const b = { a: 1, [Symbol()]: 'a' }
    expect(deepEqual(a, b)).toEqual(false);
  })

});

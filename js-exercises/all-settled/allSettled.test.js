import { allSettled } from './allSettled'

describe('allSettled', () => {

  it('should satisfy README test cases - 1', async () => {

    expect(await allSettled([
      Promise.resolve(33),
      new Promise(resolve => setTimeout(() => resolve(66), 0)),
      99,
      Promise.reject(new Error('an error'))
    ])).toEqual(
      [
        { status: "fulfilled", value: 33 },
        { status: "fulfilled", value: 66 },
        { status: "fulfilled", value: 99 },
        { status: "rejected", reason: 'Error: an error' }
      ]
    )
  })

  it('should satisfy README test cases - 2', async () => {

    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
    const promises = [promise1, promise2];

    expect(await allSettled(promises)).toEqual(
      [
        { status: "fulfilled", value: 3 },
        { status: "rejected", reason: 'foo' }
      ]
    )
  })

  it('should handle first rejected promises', async () => {

    expect(await allSettled([
      Promise.reject(new Error('an error')),
      Promise.reject(new Error('an error')),

      Promise.reject(new Error('an error')),
      Promise.resolve(33),
      new Promise((resolve, reject) => setTimeout(() => reject(66), 0)),
      99,
    ])).toEqual(
      [
        { status: 'rejected', reason: 'Error: an error' },
        { status: 'rejected', reason: 'Error: an error' },
        { status: 'rejected', reason: 'Error: an error' },
        { status: 'fulfilled', value: 33 },
        { status: 'rejected', reason: '66' },
        { status: 'fulfilled', value: 99 },
      ]
    )
  })

  it('should handle async rejected promises', async () => {

    expect(await allSettled([
      Promise.reject(new Error('an error')),
      Promise.reject(new Error('an error')),
      Promise.resolve(33),
      new Promise((resolve, reject) => setTimeout(() => reject(66), 0)),
      99,
      Promise.reject(new Error('an error'))
    ])).toEqual(
      [
        { status: 'rejected', reason: 'Error: an error' },
        { status: 'rejected', reason: 'Error: an error' },
        { status: 'fulfilled', value: 33 },
        { status: 'rejected', reason: '66' },
        { status: 'fulfilled', value: 99 },
        { status: 'rejected', reason: 'Error: an error' },
      ]
    )
  })


})
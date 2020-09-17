// write your own test cases
import {flipArgs} from './flipArgs'

describe('flipArgsTest',()=>{
  it('should return a function',()=>{
    expect(typeof flipArgs()).toBe('function');
  })

  it('should reverse the arguments', () => {
    const func = (a,b,c,d)=>{ return `${a} comes before ${b} ${c} ${d}` }
    const flippedFunc = flipArgs(func);
    expect(flippedFunc(1,2,3,4)).toBe('4 comes before 3 2 1');
  })

  it('should not handle destructruing of arguments', ()=>{
    const func = ({a, b}, c) => { 
      if(!a && !b){
        return false;
      }
      return `${a} ${b} comes before ${c}` 
    }
    const flippedFunc = flipArgs(func);
    expect(flippedFunc({ a: 1, b: 2 }, 3)).toBe(false);
  })
})
//* Using iterators for practice.
//* Inspired from MDN doc's example: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#With_ES2015_class

class Cycled {

  get index(){
    return this.currentIndex;
  }

  set index(newIndex){
    this.currentIndex = newIndex;
    if (this.currentIndex >= this.list.length) {
      this.index = newIndex % (this.list.length)
    }
    else if (this.currentIndex < 0) {
      this.currentIndex = this.list.length + (newIndex % (this.list.length))
    }
  }

  constructor(list, cycleStartIndex = 0) {

    if(!Array.isArray(list)){
      throw new TypeError(`Expected list as Array, instead got ${list} of type ${typeof list}`)
    }

    if (typeof cycleStartIndex !== 'number' || Number.isNaN(cycleStartIndex)) {
      throw new TypeError(`Expected number, instead got ${cycleStartIndex} of type ${typeof cycleStartIndex}`)
    }

    this.list = list;
    this.currentIndex = cycleStartIndex;//? cycle can start from anywhere
  }


  indexOf(el){
    return this.list.indexOf(el);
  }

  current() {
    return this.list[this.index];
  }

  next(){
    this.index++;
    return this.current();
  }

  previous() {
    this.index--;
    return this.current();
  }
  
  step(offset){
    this.index+= offset;
    return this.current();
  }

  reversed(){
    this.list = [...this.list].reverse();
    return this[Symbol.iterator]();
  }

  [Symbol.iterator]() {
    let index = 0;
    return {
      next:()=>{
        if(index>=this.list.length){
          index =0
          return {done: true};
        }
        index++;
        return { value: this.list[this.index++], done: false }; 
      },
    }
  }

}


// const c = new Cycled([1,2,3,4,5]);
// const r = c.reversed();
// console.log(c.indexOf(3));
// console.log(c.previous());
// console.log(c.previous());
// console.log(c.previous());
// console.log([...c]);

// // console.log(c);


export { Cycled };

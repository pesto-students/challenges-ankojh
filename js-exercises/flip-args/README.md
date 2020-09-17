# Instructions

Create a function that invokes `func` with arguments reversed.

```js
var flipped = flipArgs(function() {
  console.log(arguments);
});
 
flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']
```

# Requirements

### **What are some good real-life use cases for such a function?**
*Write your response here*
- FlipArgs as not just reverse arguments, but can be used to order arguments correctly, developers can then just care what arguments the functions take, not the order.
Example:
```
MakeBaby(papa, mummy, 'blessingsOfGod')  // here order of arguments doesn't matter.
MakeBaby(mummy, papa, 'blessingsOfGod')  // can also produce baby
MakeBaby('blessingsOfGod', mummy, papa)  // so will this.

MakeBaby('special_blessingsOfGod', Mother_Mary)  // and so will this. JK. 

 ----xxx----- 

const MakeBaby = (OrderBaby)=>{
    return (...args)=>{

      mother = args.find(findMother);
      blessings = args.find(findBlessing);
      father = args.find(findFather);
      
      return OrderBaby(mother, blessings, father?) 
    }
}

```
- Other real-life use case, reversing an array, probably overkilling.

### **What test cases can you add to the test file?**
*Add the relevant test-cases in the test file*
- It should return a function
- It should reverse the arguments
- It should not handle arguments destructuring

# Restrictions
- Don't use any libraries
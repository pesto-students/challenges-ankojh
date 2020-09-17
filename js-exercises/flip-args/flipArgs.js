export function flipArgs(func) {
  return (...args)=>{
    return func(...args.reverse()); 
  }
}
function curry(func, ...args){
  const totalNumberOfArgs = func.length;
  return (...moreArgs)=>{ 
    if(args.length + moreArgs.length < totalNumberOfArgs){
      return curry(func, ...args, ...moreArgs)
    }
    else{
      return func(...args, ...moreArgs)
    }
  }
}

export {
  curry,
};

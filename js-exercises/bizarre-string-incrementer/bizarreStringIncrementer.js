// Start your implementation here
function padInFront(withCharacter, toString, totalLength) {
  if (totalLength > toString.length) {
    return withCharacter.repeat(totalLength - toString.length) + toString;
  }
  return toString;
}



function incrementStringifiedNumber(string, incrementBy = 1) {
  const incrementedNumber = parseFloat(string) + incrementBy;
  const indexOfDecimalPoint = string.indexOf('.');
  let decimalPrecision = 0
  if(indexOfDecimalPoint >= 0){
    decimalPrecision = string.length - 1 - indexOfDecimalPoint;
  }

  return padInFront('0', incrementedNumber.toFixed(decimalPrecision), string.length);
}



export function bizarreStringIncrementer(string) {
  const bizNumberRegEx = /(\d+\.?\d*)$/g; //dot for floats

  if (!bizNumberRegEx.test(string)) {
    return string + '1'
  }

  return string.replace(bizNumberRegEx, matchedString => incrementStringifiedNumber(matchedString, 1))
}



// let str = 'foo001.0009.9000';
// for (let i = 0; i < 10; i++) {
//   str = bizarreStringIncrementer(str)
//   console.log(str);
// }



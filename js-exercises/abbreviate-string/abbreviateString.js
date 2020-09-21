// import { isString } from "util"; //deprecated

function abbreviateString(str) {

  if (typeof str !== 'string') {
    throw `${str} is not of type 'string'`
  }

  const words = str.trim().split(' ');

  let firstWord = words[0];

  let abbreviatedLastWord = ''
  if (words.length > 1) {
    const lastWord = words[words.length - 1];
    abbreviatedLastWord = lastWord.charAt(0).toUpperCase();
    firstWord = firstWord.charAt(0).toUpperCase() + firstWord.substring(1).toLowerCase();
  }

  return `${firstWord}${abbreviatedLastWord && (' ' + abbreviatedLastWord+'.')}`;
}

// const textCases = ['ankojh', 'Ankit ojha', 'Ankit kumar ojha', 'a kumar o', ' a  k     o ']
// textCases.forEach(t=>console.log(abbreviateString(t)));

export { abbreviateString };

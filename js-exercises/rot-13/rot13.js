const ROT13_SHIFT_PLACES_COUNT = 13;
const FIRST_CHARACTER_ASCII_VALUE = 65; // A
const CHARACTERS_RANGE = 26; // 26 Alphabets


function shouldDecodeCharacter(asciiValueOfCharacter) {
  return asciiValueOfCharacter >= FIRST_CHARACTER_ASCII_VALUE &&
    asciiValueOfCharacter < (FIRST_CHARACTER_ASCII_VALUE + CHARACTERS_RANGE);
}



function decodeCharacter(asciiValueOfCharacter) {

  if (!shouldDecodeCharacter(asciiValueOfCharacter)) {
    return asciiValueOfCharacter;
  }

  let decodedAsciiValueOfCharacter = asciiValueOfCharacter - ROT13_SHIFT_PLACES_COUNT;

  //bring back to range
  if (decodedAsciiValueOfCharacter < FIRST_CHARACTER_ASCII_VALUE) {
    decodedAsciiValueOfCharacter += CHARACTERS_RANGE
  }

  return decodedAsciiValueOfCharacter
}


function rot13(encodedString) { //rot13Decoder

  if(typeof encodedString !== 'string'){
    throw 'Received A Non-String Value'
  }

  //exit end
  if (!encodedString) {
    return encodedString
  }

  const asciiValueOfFirstCharacter = encodedString.charCodeAt();
  const decodedAsciiValueOfFirstCharacter = decodeCharacter(asciiValueOfFirstCharacter);
  const decodedFirstCharacter = String.fromCharCode(decodedAsciiValueOfFirstCharacter);

  return `${decodedFirstCharacter}${rot13(encodedString.substring(1))}`;
}


// const testCases = ['ankit', '', 'AnKiT.ojhA', 'ANKIT123'] // undefined, null, 12]
// testCases.forEach(t=>console.log(rot13(t)));

export {
  rot13,
};

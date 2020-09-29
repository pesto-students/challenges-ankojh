//  alternating
//   / ˈɔːltəneɪtɪŋ /
// adjective
//   (of two or more things) occurring in turn repeatedly.

//two or more, not one,
//AAAAA => 4 not 0


//for two characters it's easy, but for more???
// ABCABCABCABC
// ABCDABCDABCDABCD


// ABCDBCDABCD => 2(A,A) not 3(B,C,D)


//does multiple(more than two) alternating characters becomes a problem of alternating strings????
//probably yes, but alternating two characters (a string of characters??) can also be said as alternating strings.


//isEmptyString '' alternating? Yes 0 characters are alternating, number of deletions is obviously zero


function getAllSubstringsOfLength(string, lengthOfSubstring) {
  const numberOfSubstrings = string.length - lengthOfSubstring + 1;
  const substrings = new Set();
  for (let i = 0; i < numberOfSubstrings; i++) {
    substrings.add(string.substr(i, lengthOfSubstring));
  }
  return Array.from(substrings);
}



function doesStringHasAllCharactersUnique(string) {
  const charMap = {}
  for (let char of string) {
    if (charMap[char]) {
      return false;
    }
    charMap[char] = true;
  }

  return true;
}


function getDeletionCountToAlternateStringWithSubstring(string, substring) { //memo it??. nah using set for substring gen.
  let deletionCount = 0;
  for (let i = 0; i < string.length; i++) {
    const currentSubstring = string.substr(i, substring.length);
    if (currentSubstring === substring.substr(0, currentSubstring.length)) {
      i = i + currentSubstring.length - 1;
    }
    else {
      deletionCount++
    }
  }
  return deletionCount;
}



function getMinDeletionCountToAlternateString(string) {

  const minDeletionCountsForEachLengthSubstring = []
  for (let i = string.length; i > 1; i--) {
    const substrings = getAllSubstringsOfLength(string, i).filter(doesStringHasAllCharactersUnique);
    
    //handle single characters alternating
    if (!substrings.length) {
      minDeletionCountsForEachLengthSubstring.push(string.length - 1)
      continue;
    }

    const deletionCountWithSubstrings =
      substrings.map(substring => getDeletionCountToAlternateStringWithSubstring(string, substring))

    minDeletionCountsForEachLengthSubstring.push(Math.min(...deletionCountWithSubstrings));
  }

  return Math.min(...minDeletionCountsForEachLengthSubstring)
}


function alternatingCharacters(arrOfStrings) {
  return arrOfStrings.map(getMinDeletionCountToAlternateString);
}


export { alternatingCharacters };

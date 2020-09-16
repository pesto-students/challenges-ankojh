function duplicateLetters(string) {
// Input range not specified, considering lowercase alphabets only.
  const charMap = Array(26).fill(0);

  for (let character of string) {
    const charIndex = character.charCodeAt() - 97;
    charMap[charIndex]++
  }

  const maxOccurance = Math.max(...charMap);
  return maxOccurance > 1 && maxOccurance;
}

export {
  duplicateLetters,
};

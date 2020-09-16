
const BRACES_BRACKETS_PARENTHESIS = ['{', '}', '(', ')', '[', ']'];
const OPENING_BBP = ['{', '(', '['];
const CLOSING_BBP = ['}', ')', ']'];
const CLOSING_BBP_COUNTERPART = {
  '}': '{',
  ']': '[',
  ')': '('
}



function balancedBraces(string) {
  const stack = [];

  for (let char of string) {


    if (!BRACES_BRACKETS_PARENTHESIS.includes(char)) {
      continue;
    }


    if (OPENING_BBP.includes(char)) {
      stack.push(char);
      continue;
    }


    if (CLOSING_BBP.includes(char)) {
      const lastBBP = stack.pop();
      if (lastBBP !== CLOSING_BBP_COUNTERPART[char]) {
        return false;
      }
    }



  }

  return stack.length == 0;
}

export {
  balancedBraces,
};

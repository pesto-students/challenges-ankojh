const OPERATORS = {
  '!': { precedence: 17, operands: 1, func: r => !r },
  '&': { precedence: 10, operands: 2, func: (l, r) => l & r },
  '^': { precedence: 9, operands: 2, func: (l, r) => l ^ r },
  '|': { precedence: 8, operands: 2, func: (l, r) => l | r },
}

const TOKEN_MAP = {
  true: true,
  false: false
}


function getIndexOfLeastPrecedenceOperator(tokens) {
  let leastPrecedenceIndex = -1;
  let leastPrecedence = Infinity
  tokens.forEach((token, index) => {
    if (OPERATORS[token] && (leastPrecedence > OPERATORS[token].precedence)) {
      leastPrecedenceIndex = index;
      leastPrecedence = OPERATORS[token].precedence
    }
  })

  return leastPrecedenceIndex;
}

function createParseTree(tokens) {

  if (tokens.length === 0) {
    return null;
  }


  const leastPrecedenceIndex = getIndexOfLeastPrecedenceOperator(tokens)

  if (leastPrecedenceIndex === -1) {
    if (tokens.length === 1) {
      const token = tokens[0]
      if (OPERATORS[token[0]] && OPERATORS[token[0]].operands === 1) {
        return {
          operator: token[0],
          left: null,
          right: createParseTree([token.slice(1)])
        }
      }
      else {
        if (!TOKEN_MAP.hasOwnProperty(token)) {
          throw new Error(`Token: '${token}' is not a known token`)
        }
        return token;
      }
    }
    else {
      throw new Error('Invalid Syntax');
    }
  }

  const root = {
    operator: tokens[leastPrecedenceIndex],
    left: createParseTree(tokens.slice(0, leastPrecedenceIndex)),
    right: createParseTree(tokens.slice(leastPrecedenceIndex + 1))
  }

  return root;
}


function evaluateParseTree(parseTree) {

  if (!parseTree) {
    return null
  }

  if (!parseTree.operator) {
    return TOKEN_MAP[parseTree];
  }

  const operator = parseTree.operator;
  const leftValue = evaluateParseTree(parseTree.left);
  const rightValue = evaluateParseTree(parseTree.right);

  const args = []

  leftValue !== null && args.push(leftValue)
  rightValue !== null && args.push(rightValue)

  if (args.length !== OPERATORS[operator].operands) {
    throw new Error(`Operator '${operator}' requires exactly ${OPERATORS[operator].operands} operand(s), given ${args.length} operand(s)`)
  }

  return Boolean(OPERATORS[operator].func(...args));
}


function booleanExpressionEvaluator(expression) {
  if (typeof expression !== 'string') {
    throw new TypeError(`Given expression: ${expression} is not of type 'string'`);
  }


  const tokens = expression.split(' ');
  const tree = createParseTree(tokens);
  const value = evaluateParseTree(tree);

  return value;
}


export { booleanExpressionEvaluator };

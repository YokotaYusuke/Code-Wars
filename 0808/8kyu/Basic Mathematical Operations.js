
// 期待する値

('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7


// mine
// switch文でreturn 書けばbreak要らない

function basicOp(operation, value1, value2) {
  switch (operation) {
      case "+":
        return value1 + value2;
        break;
      case "-":
        return value1 - value2;
        break;
      case "*":
        return value1 * value2;
        break;
      case "/":
        return value1 / value2;
        break;
  }
}

// best

// eval()関数は文字列として表現されたコードを評価する

function basicOp(o, a, b) {
  return eval(a+o+b);
}

// other

function basicOp(operation, value1, value2) {
  switch (operation) {
      case '+':
          return value1 + value2;
      case '-':
          return value1 - value2;
      case '*':
          return value1 * value2;
      case '/':
          return value1 / value2;
      default:
          return 0;
  }
}




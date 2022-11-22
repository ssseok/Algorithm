// naive solution
// const balancedBrackets = function (str) {
//   const stack = [];
//   const opener = '(';
//   const closer = ')';

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === opener) {
//       stack.push(str[i]);
//     } else if (str[i] === closer) {
//       const top = stack.pop();
//       if (top !== opener) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// };

const balancedBrackets = function (str) {
  const stack = [];
  const opener = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const closer = "}])";

  for (let i = 0; i < str.length; i++) {
    if (str[i] in opener) {
      stack.push(str[i]);
    } else if (closer.includes(str[i])) {
      const top = stack.pop();
      const pair = opener[top];
      if (pair !== str[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// 입출력 예시
let output = balancedBrackets("(");
console.log(output); // // -> false

output = balancedBrackets("()");
console.log(output); // --> true

// Advanced
let output3 = balancedBrackets("[](){}");
console.log(output3); // --> true

output3 = balancedBrackets("[({})]");
console.log(output3); // --> true

let output5 = balancedBrackets("[(]{)}");
console.log(output5); // --> false

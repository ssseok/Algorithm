function modulo(num1, num2) {
  if (num2 === 0) {
    return "Error: cannot divide by zero";
  }

  while (num1 >= num2) {
    num1 = num1 - num2;
  }

  return num1;
}

// 입출력 예시
let output = modulo(25, 4);
console.log(output); // --> 1

function computeSquareRoot(num) {
  // TODO: 여기에 코드를 작성합니다.
  return Number(Math.pow(num, 0.5).toFixed(2));
}

//입출력 예시
let output = computeSquareRoot(9);
console.log(output); // --> 3

output = computeSquareRoot(6);
console.log(output); // --> 2.45

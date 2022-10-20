const largestProductOfThree = function (arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  const len = arr.length;
  const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
  const candi2 = sorted[len - 1] * sorted[0] * sorted[1];
  return Math.max(candi1, candi2);
};

// 입출력 예시
let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)

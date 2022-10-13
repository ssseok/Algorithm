/**
문제
수를 입력받아 제곱근 값을 소수점 두 자리까지 리턴해야 합니다.

입력
인자 1 : num
number 타입의 정수 (num >= 2)

출력
number 타입을 리턴해야 합니다.
최대 소수점 둘째 짜리까지 구합니다. (소수점 셋째 자리에서 반올림)

주의 사항
Math.sqrt 사용은 금지됩니다.
 */
function computeSquareRoot(num) {
  // TODO: 여기에 코드를 작성합니다.
  return Number(Math.pow(num, 0.5).toFixed(2));
}

//입출력 예시
let output = computeSquareRoot(9);
console.log(output); // --> 3

output = computeSquareRoot(6);
console.log(output); // --> 2.45

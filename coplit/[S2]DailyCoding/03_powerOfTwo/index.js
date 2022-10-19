function powerOfTwo(num) {
  // TODO: 여기에 코드를 작성합니다.
  while (num & (num - 1)) {
    return false;
  }
  return true;
}
// 입출력 예시
let output1 = powerOfTwo(16);
console.log(output1); // true
let output2 = powerOfTwo(22);
console.log(output2); // false

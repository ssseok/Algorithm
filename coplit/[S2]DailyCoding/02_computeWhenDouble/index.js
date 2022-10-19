function computeWhenDouble(interestRate) {
  let myMoney = 1;
  let year = 0;

  while (myMoney < 2) {
    myMoney = myMoney + (myMoney * interestRate) / 100;
    year++;
  }
  return year;
}
// 입출력 예시
let output = computeWhenDouble(7);
console.log(output); // --> 11

output = computeWhenDouble(10);
console.log(output); // --> 8

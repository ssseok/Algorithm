function numberSearch(str) {
  const digits = "0123456789";

  if (str === "") {
    return 0;
  }

  let sum = 0;
  let pureStr = "";
  for (let i = 0; i < str.length; i += 1) {
    if (digits.includes(str[i])) {
      // 숫자인 경우
      sum = sum + Number(str[i]);
    } else if (str[i] !== " ") {
      // 숫자도 공백도 아닌 경우
      pureStr = pureStr + str[i];
    }
  }

  // 결과를 반올림 한다.
  return Math.round(sum / pureStr.length);
}

let output = numberSearch("Hello6 ");
console.log(output); // --> 1

output = numberSearch("Hello6 9World 2,");
console.log(output); // --> 2

output = numberSearch("Hello6 9World 2, Nic8e D7ay!");
console.log(output); // --> 2
// 입출력 예시

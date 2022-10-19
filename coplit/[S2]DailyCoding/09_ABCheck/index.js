function ABCheck(str) {
  if (str === undefined) {
    return false;
  }

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (
      (str[i] === "a" && str[i + 4] === "b") ||
      (str[i] === "b" && str[i + 4] === "a")
    ) {
      return true;
    }
  }
  return false;
}
// 입출력 예시
let output = ABCheck("lane Borrowed");
console.log(output); // --> true

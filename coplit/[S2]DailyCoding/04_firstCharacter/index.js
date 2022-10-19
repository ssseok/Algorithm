function firstCharacter(str) {
  if (str === "") {
    return "";
  }

  let words = str.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i += 1) {
    result = result + words[i][0];
  }
  return result;
}
// 입출력 예시
let output = firstCharacter("hello world");
console.log(output); // --> "hw"

output = firstCharacter(
  "The community at Code States might be the biggest asset"
);
console.log(output); // --> "TcaCSmbtba"

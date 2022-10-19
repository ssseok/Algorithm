function firstReverse(str) {
  // TODO: 여기에 코드를 작성합니다.
  return [...str].reverse().join("");
}
// 입출력 예시
let output = firstReverse("codestates");
console.log(output); // "setatsedoc"

output = firstReverse("I love codestates");
console.log(output); // "setatsedoc evol I"

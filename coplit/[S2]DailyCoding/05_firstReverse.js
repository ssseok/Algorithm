/**
문제
문자열을 입력받아 순서가 뒤집힌 문자열을 리턴해야 합니다.

입력
인자 1 : str
string 타입의 문자열

출력
string 타입을 리턴해야 합니다.
 */
function firstReverse(str) {
  // TODO: 여기에 코드를 작성합니다.
  return [...str].reverse().join("");
}
// 입출력 예시
let output = firstReverse("codestates");
console.log(output); // "setatsedoc"

output = firstReverse("I love codestates");
console.log(output); // "setatsedoc evol I"

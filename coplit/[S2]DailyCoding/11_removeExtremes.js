/**
문제
문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열을 리턴해야 합니다.

입력
인자 1 : arr
string 타입을 요소로 갖는 배열
arr[i].length는 20 이하

출력
배열을 리턴해야 합니다.

주의 사항
가장 짧은 문자열의 길이와 가장 긴 문자열의 길이가 같은 경우는 없습니다.
가장 짧은 문자열 또는 가장 긴 문자열이 다수일 경우, 나중에 위치한 문자열을 제거합니다.
 */
function removeExtremes(arr) {
  let shortestLen = 20;
  let longestLen = 0;
  let shortestIdx = 0;
  let longestIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= longestLen) {
      longestLen = arr[i].length;
      longestIdx = i;
    }
    if (arr[i].length <= shortestLen) {
      shortestLen = arr[i].length;
      shortestIdx = i;
    }
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== shortestIdx && i !== longestIdx) {
      result.push(arr[i]);
    }
  }
  return result;
}
//입출력 예시
let output = removeExtremes(["a", "b", "c", "def"]);
console.log(output); // --> ['a', 'b']

output = removeExtremes(["where", "is", "the", "longest", "word"]);
console.log(output); // --> ['where', 'the', 'word',]

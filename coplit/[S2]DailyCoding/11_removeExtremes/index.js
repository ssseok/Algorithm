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

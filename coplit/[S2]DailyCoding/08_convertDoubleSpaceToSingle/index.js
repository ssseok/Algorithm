function convertDoubleSpaceToSingle(str) {
  return str.split("  ").join(" ");
}
// 입출력 예시
let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

function isIsogram(str) {
  // TODO: 여기에 코드를 작성합니다.
  if (str.length === 0) {
    return true;
  }
  const b = str.toLowerCase();
  const str2 = [...new Set(b)].join("");
  const a = str2.toLowerCase();
  return a === b ? true : false;
}

//입출력 예시
let output = isIsogram("aba");
console.log(output); // false

output = isIsogram("Dermatoglyphics");
console.log(output); // true

output = isIsogram("dropOut");
console.log(output); // false

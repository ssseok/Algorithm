function letterCapitalize(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
  }

  str = words.join(" ");
  return str;
}
// 입출력 예시
let output1 = letterCapitalize("hello world");
console.log(output1); // "Hello World"
let output2 = letterCapitalize("javascript  is sexy ");
console.log(output2); // "Javascript  Is Sexy "

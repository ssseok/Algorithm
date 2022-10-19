function readVertically(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    for (let j = 0; j < str.length; j++) {
      if (temp.length === j) {
        temp.push(str[j]);
      } else {
        temp[j] = temp[j] + str[j];
      }
    }
  }

  let result = "";
  for (let i = 0; i < temp.length; i++) {
    result = result + temp[i];
  }

  return result;
}

// 입출력 예시
let input = [
  //
  "hello",
  "wolrd",
];
let output = readVertically(input);
console.log(output); // --> 'hweolllrod'

input = [
  //
  "hi",
  "wolrd",
];
output = readVertically(input);
console.log(output); // --> 'hwiolrd'

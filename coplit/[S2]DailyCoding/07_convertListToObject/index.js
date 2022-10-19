function convertListToObject(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 0 && result[arr[i][0]] === undefined) {
      result[arr[i][0]] = arr[i][1];
    }
  }

  return result;
}
// 입출력 예시
const arr = [
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", "1964"],
  ["make", "Bill"],
];

let output = convertListToObject(arr);

console.log(output); // -->
//   {
//     make : 'Ford'
//     model : 'Mustang',
//     year : '1964'
//   }

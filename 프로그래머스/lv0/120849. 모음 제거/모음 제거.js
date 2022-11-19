function solution(my_string) {
    let arr1 = ["a", "e", "i", "o", "u"];
    let arr2 = [...my_string];
   return arr2.filter((el,idx) => !arr1.includes(el)).join("")
}
function solution(n) {
   return Number(n.toString().split("").sort((a, b) => {return b-a}).join(""))
}
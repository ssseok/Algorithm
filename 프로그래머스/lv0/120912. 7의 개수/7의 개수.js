function solution(array) {
    let arr = array.join("")
    
   return [...arr].filter(a => a === "7").length
}
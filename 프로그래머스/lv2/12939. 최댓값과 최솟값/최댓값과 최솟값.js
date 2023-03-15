function solution(s) {
    let arr = s.split(" ");
    let arr2 = arr.sort((a,b) => a-b);
    let head = arr2.shift()
    let last = arr2.pop()
    return `${head} ${last}`
    
}
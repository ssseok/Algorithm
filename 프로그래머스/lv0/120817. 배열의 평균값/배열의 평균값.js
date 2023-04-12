function solution(numbers) {
    let a = numbers.reduce((acc,cur) => acc+cur,0) / numbers.length
    return a.toFixed(1)
}
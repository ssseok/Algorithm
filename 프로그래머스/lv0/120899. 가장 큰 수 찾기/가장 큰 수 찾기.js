function solution(array) {
    let max = Math.max(...array)
    let idx =array.indexOf(max)
    return [max,idx]

}
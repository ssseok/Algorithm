function solution(s) {
    let a = [...s.split(" ")].map((a) => Number(a))
    return `${Math.min(...a)} ${Math.max(...a)}`
}
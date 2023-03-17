function solution(A,B){
    // 값 담는 배열
    let C = []
    // 최솟값을 구해야해서 B의 배열을 큰수부터 나열
    let Bsort = B.sort((a,b) => b-a)
    let Asort = A.sort((a,b) => a-b)
    // for문으로 배열의 길이로 돌아 C에 담는다.
    for(let i=0; i<A.length; i++) {
         C.push(Asort[i] * Bsort[i])
    }
    // reduce를 사용하여 누적값을 담아 더한다.
    return C.reduce((acc,cur) => acc + cur, 0)
}
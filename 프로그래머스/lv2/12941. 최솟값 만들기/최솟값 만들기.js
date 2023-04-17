function solution(A,B){
    let answer = 0
    let sort1 = A.sort((a,b) => a-b);
    let sort2 = B.sort((a,b) => b-a);
    for(let i=0; i<A.length; i++) {
        answer += Math.min(sort1[i]) * Math.min(sort2[i])
        
    }
    return answer
}
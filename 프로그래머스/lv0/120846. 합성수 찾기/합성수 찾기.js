function solution(n) {
    // let idx = 0
    // for(let i=4; i<=n; i++) {
    //     if(i % 2 === 0 || i % 3 === 0) idx++
    // }
    // return idx
    
        let answer = 0
    
    for(let i = 1; i <= n; i++) {
        let cnt = 0
        for(j = 0; j <= i; j++) {
            if(i % j === 0) cnt ++
        }
        
        if(cnt > 2) {
            answer += 1
        }
    }
    
    return answer
}
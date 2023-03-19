function solution(n) {
    let arr = [];
    for(let i=1; i<=n; i++) {
        if(n % i === 0 && i % 2 === 1) {
            arr.push(i)
        }
    }
    return arr.length
    // let answer = 0;
    // for (let i = 1; i <= n; i++) {
    //     if (n % i === 0 && i % 2 === 1) answer++;
    // }
    // return answer;

    
}
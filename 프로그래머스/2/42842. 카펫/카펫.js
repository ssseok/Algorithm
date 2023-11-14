function solution(brown, yellow) {
     let answer = [];
    let total = brown + yellow;
    
    for (let i = 3; i <= Math.floor(total / 3); i++) {
        if (total % i === 0) {
            let width = total / i;
            let height = i;
            
            if ((width - 2) * (height - 2) === yellow) {
                answer.push(width);
                answer.push(height);
                break;
            }
        }
    }
    
    return answer;
    
}
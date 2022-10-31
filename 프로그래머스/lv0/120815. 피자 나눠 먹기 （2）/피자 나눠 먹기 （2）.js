function solution(n) {
    let cnt = 1;
    while(true) {
        if(cnt * 6 % n === 0) {
            return cnt;
        }
        cnt++;
    }
}
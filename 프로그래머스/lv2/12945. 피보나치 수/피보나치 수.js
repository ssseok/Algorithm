

function solution(n) {
    let fNum = [0, 1, 1];
    for(let i = 3; i <= n; i++) {
      fNum[i] = (fNum[i - 1] + fNum[i - 2])%1234567;
    }
    return fNum[n];
}
function solution(x) {
    let arr = [...""+x].map(a => Number(a));
    let a = 0;
    for(let i =0; i<arr.length; i++) {
        a+=arr[i]
    }
    return x % a === 0
}
function solution(arr, divisor) {
    let arr1 = [];
    
    for(item of arr) {
        if(item % divisor === 0) {
            arr1.push(item)
        } 
    }
    return arr1.length === 0 ? [-1] : arr1.sort((a,b) => a-b)
}

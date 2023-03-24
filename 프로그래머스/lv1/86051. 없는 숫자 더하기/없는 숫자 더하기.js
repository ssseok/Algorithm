function solution(numbers) {
    let num = 0;
    for(let i=0; i<10; i++){
        if(!numbers.includes(i)){
            num += i;
        }
    }
    return num;
}
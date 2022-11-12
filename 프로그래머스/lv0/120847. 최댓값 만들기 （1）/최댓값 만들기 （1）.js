function solution(numbers) {
    const sortArr = numbers.sort((a,b) => b-a);
    return sortArr[0]*sortArr[1]
    
}
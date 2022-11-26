function solution(my_string) {
    let arr = [...my_string].map(el => Number(el));
    let arr2 = arr.filter(el => !isNaN(el))
    return arr2.sort((a,b) => a-b)
   
   
}
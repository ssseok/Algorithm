// function solution(my_string) {
//     let arr = [...my_string];
//     let arr2 = arr.filter(a => isNaN(a))
//     let shift = +arr.shift()
//     let pop = +arr.pop()
//     if(arr2.join() === "+") {
//         console.log(arr.shift())
//        return shift + pop
//     } else {
//         return shift - pop
//     }
// }

function solution(my_string) {
    const splited = my_string.split(" ");
    
    let ans = Number(splited[0]);
    
    splited.forEach((item, index) => {
        if(item === "+"){
            ans += Number(splited[index + 1]);
        }
        
        if(item === "-"){
            ans -= Number(splited[index + 1]);
        }
    })
    
    return ans;
}
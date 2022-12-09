function solution(my_string) {
    let arr = [...my_string]
    let newArr = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === arr[i].toLowerCase()){
            newArr.push(arr[i].toUpperCase())
        } else {
            newArr.push(arr[i].toLowerCase())
        }
    }
    return newArr.join("")
    
    
}
function solution(order) {
    let string = order.toString()
    let arr = [...string]
    let arr2 = []
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === "3") {
            arr2.push(arr[i])
        }
        if(arr[i] === "6") {
            arr2.push(arr[i])
        }
        if(arr[i] === "9") {
            arr2.push(arr[i])
        }
    }
    return arr2.length
}
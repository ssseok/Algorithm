function solution(i, j, k) {
    let answer = 0;
    let nums =[]
    for(i;i<=j;i++){

        nums.push(i)

    }
    
    console.log(nums)

    nums.map((e) => {

        return String(e)


    }).join('').split('').map((e)=>{
        if(e == k){
            answer += 1 
        }
    })

    return answer;
}
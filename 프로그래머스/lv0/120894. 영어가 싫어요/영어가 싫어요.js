function solution(numbers) {
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    //변수명을 헷갈리게 지어서 numbers.length까지 했었다.. 변수명도 잘 지어야겠다.. 😂
    for(let i = 0; i < num.length; i++){
      //split을 num[i] 기준으로 자르고 잘린곳을 i로 메꿔주는 방식(?)이다.
        numbers = numbers.split(num[i]).join(i)
    }
    
  	//split은 string이라 마지막에 number로 형 변환을 해줬다.
    return Number(numbers)
}
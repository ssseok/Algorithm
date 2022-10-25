function solution(denum1, num1, denum2, num2) {
    let mul = num1*num2;
    let mul2 = denum1*num2+denum2*num1;
    let min;
    if(mul2 < mul) {
        min = mul2
    } else {
        min = mul
    }
    while(true){
        if(mul2 % min === 0) {
            if(mul % min === 0) {
                return [mul2 / min, mul/min]
            }
        }
        min = min -1
    }
}
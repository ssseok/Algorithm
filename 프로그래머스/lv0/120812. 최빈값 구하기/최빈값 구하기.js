function solution(array) {
    const sortedArray = array.sort((a,b) => a-b)
    let cnt = 0;
    
    let choi = -1; // 최빈값이 뭔지
    let choiRepeatCnt = 0; //최빈값이 될때 몇번 반복해서 된건지
    let repeatCnt = 0; // 현재 똑같은 숫자가 몇번 등장했는지
    let beforeNumber = -1 // 지금 보고있는 숫자 이전
    let isDupChoi = false;

    while(cnt < array.length) {
        if(beforeNumber !== array[cnt]) {
            repeatCnt = 1;
        } else {
            repeatCnt++;
        }
        if(repeatCnt === choiRepeatCnt && choi !== array[cnt]){
            isDupChoi = true;
        }
        if(repeatCnt > choiRepeatCnt) {
            choi = array[cnt];
            choiRepeatCnt = repeatCnt;
            isDupChoi = false;
        }
        beforeNumber = array[cnt];
        cnt++;
    }
    if(isDupChoi) return -1; 
    return choi;
}
// 배열 안 중복찾기

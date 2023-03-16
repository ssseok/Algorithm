function solution(s) {
    let str = s.toLowerCase().split(" ") // 일단 소문자로 다 통일 시킨후 나눈다.
    // return str.map((a) => a[0].toUpperCase() + a.slice(1).toLowerCase()).join(" ") // map으로 돌려 a[0] 첫번째 요소는 대문자로 바꾸고 + a.slice(1) 첫번째 요소를 제외한 두번째 요소부터 끝까지 소문자로 바꾼후 join(" ") 공백으로 합친다. // 하지만 런타임 에러 발생 ㅋㅋ
    
     return str.map((a) => a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()).join(" ") // 위에 풀이가 런타임 문제가 나서 a[0] 이렇게 첫번째요소로 가져오는게 런타임 문제였던거 같다 그래서 charAt 을 사용해 문자열 첫번째를 사용
    
}
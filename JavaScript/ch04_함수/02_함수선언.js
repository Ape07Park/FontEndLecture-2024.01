// 선언적 함수
function add(a, b){ // a, b - 매개변수(parameter, argument)
    return a + b; // 반환값
}
console.log(add(3,4));
console.log(add(8,9));


// 익명(Anonymous) 함수: 
const anonymousSum = function(a, b){
    return a + b;
}
console.log(anonymousSum(3, 4));
console.log(anonymousSum(8, 9));

// 화살표 함수, 람다 함수 -- 많이 쓰임, 파라미터 1개면 () 필요 x 
const arrowSum = (a,b) => a + b; // 어떤 내용물 나올 수도 있지만 여기선 return
console.log(arrowSum(3, 4));
console.log(arrowSum(8, 9));





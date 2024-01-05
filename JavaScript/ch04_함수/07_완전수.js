// 완전수 구하기

// 1. 자기 자신을 제외한 약수의 합 구하는 함수
function sumOfDivisors(num){
        let divSum = 0;
        for (let i=1; i < num; i++){ // 1에서 부터 자기자신 전까지
            if (num % i == 0){
            divSum +=i; // 약수의 합 구하기
            } 
    }
    return (divSum);
}
console.log(sumOfDivisors(15));




// 2. 2에서 부터 10000사이의 완전수 구하기
function perfectNumber(){
    a = []
    for (let i =2; i <= 10000; i++){
        let divSum = 0;
        for (let k=1; k < i; k++){ // 1에서 부터 자기자신 전까지
            if (i % k == 0){
            divSum +=k; // 약수의 합 구하기
            } 
        } 
        if (i ==divSum){
            a.push(i);
        }
    }
    return (a);
}
console.log(perfectNumber());

// 3. 1번 함수 적용해 2번 풀기 - 구조화된 코드, 사고의 흐름, 로직의 흐름을 조각조각 나누어서 필요한 코드만을 써서 간결하게 작성
for (let i =2; i <= 10000; i++){
    if (i == sumOfDivisors(i)){
        console.log(i);
    }
}

// 공통된 요소가 있으면 함수로 만들기



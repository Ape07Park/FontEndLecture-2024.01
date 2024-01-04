// 1 ~ 1000까지 합 구하기
let sum = 0;
for(let i = 1; i <= 1000; i++){
    sum +=i;
}
console.log(sum);

//1 ~ 1000까지 홀수 합 구하기
let oddSum = 0;
for(let i = 1; i <= 1000; i+=2){
    oddSum +=i;
}
console.log(oddSum);

let evenSum = 0;
for(let i = 2; i <= 1000; i+=2){
    evenSum +=i;
}
console.log(evenSum);

// 1에서 10까지 곱 구하기
let product = 1;
for(let i = 1; i <= 10; i++){
    product *=i;
}
console.log(product);

// array의 요소 출력
//element1, element2, ..
// for 문에서 중요한 건 초기값을 미리 세팅하자  +: 0/ 문자열: 빈 스트링/ *:1
let fruits = ["사과", "감","귤", "배"];
let fruitStr = '';
for(let fruit of fruits){
    fruitStr += fruit + ',';
}
console.log(fruitStr);


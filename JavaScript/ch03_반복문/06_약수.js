// 양의 정수 구하기
let num = 12
let divisors = [];
for(let i =1; i <= 12; i++){ // 경우의 수를 다 구하기 위해 i를 1 ~ 12까지 나오게함
    if(num % i == 0){ // i로 num을 나눈 것 중 나머지가 0인 것을 통과시킴 
        divisors.push(i);
    }
}
console.log(divisors);

// sum = 0 / fact = 1 / str = '' / arr = []

// 두 수의 공약수 구하기
let num1 = 24, num2 = 60;
let commonDivisors = [];
for(let i = 1; i <= Math.min(num1, num2); i++){
    if(num1 % i == 0 && num2 % i == 0){
        commonDivisors.push(i);
    }
}
console.log(commonDivisors);


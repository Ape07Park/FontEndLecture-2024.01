// 점수에 따른 학점 구하기
// 90 ~ 100:A
// 80 ~ 89: B
// 70 ~ 79: C
// 60 ~ 69: D
// ~ 59: F

let score = Math.ceil(Math.random() * 60) + 40; // 41 ~ 100사이의 정수
let grade = '';

if(score >= 90){
    grade = 'A';
}else if(score >= 80){
    grade = 'B';
}else if(score >= 70){
    grade = 'C';
}else if(score >= 60){
    grade = 'D';
}else{
    grade = 'F';
}

console.log(`점수:${score}, 학점: ${grade}`);

// 범위가 작은 거 부터 큰 거로 간다

/* 5의 배수면 Fizz
7의 배수면 Buzz
5, 7 의 공배수면 Fizz Buzz
아니면 숫자
*/

if(score % 5 == 0 && score % 7 == 0){ // if(score % 35 == 0)
    grade = "Fizz_Buzz";
}else if(score % 7 == 0){
    grade = "Buzz";
}else if(score % 5 == 0){
    grade = "Fizz";
}else{
    grade = "none";
}
console.log(`판별:${grade}`);



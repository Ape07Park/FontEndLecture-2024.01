// 홀수 짝수
let num = Math.ceil(Math.random() * 100);  // 1 ~ 100사이 정수값 생성
//ceil 올림
if(num % 2 == 0){
    console.log(`${num}은 짝수`);
}

if(num % 1 == 0){
    console.log(`${num}은 홀수`);
}
// 코드가 길어지면 실수 증가하니 가능하면 적게 쓰는 방향으로 가자
num = Math.ceil(Math.random() * 100);
if(num % 2 == 0){
    console.log(`${num}은 짝수`);
}else{
    console.log(`${num}은 홀수`);
}
// 조건문 안에 들어있는 실행문이 하나면 중괄호{} 생략 o

num = Math.ceil(Math.random() * 100);

if(num % 2 == 0)
    console.log(`${num}은 짝수`);
else
    console.log(`${num}은 홀수`);

// 3항 연산자, front-end 처리시 사용(명령어 한 줄밖에 못쓰면 반드시 써야함)
num = Math.ceil(Math.random() * 100);
let result = (num % 2 == 0) ? '짝수':'홀수' // (조건) ? 참일 시 값: 거짓일 때 값
console.log(`${num}은 ${result}`);

// 내가 시기 적절하게 조건을 걸어야 함
// 암기 후 코딩하며 이해 

/* 궁극적으론 문제해결 문제가 너무 크면 divide conquer 즉 너무 복잡하면 쪼개라 */



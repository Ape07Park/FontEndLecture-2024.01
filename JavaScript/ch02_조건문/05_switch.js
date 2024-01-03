let score = Math.ceil(Math.random() * 60) + 40; // 41 ~ 100사이의 정수
let grade = '';
// switch-case쓰면 코드가 깔끔해짐
// case에 어떻게 걸리게 조건값을 줄것인가 

switch(parseInt(score / 10)){ // parseInt: 소수점 자르기
    case 10:
    case 9:
        grade = 'A'; break; // break만나면 switch문 벗어남
    case 8:
        grade = 'B'; break;
    case 7:
        grade = 'C'; break;
    case 6:
        grade = 'D'; break;
    default:
        grade = 'F';
}
console.log(`점수:${score}, 학점: ${grade}`);


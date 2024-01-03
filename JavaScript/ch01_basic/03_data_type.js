// 자바스크립트의 자료형

// 1. Number

// 마우스로 다 잡고 alt shift a면 다 주석처리
/* console.log(5 +2);
console.log(5 + 2, 5 -2, 5 * 2, 5 / 2); // +, -, *, /
console.log(5 % 2); //modulo: 나머지
console.log(2 ** 10); // 2의 10제곱, 1024(1k)
console.log(1.3e-8); // 1.3 x 10 ** -8 */

// 2. 문자열
console.log('He said "I love you"');
console.log("i'll be back");
console.log("He said \"I love you\"") // escaping
console.log("Back slash(\\) 기호를 사용할 때에는 \\ 두개를 쓰면 됩니다.");

let hello = "안녕하세요?";
console.log(hello[2], hello[5]) // 시작은 0부터 따라서 안 하 출력

// template literal 물결(`)
let a = 2, b = 3;
console.log(a,"더하기", b, '은', 2+3,"입니다"); 
console.log(`${a} 더하기 ${b} 은 ${a+b} 임`);
console.log(`올해는 ${new Date().getFullYear()}년 입니다`);
// snake case: full_year -python에서 사용
// camel case: FullYear --> Getter method --> getFullYear -java에서 사용
// 식별자는 소문자 시작 class는 대문자 시작 


// 프로그래밍을 잘한다는 건 조건문 반복문 잘 활용
// 모든 가능한 경우의 수를 반복문으로 돌린다 

// 3. 논리형(boolean)
console.log(typeof(true), typeof(false));
console.log(2 == 2.0, 5 >= 4, !("가나다" > "마바사")); // 관계 연산자가 논리 연산자보다 우선 순위 빠름 

// 논리 연산자: or(||) and(&&)
let x = 10;
console.log(x > 8 || x < -3); // x > 8 또는 x < -3 
console.log(x > 8 && x < 12); // x > 8 그리고 x < 12
console.log(true > 10); // true: 1 false: 0 
// 오로지 0일때만 false, 데이터 없음(null, undefined)
// 0 제외 숫자 나오면 무조건 true.









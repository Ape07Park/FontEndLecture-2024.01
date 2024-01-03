// 1. 식별자(identifier)
/* 
1) 규칙

1. 영문자, 숫자, $, _사용 가능
2. 대소문자 구분
3. 숫자로 시작 x
4. 예약어(keyword) 사용금지

2) 관습

1. 단어 여러 개 사용하는 것을 권장 - camal case로 작성
2. 변수, 상수, 함수명 등은 소문자로 시작
3. 클래스 명은 대문자로 시작 
*/

// 2. variable(변수)
let pi= 31415; // 신식
var radius = 10; // 구식
console.log(`둘레는 ${2 * pi * radius}, 면적은 ${pi * radius * radius} 입니다.`);

// 복합 대입 연산자
let a = 1, str = '';
a +=2; // a = a + 2
str += 'A quick brown fox' ;
str += 'jump over the lazy dog' ;

// 증감 연산자
let x = 0, y = 0;
console.log(x++, ++y); // post-increment(x++), pre-increment(++y)
console.log(x, y)
console.log(x--, --y);
console.log(x, y);

// 나머지 자료형

//4. 함수(function)
console.log(typeof function() {});
console.log(typeof(() => {})); //화살표(arrow) 함수, 람다 함수, 일회용 함수

// 5. 객체(object)
let obj = {x:1, y: 2}; // key:value
console.log(obj.x, obj.y); // 엑세스 

// 6. undefined
let alpha;
console.log(typeof alpha, typeof beta); //초기화 x 변수나 선언 x 변수는 undefined
alpha = 123;
beta = 456;
console.log(typeof alpha, typeof beta);




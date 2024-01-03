// 자료형 변환 casting
//강제 형변환
console.log(123, String(123));
console.log(Number("101"), Number(true), Number(false));
console.log(Number("hello")); // NaN: Not a Number

// 아래 경우를 제외하면 모두 참
console.log(Boolean(0), Boolean(0.0), Boolean(''), Boolean(undefined), Boolean(null), Boolean(NaN));

/* 자동 변환
+ 연산자: boolean -> number -> String으로 변환 점점 더 메모리 많이 먹는 쪽으로 커짐
*/

console.log(123 + true, 'bool' + true, 'integer' + 123); // integer(int): 정수

// -, *, / 연산자: String -> number로 변환 
console.log(52 - '27', '8' * 8, '4' / 2); // 계산 시 이진수로 변환 후 계산

// 뺼샘은 2의 보수(two's complement)로 한다 
/* 5: 0101

3: 0011
-3: 1100 +1 : 1101

5 -3 0101
      1101
    1 0010
= 2   0010    

곱셈은 뒤에 0 붙임 
나눗셈은 뒤에 0 뺌 

"컴퓨터의 -" 는 주판의 개념에서 가져옴

5라는 값은ㄹ 4자리로 표현 

5 = 0101
3 = 0011

2의 보수는 어떻게 만들까?


-3은 1과 0을 뒤집는다 1100 2의 보수기 때문에 1을 더해준다. 1101이 된다.

5-3 0101
    1101 을 더해준다  2의 보수(complement)
  1 0010 이 된다
1이라는 숫자를 없애면

0010 = 2가 된다


곱하기는 어떻게 할까?
10진수에서 곱하기 10을 하면 뒤에 0하나 붙음
2진수에서 0을 곱하면 0
shift하면 나눠짐;;;;
*/ 

// 두 개의 값이 같은가
// 1) 변환된 값이 같으면 같다 (==)
console.log(52 == '52', 52 == 52.0);
console.log(true == 1, false == 0.0);

// 2) 변환된 값과 자료형이 일치하면 참 (===)
console.log(52 === '52', 52 ===52.0);
console.log(true === 1, false === 0.0);





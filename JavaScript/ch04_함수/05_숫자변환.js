// 숫자 변환 내장(built-in) 함수

const a ='123.65', b = '0xff', c ='23';
/*16진수(hexadecimal): 2진수 4자리씩 비트 4개를 1개로 만든 것, 1byte를 16진수 두 자리로 표현
0000 0
0001 1
...
1001 9
1010 10 0xa, 0xA
1011 11  0xb
1100 12 0xc
1101 13 0xd
1110 14 0xe
1111 15 0xf 

#80ec89
R -0x80  128
G - 0xEc
B- 0x89 

8진수(octal) 3자리씩 묶기 -리눅스
0o0 0o7
*/
console.log(Number(a), Number(b)); // 123.65  255

// 정수(Integer) 실수(Floating point)
console.log(parseInt(a), parseFloat(a)); // 123, 123.65

console.log(parseInt(b), parseFloat(b), parseFloat(c)); // 255,0,23 

console.log(parseInt('1401호'), Number('1401호')); // 1401, NaN
console.log(parseInt('1,400원'), parseInt('503동1401호')); // 1, 503







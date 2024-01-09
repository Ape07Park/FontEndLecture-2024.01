// 1. 디지털 시계, 00:00 ~ 23:59
// 하루동안 3이 표시되는 시간은 몇초인가?
/*
3시 13시 23시 3분 13분 23분 30 ~ 39분 43분 53분
*/
let displayTime = 0;
for (let hour = 0; hour <=23; hour++){
    for (let minute = 0; minute <= 59; minute++){
        let clock = hour + ':' + minute;
        if (clock.indexOf('3') >= 0){
            displayTime += 60;
        }
    }
}
console.log(`하루동안 3이 표시되는 시간은 ${displayTime}초 임`);

/* 
풀이 2

let totalSec = 0;       // 전체를 0으로 맞춤
for (let h = 0; h < 24; ++h) {      //시간 0부터 시작, 시간이 24보다 클때까지 돌림, 미리 한시간씩 더함.
    for (let m = 0; m < 60; ++m) {
        if (Math.floor(h / 10) === 3 || h % 10 === 3 || Math.floor(m / 10) === 3 || m % 10 === 3) {
            totalSec += 60;
        }
    }
}
console.log("total seconds: " + totalSec); */

// 2. 두개의 세자리수를 곱해서 나온 결과가 palindrome일때
// 가장 큰 palindrome 수와 어떤 수를 곱해서 나온 결과인가?
// ex 101 * 어떤 수 = palindrome

// 가장 큰 palindrome * xxx = palindrome
// 숫자를 받고 문자로 변환 다시 숫자로 

// 1) 2개의 3자리수 만들기 - 변수에 저장 후 곱하기 or 곱하기도 동시에 하기 
// 2) 2개 수 곱하기 및 회문 판별기 작성 3) 

//1) for 문 2개 2) palindrome 판별 3) 최대값 찾기 
function isPalindrome(str){
    let reverseStr = str.split('').reverse().join('')
    return str == reverseStr;
}

let maxPal = 0, max1 = 0, max2 = 0;
for(let i = 100; i <=999; i++){
    for(let j = i; j <=999; j++){
        let mul = i * j;
        if(isPalindrome(String(mul))){
            if (mul > maxPal){
                maxPal = mul; max1 = i; max2 = j
            }
        }
    }
}
console.log(`${max1} x ${max2} = ${maxPal}`);

// 3. C:/Workspace/WebProject/03.JavaScript/ch07.표준내장객체/04.String연습.js
// 에서 파일명(04.String연습.js)만 출력하세요.

let path = "C:/Workspace/WebProject/03.JavaScript/ch07.표준내장객체/04.String연습.js";

// split 후 맨 마지막 요소
let pathArr = path.split('/')
console.log(pathArr[pathArr.length -1]);

// 맨 마지막에 있는 / 위치를 찾아서 substring 메소드 적용
let fileIndex = path.lastIndexOf('/');
console.log(path.substring(fileIndex + 1));

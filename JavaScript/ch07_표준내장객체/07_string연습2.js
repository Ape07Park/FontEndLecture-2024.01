// 1. 디지털 시계, 00:00 ~ 23:59
// 하루동안 3이 표시되는 시간은 몇초인가?


// 2. 두개의 세자리수를 곱해서 나온 결과가 palindrome일때
// 가장 큰 palindrome 수와 어떤 수를 곱해서 나온 결과인가?
// ex 101 * 어떤 수 = palindrome

// 가장 큰 palindrome * xxx = palindrome
// 숫자를 받고 문자로 변환 다시 숫자로 

// 1) 2개의 3자리수 만들기 - 변수에 저장 후 곱하기 or 곱하기도 동시에 하기 
// 2) 2개 수 곱하기 및 회문 판별기 작성 3) 

for(let i=100; i < 1000; i++){
    for(let j=i; i < 1000; j++){
        i * j 
    }
}




/* for(let j=100; j < 1000; j++){
    let sumJ = j;
}

function sum(sumI,sumJ){
    let sum = sumI * sumJ;
    let reverseSum = sum.toString();
    reverseSum.reverse().Number();
    if(sum == reverseSum){
        console.log(sum);
    } 
}
 */

/* function isPalindrome(sumI,sumJ){
    let changeStr = num.toString();
    changeStr.reverse().Number();
    return num == reverseStr;
} */


// 3. C:/Workspace/WebProject/03.JavaScript/ch07.표준내장객체/04.String연습.js
// 에서 파일명(04.String연습.js)만 출력하세요.

let string = "C:/Workspace/WebProject/03.JavaScript/ch07.표준내장객체/04.String연습.js";
console.log(string.split('/')[5]);


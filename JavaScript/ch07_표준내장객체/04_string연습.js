// 연습문제
// 1. 1에서 1000 사이에 0은 몇번, 1은 몇번 .. 9는 몇번 사용되나 (정규식)
// 1234567890101112131415...9991000
let numStr = '';
for (let i = 1; i <= 1000; i++){
    numStr += i;
}

// 1이 몇번 있는가 - 정규식으로 1 제외 다 지우고 length 남기기
console.log(numStr.replace(/[^1]/g, '').length); 

for (let i = 0; i <= 9; i++){
    let pattern = new RegExp('[^' + i + ']', 'g'); // 반복 시 RegExp 객체 생성해서 반복 
    count = numStr.replace(pattern, '').length;
    console.log(`${i}: ${count}`);
}

// count 배열을 만들어서 일일이 체크 - 이거 다시 해석하기
let countArr = [0,0,0,0,0,0,0,0,0,0];
for (let i = 0; i = numStr.length; i++){
    let num = Number(numStr[i]);
    countArr[num]++;
}


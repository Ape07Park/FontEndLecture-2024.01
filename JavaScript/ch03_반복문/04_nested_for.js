// 중첩 반복문
// 1. 별 다섯개를 다섯줄 그리기

for(let i = 0; i < 5; i++){ // 다섯 줄 
    let star =''
    for(let k =0; k < 5; k++){ //별 다섯개
    star += '*';
    }
    console.log(star);
}

/*
1사분면
1)
i = 0,1,2,3,4
k = i+1

2)
i = 1,2,3,4,5
k = i

4사분면 
3)
i =5,4,3,2,1
k = i

4) i = 0,1,2,3,4
k = 5 -i, 4-i..
*/

// 2. 다이아몬드 그리기(1사분면)
for(let i = 0; i < 5; i++){  
    let star =''
    for(let k =0; k < i + 1; k++){ 
    star += '*';
    }
    console.log(star);
}

// 3. 다이아몬드 그리기(4사분면)
for(let i = 5; i > 0; i--){  
    let star =''
    for(let k =0; k < i; k++){ 
    star += '*';
    }
    console.log(star);
}

// 4. 다이아몬드 그리기(2사분면)
/* i = 0,1,3,4
공백 = 4,3,2,1,0 / 4 - i
별 = 1,2,3,4,5 / i + 1
    *
   **
  ***
 ****
*****
*/

for (let i = 0; i < 5; i++) {
    let star = '';
    for (let k = 0; k < 4-i; k++) {
        star += ' ';
    }
    for (let k = 0; k < i + 1; k++) {
        star += '*';
    }
    console.log(star);
}

// 5. 다이아몬드 그리기(3사분면)
/* i = 0,1,2,3,4
공백 = 0,1,2,3,4
별 = 5,4,3,2,1 / 5 - 1
*/
for (let i = 0; i < 5; i++) {
    let star = '';
    for (let k = 0; k < i ; k++) {
        star += ' ';
    }
    for (let k = 0; k < 5 - i; k++) {
        star += '*';
    }
    console.log(star);
}


// 6. 다이아몬드 완성
/* 
i   공백   별
0   3       1
1   2       3
2   1       5
3   0       7
2   1       5
1   2       3
0   3       1
    3 -i    2*i +1
*/

let maxDia = 7;
let N = parseInt(7 /2);
for(let i =0; i < N; i++){
    let line = '';
    for(let k =0; k < N-i; k++)
    line += ' ';
    for(let k = 0; k < 2 * i +1; k++)
    line+='*';
    console.log(line);

}
for (let i = N -1; i >=0; i--){
    let line = '';
    for(let k =0; k < N-i; k++)
    line += ' ';
    for(let k = 0; k < 2 * i +1; k++)
    line+='*';
    console.log(line);
}


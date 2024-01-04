// 백준 2884
/* 1. M > 45

2. M < 45
2-1 H > 0
2-2 H < 0

*/
let H = Math.ceil(Math.random() * 23);
let M = Math.ceil(Math.random() * 59);
console.log(H,M);

if(M < 45){
    M = M + 60 - 45;
    H -= 1;
    if(H < 0){
        H = 23;
    }
}else{
    M = M - 45;
}

console.log(H,M);
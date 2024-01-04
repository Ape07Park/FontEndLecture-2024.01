// 컴퓨터 프로그램은 모든 경우의 수를 다 대입해서 맞는 것을 찾는다
// 프로그램은 내가 만든 것 
// 프로세스는 실행 중인 프로그램

// 1. 완전수 
for (let i =2; i <= 10000; i++){
    let divSum = 0;
    for (let k=1; k < i; k++){ // 1에서 부터 자기자신 전까지
        if (i % k == 0){
        divSum +=k; // 약수의 합 구하기
        } 
    } 
    if (i ==divSum){
        console.log(i);
    }
}

// 2. a+b+c = 1000 을 만족하는 피타고라스 수 (단, a<b<c)
// a * a + b * b = c *c
for(let a = 1; a <=1000; a++){
    for (let b = a + 1; b <= 1000; b++){
        c = 1000 - a -b;
        if (a * a + b * b == c * c){
            console.log(a,b,c);
            Process.exit(0); // 프로그램 실행을 종료하라
        }
    }
}
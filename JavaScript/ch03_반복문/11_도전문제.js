// 완전수(perfect number) 자기 자신을 제외한 약수의 합과 자기자신이 같은 수
// 6 = 1 + 2 + 3 / 28 = 1+2+4+7+14
// 3 ~ 10000이하의 수 중에서 완전수 4개를 찾으시오.
// let num = [];

for(let i = 3; i <= 6; i++){  // 3 ~ 6
    let sum = 0;
    for(let j = 1; j < i; j++){
        if(i % j == 0){
            sum +=j;
        }
    }                          
}

// 1. 완전수 (Perfect number)
// 자기 자신을 제외한 약수의 합과 자기 자신이 같은 수. Ex) 6, 24

let result = [];
let sum = 0;
for (let i=1; i<10000; i++){ //체크해야할 수
    for (let k = 1; k < i; k++){ // 나누는 숫자
        if(i % k == 0){ // 약수인지 찾는거
            if (i==k) // 자기자신일 때 루프 벗어나기
                break;
            sum+=k; // 약수를 더하기
        }
    }
    // 완전수 구하는 부분
    if (sum == i) // 완전수 여부
        result.push(sum); // 결과에 완전수 추가
    sum = 0; // 약수 합 초기화
}
console.log(result);


// 2. a+b+c = 1000 을 만족하는 피타고라스 수 (단, a<b<c)
let answer =[];
for(let a=1; a<1000; a++){
    for(let b=1; b<1000; b++){
            c=1000-a-b;
            if (a+b+c== 1000){ // 다 더한 값이 1000인 경우만 사용
                if(a*a + b*b == c*c && a < b) // 피타고라스와 크기 비교
                    answer.push(a, b, c);
            }
    }
}
console.log(answer);

// 약수들의 합 - 자기자신 = 자기자신 

// 2. a + b + c = 1000을 만족하는 피타고라스 수(단 a < b < c) c = 1000 - a - b
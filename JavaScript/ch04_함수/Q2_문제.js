// 1. 만 나이 계산하기
// 생년, 월, 일, 변수로 설정해서 풀기 

// 오늘 - 생일 
var TodayYear =2024, TodayMonth = 1, TodayDay = 5;

// year끼리는 빼기, month끼리도 뺴기/ 
// 근데 오늘 월이 생월보다 작으면 -1. 
// 월이 같고 오늘 일이 생일보다 작으면 -1

function age_test(my_year, my_month, my_Day){
    let age = TodayYear - my_year;
    if(TodayMonth < my_month){
        age -= 1;
    }else if(TodayMonth == my_month && TodayDay < my_Day){
        age -= 1;
    }else{
        age = age;
    }
    return age;
}

console.log(age_test(1999,1,1));

// 2. 백준 31090. N년과 N+1년이 이러한 조건을 만족하는 관계인지 판별
// N+1을 N 끝의 2자리로 나누어 떨어져 함 
// 1) N이 들어가면 N의 끝의 2자리를 추출하여 다른 변수(x)에 넣음. 십의 자리와 1의 자리 구하기 
// 2) N % x 해서 0 나오는지 조건문 돌리기 
/*
(N % 100) 
*/

// 2023 % 100 = 23 
function year_test(N){
    let x = N % 100;
    if((N + 1) % x == 0){
        console.log("good");
    }else{
        console.log("bye");
    }
}
for(let i=1980; i <= 2030; i++){
    year_test(i)
}

/* 3. array를 매개변수로 받아 합의 제곱과 제곱의 합의 차이를 
구하는 함수를 만들고 [24, 67, 45, 97, 43]의 결과 출력
*/
// 함수 만들기 

var array = [24, 67, 45, 97, 43];

// 1) 합의 제곱->합하고 제곱하기
function sum_double(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum ** 2;
}

console.log(sum_double(array));

// 2) 제곱의 합-> 각자 제곱하고 합 구하기
function double_sum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i] ** 2
    }
    return sum;
}

console.log( double_sum(array));
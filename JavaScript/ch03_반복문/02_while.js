// while 반복문
let person = ['james', 27, "남자", '프로그래머', 175.3];

let i = 0;
while(i < person.length){
    console.log(person[i]);
    i++;
}

// 주사위를 던져서 합이 21을 초과하면 탈출 
let sum = 0;
while(sum <= 21){
    let dice = Math.ceil(Math.random()*6);
    console.log(dice);
    sum +=dice; // 조건을 변화하는 실행문이 없으면 무한 루프에 빠진다, 탈출 할려면 ctrl + c
}
console.log(sum);




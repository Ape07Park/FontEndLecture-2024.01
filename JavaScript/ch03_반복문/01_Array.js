// 배열(Array)
let person = ['james', 27, "남자", '프로그래머', 175.3];
console.log(person);
console.log(typeof person); // object, array는 object의 한 형태
console.log(person.length);
console.log(person[0], person[1], person[person.length-1]);

// obj = {key1: value1, key2: value2, ...}
// arr = {0: val1, 1: val2, ...} ==> [val1, val2, ...]


/*배열의 효율적 사용을 위해 반복문 사용
while : 갯수가 정해지지 않은 경우
for: 횟수가 정해져 있는 경우
*/
for(let i = 0; i < person.length; i++){ // 시작값; 조건이 참인 동안 반복; 다음 번 반복시 변화시킬 값
    console.log(person[i]);
}

// 이거 잘 보기
for(let i = person.length -1 ; i >=0; i--){
    console.log(person[i]);
}

// 처음부터 끝이면 i < length이고 끝부터 처음이면 i >=0

// Enhanced for-loop
console.log("Enhanced for-loop");
for (let item of person){
    console.log(item);
}



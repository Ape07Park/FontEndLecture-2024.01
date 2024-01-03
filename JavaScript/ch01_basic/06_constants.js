// 상수(Constants)
const a = "Hello"
console.log(a);
// a += "world"; // 상수는 값 변경 불가한데 변경해서 런타임 에러 발생

const obj = {x: 1, y: 2};
// obj = {x: 1, y: 2, z :3}; // error
obj.x = 10; // obj가 참조형 변수(주소값 저장)라서 가능. 즉 값은 다른 곳에 존재. 주소값은 값의 위치를 가리킴
obj.y = 10; // 
console.log(obj);

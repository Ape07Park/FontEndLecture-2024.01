// 배열(Array)과 객체(object)
// 1)자료구조로서의 객체(파이썬에서의 dictionary, 자바에서의 map), 2) OOP에서의 객체

// 배열은 객체의 특수한 형태
let fruitArray = ['감', '귤', '밤', '배']
console.log(typeof fruitArray)

let fruitObject = {0:'감', 1:'귤', 2:'밤', 3:'배'}
console.log(fruitArray[0], fruitArray[1]);

// 객체(object)- 자료구조로서 파이썬에서의 dictionary, 자바에서의 map과 유사
// key - value 쌍
let personArray = ['james', 27, "남자", '프로그래머', 175.3];
let personInfo = {name:'james', age: 27, gender: "남자", job: '프로그래머', height: 175.3};
// 의미가 확실함, 사물의 속성을 쓰는 것을 객체라고 한다. 사물의 속성을 보고 대표적인 속성을 추출해 그 속성에 값을 부여 
let car = {"manufacturer":"현대", "model":'casper', color:'카키'} // JS는 key를 문자열 처리 x해도 O

console.log(personInfo);
console.log(car);

// 객체에 대한 접근 
console.log(personInfo['name']); // key 값으로 호출은 사용 X 

console.log(personInfo.name) // 대부분 이렇게 사용함

let key = 'job';
console.log(personInfo[key]) // key값을 변수로 사용하는 경우 





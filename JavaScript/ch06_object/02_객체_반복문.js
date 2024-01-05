//객체에 대한 반복문

let maria = {name:"maria", age:25, job:"student"}
let name = "제임스", age = 27, job = "프로그래머";
let james = {name:name, age:age, job:job};
console.log(maria, james);

for (let key in james){ // 전치사가 in으로 달라짐. enhanced는 of임 
    console.log(key, ':', james[key]);
}

// * ES-6(ECMA Script-6, 2015년에 제정된 표준)
// key와 value를 가리키는 변수의 이름이 동일하면 변수명 생략 가능
let james2 = {name, age, job}; // {name, age, job}의미

//JSON(JavaScript Object Notation): 외부와 데이터를 주고 받을 때 사용. 업계 표준(de facto standard)

let externalForm = JSON.stringify(james); // 전부 문자열
console.log(externalForm)

let person = JSON.parse(externalForm); // object의 key, value
console.log(person);

console.log(person.name == james.name && person.age == james.name && person.job == james.job)

// object들로 구성된 배열도 가능 
let personArray = [james, maria];
console.log(personArray)

// 복잡한 데이터 스트럭쳐를 프로그램으로 잘 녹여낼 수 있는가. 배열, 객체를 잘 다루자 



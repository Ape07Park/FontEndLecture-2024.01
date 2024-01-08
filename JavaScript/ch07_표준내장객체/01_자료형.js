// 문자열이 정말 중요하다
// 배열도 중요하다

// 기본 자료형 - primitive type
let number = 233.12;
let string ='Hello';
let boolean = true;
console.log(typeof(number), typeof(string), typeof(boolean));


// 객체 자료형 - 기본 자료형을 객체로 만들었음. wrapper class
// 붕어빵 틀(class) --> 붕어빵(instance): 생성자(constructor) new 통해 만듦 ex) new Date();
let numObj = new Number(273.12);
let strObj = new String('Hello'); //
let boolObj = new Boolean(true);
console.log(typeof(numObj), typeof(strObj), typeof(boolObj));

console.log(number == numObj, number === numObj);



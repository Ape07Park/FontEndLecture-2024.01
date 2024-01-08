// Array 객체
// 1. 배열 생성
let fruits = ["apple", "banana", "cherry"];
let cars = new Array("Audi", "Benz", "BMW");
console.log(cars);

// 2. 배열의 속성
console.log(cars.length);

// 3. 배열의 메서드
// 3-1 concat() : 배열의 element 추가
let newFruits = fruits.concat("mango", "orange");
console.log(fruits);
console.log(newFruits);

// 3-2 join('특수기호'): 배열을 특수기호로 연결하고 싶을 떄 
console.log(`내가 갖고 싶은 차는 ${cars.join(',')}임`);

// 3-3 pop()*  *자기 파괴적(self destruction)
console.log(cars.pop()); // 맨 뒤에 있는 요소를 빼냄 (LIFO)
console.log(cars);

//3-4 push()*
cars.push("Tesla"); cars.push("Toyota");
console.log(cars);

//3-5 reverse()* 순서 뒤바꿈 - 맨뒤가 맨앞으로
cars.reverse();
console.log(cars);

// 3-6 sort()*
let numbers = [34, 56, 12, 20, 64, 46, 72];

// 오름차순(Ascending order)-커지는 순서대로
numbers.sort();
console.log(numbers);
cars.sort();
console.log(cars);

// 내림차순(Descending order)-compareFn: 기준점 잡기 1) compareFn 함수 만들기 2) 인터페이스 만들기 / 자바에서도 이런 식으로 사용
numbers.sort(function(a,b){
    return b - a;
});
console.log(numbers);

cars.sort(function(a,b){
    if (a < b){
        return 1;
    }if (a > b){
        return -1;

    }else{
        return 0;
    }
});
console.log(cars);

// 아스키코드는 사전처럼 보도록하는 것을 원칙으로 함 aa > ab

let person = [
    {name:"daniel", age:25, job:"programmer"},
    {name:"maria", age:24, job:"student"},
    {name:"brain", age:28, job:"teacher"}
];

// 이름의 알파벳순 오름차순으로 정렬
person.sort((a,b) => {
    if(a.name < b.name){
        return -1;
    }if(a.name > b.name){
        return 1;
    }
});
console.log(person);

// 나이의 내림차순으로 정렬
person.sort((a,b) => b.age - a.age);
console.log(person);

// 3-7 slice() 
console.log(fruits.slice(0,2));
console.log(fruits)

// 4. 응용
// 4-1 문자열 뒤집기
// 1) array로 만들기 2) reverse 3) join
let str = "Hello Javascript";
console.log(str.split('').reverse().join('')); // 뛰어쓰기 형태로 분리 

// 4-2 어떤 문자열이 회문(palindrome)인가?
function isPalindrome(str){
    let reverseStr = str.split('').reverse().join('')
    return str == reverseStr;
}
console.log(isPalindrome('우영우'));
console.log(isPalindrome('소주 만병만 주소'));

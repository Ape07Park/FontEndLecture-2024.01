// Number 객체

let numberFromLiteral = 273; // 273과 같은 것을 literal
let numberFromConstructor = new Number(273);

const pi = Math.PI;
console.log(pi);
console.log(pi.toExponential()); //  3.141592653589793e+0
console.log(pi.toFixed(5)); //소수점 5자리
console.log(pi.toPrecision(3)); // 유효숫자 3자리 3.14

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER); //정육면체: 메서드 직육면체: attribute
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
console.log(Math.pow(2, 53) -1); // MAX_SAFE_INTEGER, 53bit 사용

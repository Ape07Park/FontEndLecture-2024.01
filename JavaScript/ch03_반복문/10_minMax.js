// 1 ~ 99사이의 값을 갖는 배열에서 최대, 최소 구하기
let numbers = [3,56,43,25,68,19];
Math.max(numbers);

// Math.min(), Math.max() 대신 최소, 최대 찾기
// 내 배열에서 나타나는 가장 큰 혹은 가장 작은 값으로 시작하자
let minVal = 100, maxVal = 0;
for(let number of numbers){
    // 최소값
    if (number < minVal){
        minVal = number;
    }
    if (number > maxVal){
        maxVal = number;
    }
}
console.log(minVal, maxVal);
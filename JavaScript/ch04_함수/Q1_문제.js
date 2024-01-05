// 배열에 대한 함수 만들기
let sampleArray = [43, 17, 25, 36, 98, 73];

// 1. 배열을 인수로 받아 합을 반환하는 함수
function sumArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum +=arr[i];
    }
    return sum;
}
console.log(sumArray(sampleArray));



//2. 배열에서 최대값을 찾아 반환해주는 함수
function maxArray(arr){
    max = 0; // 아니면 array의 첫번쨰 값으로 하기 
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(maxArray(sampleArray));

// 3. 더한 것들의 평균  
function mean(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum +=arr[i];
    }
    return Math.round(sum/arr.length);
}
console.log(mean(sampleArray));

// 4. 배열 원소의 제곱의 합
function sumOfSquare(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i] ** 2;
    }
    return sum;
}
console.log(sumOfSquare(sampleArray));




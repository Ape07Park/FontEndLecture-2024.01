//백준 31090

function isDivisible(year){
    let num = year % 100;
    if ((year + 1) % num ==0){
        return "good";
    return "bad"; // 확실하게 끝나는 거면 else 안쓰고 이것도 가능
    }
}  //midel

for (let year = 2023; year <= 2040; year ++){
    console.log(`${year}: ${isDivisible(year)}`);
} //control


// M(model) V(view) C(control)

// Q3 합의 제곱과 제곱의 합의 차이

function duffSum(arr) {
    let sum = 0;
    let sumOfSquare = 0;
    for (let element of arr){
        sum += element;
        sumOfSquare += element * element;
    }
    return sum * sum - sumOfSquare;
}

let sample = [24, 67, 45, 97, 43];
console.log(duffSum(sample));

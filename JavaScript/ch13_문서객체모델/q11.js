function ans1() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    if (num1 < 1 || num1 > 20 || num2 < 10 || num2 > 30 || num2 - num1 < 4){
        alert("입력값의 범위를 확인하고 다시 입력")
        return;
    }
    let powerArr = [];
    for(let i = num1; i <= num2; i++){
        powerArr.push(2 ** i);
    }

    // 여기 내가 다시 공부
    let resultStr = '';
    /*  이걸로 해도 됨
        for (let element of powerArr){
        resultStr += element + '<br>'; */

    for (let i = 0; i < powerArr.length; i++){
        if ((i + 1) % 5 == 0){
        resultStr += powerArr[i] + '<br>' // 5개 출려하고 줄바꿈
        }
    else{
        if(i == powerArr.length - 1){
            resultStr += powerArr[i]; // 맨 마지막 엘리먼트 뒤엔 , x
        }else{
        resultStr += powerArr[i] + ',';
        }
        }
    }

    document.getElementById('result1').innerHTML = resultStr
    // result1의 hTML 자리에 resultStr 넣기
}

/*  
the grown-ups' response, this time, was to advise me to lay aside my drawings of boa constrictors, whether from the inside or the outside, and devote myself instead to geography, history, arithmetic, and grammar. That is why, at the, age of six, I gave up what might have been a magnificent career as a painter. I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. Grown-ups never understand anything by themselves, and it is tiresome for children to be always and forever explaining things to the.
*/
function ans2(){
    let sentence = document.getElementById("sentence").value;
    let search = document.getElementById("search").value;
    // 특수기호 제거, 소문자로 변경, []안의 것을 없애기 
    let noPunct = sentence.replace(/[-',.\n]/g, '').toLowerCase();
    let words = noPunct.split(' '); // 공백으로 분리하여 배열로 만들기
    let count = 0;
    for (let word of words){
        if (word == search){
            count++
        }
    } 
    document.getElementById("result2").innerHTML = count;

}


function ans3(){
    let price = document.getElementById("price").value;
    let priceStrArr = price.split(';'); // 문자열 배열이니 map 써서 바꿔도 됨
    let priceValArr = [];
    // map 대신 사용
        for (let element of priceStrArr){
        priceValArr.push(Number(element));
    } 

    //map 사용
    let newPrices = priceStrArr.map(x => Number(x)); 

    newPrices.sort((a,b) => b - a); // 내림차순 정렬
    let resultStr = '';
    for (let element of newPrices){
        resultStr += element + '<br>';
    }
    document.getElementById('result3').innerHTML = resultStr;

    
}



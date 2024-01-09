/* 2. 다음의 문자열에서 'the'의 개수를 출력하는 프로그램을 만드세요. 

단, 모든 문자가 소문자인 'the'만 찾으면 되며 'them', 'there', 

'their' 등은 포함하지 않아야 합니다. */

let sentence = "the grown-ups' response, this time, was to advise me to lay aside my drawings of boa constrictors, whether from the inside or the outside, and devote myself instead to geography, history, arithmetic, and grammar. That is why, at the, age of six, I gave up what might have been a magnificent career as a painter. I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. Grown-ups never understand anything by themselves, and it is tiresome for children to be always and forever explaining things to the.";

let str = sentence.replace(/[^A-Z a-z]/g, ''); // 특수 기호 제거 

let words = str.split(" "); // 띄어쓰기 기준으로 분리

let count = 0;
for(let word of words){
    if(word == "the"){
        count ++;
    }
}
console.log(count);

// 3. 입력으로 받은 다음의 가격을 내림차순으로 출력하는 프로그램을 만드세요.

numbers = [51900, 83000, 158000, 367500, 250000, 59200, 128500, 1304000];
numbers.sort((a,b) => b - a );
console.log(numbers);
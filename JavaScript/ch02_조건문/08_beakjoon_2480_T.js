

let dice1 = Math.ceil(Math.random() * 6); // 1 ~ 6
let dice2 = Math.ceil(Math.random() * 6);
let dice3 = Math.ceil(Math.random() * 6);

if(dice1 == dice2 && dice2 == dice3){ // if (dice1 == dice2 == dice3)
    prize = 1000 * dice1 * 1000;

}else if(dice1 == dice2){ // ||  1번과 3번 elif가 같으니 dice1 == dice3 여기 삽입가능
    prize = 1000 * dice1 * 100;

}else if(dice2 == dice3){
    prize = 1000 * dice2 * 100;

}else if(dice1 == dice3){
    prize = 1000 * dice1 * 100;
}else{
    let maxDice = dice1 > dice2 ? dice1: dice2;
    maxDice = maxDice > dice3 ? maxDice: dice3;
    // Math.max(dice1, dice2, dice3)
    prize = maxDice * 100;
    
}
console.log(dice1, dice2, dice3, prize);
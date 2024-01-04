// 백준 2480
let hour = 6; minute= 30;
let newHour = 0; newMin= 0;

if(minute >= 45){
    newHour = hour;
    newMin = minute - 45;
}else{
    if (hour == 0){
        newMin = minute + 60 -45;
    }else{
        newHour = hour - 1;
        newMin = minute + 60 - 45;
    }
}
console.log(`${hour} : ${minute} --> ${newHourour} : ${newHour}`);
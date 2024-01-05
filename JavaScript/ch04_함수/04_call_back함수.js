// call back(cb) 함수 - 자바스크립트의 특수 함수 다른 언어는 잘 사용 x
function callFiveTimes(callback){
    for (let i = 0; i < 5; i++){
        callback();
    }
}

// 익명함수 선언
const cb = function(){
    console.log("함수가 호출됨");
}

// callFiveTimes(cb);

// 함수를 호출할 때 익명 함수를 만들어 주는 것이 일반적
/* callFiveTimes(function(){
    console.log('함수 호출됨');
}); */

// 익명 함수로 화살표 함수를 사용하는 것이 일반적
callFiveTimes(() => {
    console.log('함수 호출됨');
});

/* function a(x,y,cb){
    x,y 작업을 함
    ...
    cb();
}
a 끝나면 cb함수 작동해라. 
cb 3개 정도 되면 더 넣지마 - 콜백 지옥 막기위해 
*/






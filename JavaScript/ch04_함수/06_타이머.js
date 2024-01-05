// 타이머 내장 함수
// handler: call back
setTimeout(function() {
    console.log("3초 경과");
}, 3000);

const si = setInterval(function(){
    console.log(new Date());

}, 1000);
// 비동기라 찍히는 순서 다를 수 있음

setTimeout(() => {
    console.log("5초 경과후 초시계 멈춤");
    clearInterval(si);
}, 5100);

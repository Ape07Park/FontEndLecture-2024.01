// 에러가 나면 프로그램이 실행이 중지가 됨
// 에러가 나도 프로그램이 죽지 않도록, 어디서 에러가 났는지 확인하고 고칠 수 있게
// 에러가 나도 프로그램이 죽지 않도록 

try {
    error.error.error();
} catch(e){
        console.log(e.name);
        console.log(e.message);
}

console.log("여기서 끝")


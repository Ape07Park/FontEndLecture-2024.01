//사물을 속성(attribute): 속성값들로 객체화 
//       동작(메소드,method): 객체 안에서 사용하는 함수

let obj = {
    //속성(attribute)
    name: "사과",
    price: 1000,

    // 메소드(method)
    print: function(){
        console.log(this.name, this.price);
    }
}

console.log(obj.name, obj.price);
obj.print();



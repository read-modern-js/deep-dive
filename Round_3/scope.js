// 모든 식별자는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정된다. 이를 스코프라한다.
// 즉, 스코프는 식별자가 유효한 범위를 말한다.


// Ex1
const add = (x, y) => {
    console.log(x, y);
    return x + y;
}

add(2, 5);

console.log(x, y);


// Ex2
var x = 'global x';
var y = 'global y';

function outer() {
    var z = "outer's local z";

    console.log(x);
    console.log(y);
    console.log(z);

    function inner() {
        var x = "inner's local x";

        console.log(x);
        console.log(y);
        console.log(z);
    }

    inner();
}

outer();

console.log(x);
console.log(y);
console.log(z);


// Ex3
// var 키워드로 선언된 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정한다.
var i = 10;

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

// Ex4
var x = 1;

function foo() {
    var x = 10;
    bar();
}

function bar() {
    console.log(x);
}

foo();
bar();
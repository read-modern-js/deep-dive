// 화살표 함수(arrow function)
const add = (x, y) => x + y;
console.log(add(2, 3));

const addd = function(x, y) {
    return x + y;
}
console.log(addd(2, 3));


// 매개변수가 없을 때
const arrow0 = () => {};

// 매개변수가 한 개일 때
const arrow1 = (x) => {};

// 매개변수가 두 개 이상일 때
const arrow2 = (x, y, z) => {};

// 객체 리터럴을 반환하는 경우 객체 리터럴을 소괄호로 감싸 주어야 한다.
const create = (name, age) => ({name, age});
console.log(create('min', 22));

// 고차 함수의 인수로 전달 가능
const arr = [1, 2, 3];

// ES5
arr.map(function(v) {
    return v * 2;
})

// ES6
arr.map(v => v * 2);

/*
    01. 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor이다.
    02. 중복된 매개변수 이름을 선언할 수 없다.
    03.화살표 함수는 함수 자체의 this, arguments, super, new.target 바인딩을 갖지 않는다.
*/

// 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다. 따라서 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다. 이를 lexical this라 한다.

(function() {
    const foo = () => console.log(this);
    foo();
}).call({ a: 1 });

(function() {
    const bar = () => () => console.log(this);
    bar()();
}).apply({ a: 2 });

(function() {
    const poo = () => console.log(this);
    poo();
}).bind({ a: 3 })();


// Bad
const person = {
    name: 'min',
    sayHi: () => console.log(`Hi ${this.name}`)
};

person.sayHi();

// Good
const person = {
    name: 'min',
    sayHi() {
        console.log(`Hi ${this.name}`)
    }
}

person.sayHi();
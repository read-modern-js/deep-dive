/*
    접근자 프로퍼티는 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티다.
    get : 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수이다.
    set : 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수이다.
    접근자 함수는 getter/setter 함수라고도 부른다.
*/

const person = {
    firstName: 'gyeongmin',
    lastName : 'Park',

    // getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // setter
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(`${person.firstName} ${person.lastName}`);

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.fullName);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
person.fullName = 'gildong Hong';

console.log(person.fullName);
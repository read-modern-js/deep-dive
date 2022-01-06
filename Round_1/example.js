// 양윤상
// 지령님 질문에 대한 예제코드
// 스코프

function study () {
    var foo = 'Lee';
    // 변수의 스코프를 좁게 만들어 변수 자체를 재빨리 소멸시키는 편이 낫다.
    foo = null;
    console.log(foo); // null을 할당, 변수 소멸
}
// console.log(foo);  Reference Error !

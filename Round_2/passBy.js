// 양윤상
// 변수를 다른 변수에 할당했을때 원시타입과 객체 타입 값 전달 차이
// 원시 타입은 원시 값이 복사되어 전달 - 값에 의한 전달(pass by value)
// 객체 타입은 참조 값이 복사되어 전달 - 참조에 의한 전달(pass by reference)

let num = 100;

const student = {
    num:1724443,
    name:'yoonsang'
}

let num2 = num;
const student2 = student;

num2 = 10;
student2.num = 10;

console.log(num); // 100
console.log(student.num); // 10
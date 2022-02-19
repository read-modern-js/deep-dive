// 예제 27-29
// 503페이지

const Example = Array.from({ length: 3, 0: 1, 1: 2, 2: 3 }, (v, i) => v); // map 함수가 콜백함수로!
const arr = Array.from({ length: 3 }, (_, i) => i);

console.log(Example); // [1, 2, 3]
console.log(arr); // [0, 1, 2]

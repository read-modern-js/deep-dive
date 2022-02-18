const arr = [1, 2, 3, 4, 5];

arr.reverse();
console.log(arr); // 원본 배열을 변경함.

const arr2 = [1, 2, 3, 4, 5];
const arr3 = arr2.slice(0).reverse();

console.log(arr3);
console.log(arr2); // 원본 배열을 변경하지 않음.

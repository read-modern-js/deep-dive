const arr = [1, [2, 3]];

// 얕은 복사의 방법들
const arr2 = arr.slice();
const arr3 = [...arr];
const arr4 = Object.assign(arr);

// 깊은 복사의 방법들

// JSON.parse() JSON.stringfy()
const arr5 = JSON.parse(JSON.stringify(arr));

// 재귀적으로 구현
// 출처 : https://velog.io/@th0566/Javascript-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC
function deepCopy(obj) {
  const result = [];

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      result[key] = deepCopy(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}
const arr6 = deepCopy(arr);
// lodash 라이브러리 cloneDeep사용

arr[1][1] = 999;
console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);

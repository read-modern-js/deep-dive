// 양윤상
// 9장 중 단축 평가
// 예제 09-17, 18 추가 코드


// && 단축 평가 좌에서 우로 평가.
console.log('Cat' && 'Dog') // Dog
console.log(false && 'Dog')  // false
console.log(true && 'Dog') // Dog
console.log('Dog' && true) // true
// && 단축 평가는 활용하기에 좋습니다.
// 알아두시면 좋을듯!

// || 단축 평가 좌에서 우로 평가하는것은 동일하나,
// 좌에서 true로 평가되면 곧바로 반환.
console.log('Cat' || 'Dog') // Cat
console.log(false || 'Dog') // false
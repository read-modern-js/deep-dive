// JSON(JavaScript Object Notation)은 클라이언트와 서버 간의 HTTP 통신을 위한 텍스트 포맷이다.

// JSON 표기방식
// JSON은 자바스크립트의 객체 리터럴과 유사하게 키와 값으로 구성된 순수한 텍스트이다.

const obj = {
    "name": "min",
    "age": 22,
    "alive": true,
    "hobby": ["skateboard", "ukulele"],
}
console.log(typeof(obj))
console.log(obj);

// JSON.stringify
// JSON.stringify 메서드는 객체를 JSON 포맷의 문자열로 변환한다. 클라이언트가 서버로 객체를 전송하려면 객체를 문자열화해야 하는데 이를 직렬화(serializing)라 한다.
// JSON.stringify(value[, replacer[, space]])

// 객체럴 JSON 포맷의 문자열로 변환한다.
const json = JSON.stringify(obj);
console.log(typeof(json));
console.log( json);

// 객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기 한다.
const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof(prettyJson))
console.log(prettyJson)

// replacer 함수, 값의 타입이 Number이면 필터링되어 반환되지 않는다.
function filter(key, value) {
    return typeof(value) === 'number' ? undefined : value;
}

// JSON.stringify 메서드에 두 번째 인수로 replacer 함수를 전달한다.
const strFilteredObject = JSON.stringify(obj, filter, 2);
console.log(typeof(strFilteredObject))
console.log(strFilteredObject)

// JSON.stringify 메서드는 객체뿐만 아니라 배열도 JSON 포맷의 문자열로 변환한다.

const todos = [
    {
        id: 1,
        content: 'HTML',
        completed: false
    },
    {
        id: 2,
        content: 'CSS',
        completed: true
    },
    {
        id: 3,
        content: 'JavaScript',
        completed: false
    },
]

const arrTojson = JSON.stringify(todos, null, 2)
console.log(typeof(arrTojson))
console.log(arrTojson)


// JSON.parse
// JSON.parse 메서드는 JSON 포맷의 문자열을 객체로 변환한다.
// 서버로부터 클라이언트에게 전송된 JSON 데이터는 문자열이다.
// 이 문자열을 객체로서 사용하려면 JSON 포맷의 문자열을 객체화해야 하는데 이를 역직렬화(deserializinf)라 한다.

const object = {
    "name": "min",
    "age": 22,
    "alive": true,
    "hobby": ["skateboard", "ukulele"],
};

// 객체를 JSON 포맷의 문자열로 변환한다.
const jsonn = JSON.stringify(object)

// JSON 포맷의 문자열을 객체로 변환한다.
const parsed = JSON.parse(jsonn)
console.log(typeof(parsed))
console.log(parsed)

// 배열이 JSON 포맷의 문자열로 변환되어 있는 경우 JSON.parse는 문자열을 배열 객체로 변환한다.
const todo = [
    {
        id: 1,
        content: 'HTML',
        completed: false
    },
    {
        id: 2,
        content: 'CSS',
        completed: true
    },
    {
        id: 3,
        content: 'JavaScript',
        completed: false
    },
];

// 배열을 JSON 포맷의 문자열로 변환한다.
const jsonnn = JSON.stringify(todo);

// JSON 포맷의 문자열을 배열로 변환한다. 배열의 요소까지 객체로 변환된다.
const parsedd = JSON.parse(jsonnn)
console.log(typeof parsedd)
console.log(parsedd)
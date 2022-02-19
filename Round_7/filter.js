const DATA = [
    'apple',
    'banana',
    'orange',
    'pineapple',
    'melon',
    'watermelon',
    'mango',
    'pear',
    'grapes',
    'lime',
    'peach',
    'plum',
    'blueberry',
    'strawberry',
    'kiwi',
    'grapefruit'
]
const filter = (text, arr) => {
    const filteredData = arr.filter((data) => {
        const itemData = data.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.includes(textData)
    });

    return filteredData;
}
const text = 'a';
const filteredData = filter(text, DATA);
console.log(filteredData);
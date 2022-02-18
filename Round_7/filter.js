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

const filter = (text) => {
    const filteredData = DATA.filter((data) => {
        const itemData = data.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
    });

    return filteredData;
}
const text = '';
const filteredData = filter(text);
console.log(filteredData);
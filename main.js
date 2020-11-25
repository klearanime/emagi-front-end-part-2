const translateWord = require('./translate-word.js');
const encodeWord = require('./encode-word.js');



const getInput = process.argv[2]
const words = process.argv.slice(3)

const encoding = words.map(encodeWord);

const translation = words.map(translateWord)


if (getInput === 'translate') {
    console.log(translation.join(' '))
} else if (getInput === 'encode') {
    console.log(encoding.join(' '))
} else {
    console.log('Type - translate or encode after node main.js')
}



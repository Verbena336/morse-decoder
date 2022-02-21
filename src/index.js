const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let substrArr = [];
    let result = ''
    
    for(i = 0; i < expr.length; i+=10) {
        substrArr.push(expr.substr(i, 10))
    }

    
    let numArr = substrArr.map((item) => parseInt(item, 10).toString())

    let numSubstrArr = numArr.map((item) => {
        morseStr = '';
        for(i = 1; i < item.length; i+=2) {
            if(item[i] === 'a') {
                morseStr += ' '
            } else if (item[i] === '0') {
                morseStr += '.'
            } else {
                morseStr += '-'
            }
        }
        return morseStr;
    })

    for(let item of numSubstrArr) {
        if (item !== ' ') {
            result += MORSE_TABLE[item] 
        } else {
            result += ' '
        }
    }
    return result
}



module.exports = {
    decode
}
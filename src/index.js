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
    const matrix       = [],
          array        = expr.split('');
    let resultString = '',
        morseLetter  = '';

    for (let i = 0; i < array.length; i += 10) {
        if (array[i] !== '*') {
            matrix.push(array.slice(i, i + 10));
        } else {
            matrix.push([' ']);
        };
    };

    for (let i = 0; i < matrix.length; i += 1) {
        const currentArray = matrix[i]; 

        if (currentArray.length === 1) {
            resultString += ' ';
        } else {
            for (let j = 0; j < currentArray.length; j += 2) {
                if (currentArray[j] + currentArray[j + 1] === '10') {
                    morseLetter += '.';
                } else if (currentArray[j] + currentArray[j + 1] === '11') {
                    morseLetter += '-';
                };
            };

            resultString += MORSE_TABLE[morseLetter];

            morseLetter = '';
        };
    };

    return resultString;
}

module.exports = {
    decode
}
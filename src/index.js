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
    
let arrSymbol=[],
    arrLetter=[],
    arrNumber=[];


arrNumber=expr.match(/.{1,10}/g);
arrNumber.map(function(item, index) {
    item=item.replace(/00/g,'');
    item=item.replace(/10/g,'.');
    item=item.replace(/11/g,'-');
    arrSymbol[index]=item;
});

arrSymbol.map(function(item, index) {
    if (item == '**********') {arrLetter[index] = ' ';}
    else {arrLetter[index] = MORSE_TABLE[item];}
});
return arrLetter.join('');
}

module.exports = {
    decode
}
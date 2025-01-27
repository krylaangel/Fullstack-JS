'use strict';

// пример с рекурсией
// export function generateKey(keyLength, symbols) {
//     let shuffled = symbols.split('').sort(() => Math.random() - 0.5).join('');
//
//     if (shuffled.length >= keyLength) {
//         return shuffled.slice(0, keyLength);
//     }
//     return generateKey(keyLength, shuffled + symbols);
//
// }
// export function generateKey(keyLength, symbols) {
//     let shuffled = symbols.split('').sort(() => Math.random() - 0.5).join('');
//     while (shuffled.length < keyLength) {
//         shuffled += symbols.split('').sort(() => Math.random() - 0.5).join('');
//     }
//     return shuffled.slice(0, keyLength)
//
// }

// export function generateKey(keyLength, symbols) {
//     if (keyLength > symbols.length) {
//         let lengthKey = Math.ceil(keyLength / symbols.length);
//         console.log(lengthKey);
//         return symbols.repeat(lengthKey).slice(0, keyLength).split('').sort(() => Math.random() - 0.5).join('')
//     }
//     let shuffled = symbols.split('').sort(() => Math.random() - 0.5).join('');
//
//     return shuffled.slice(0, keyLength)
//
// }

// export function generateKey(keyLength, symbols) {
//
//
//     return symbols.repeat(3).split('').sort(() => Math.random() - 0.5).join('').slice(0, keyLength)
//
// }
export function generateKey(keyLength, symbols) {
    let shuffledNew = [];
    for (let i = 0; i < keyLength; i++) {
       let index = Math.floor(Math.random()*symbols.length);
        shuffledNew.push(symbols[index]);
    }
    let result = shuffledNew.join('');
    console.log(result.length)

    return result;

}
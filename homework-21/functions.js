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
export function generateKey(keyLength, symbols) {
    let shuffled = symbols.split('').sort(() => Math.random() - 0.5).join('');
    while (shuffled.length < keyLength) {
        shuffled += symbols.split('').sort(() => Math.random() - 0.5).join('');
    }
    return shuffled.slice(0, keyLength)

}
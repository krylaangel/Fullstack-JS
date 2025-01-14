console.log('#1. Домашня робота 18.1 з JavaScript')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'

let myNum = 10;
let myStr = 'some string';
let myBool = true;
let myArr = [1, 2, 3, 4, 5];
let myObj = {
    first: 'First Name',
    last: 'Last Name'
};


/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

let decimal2 = myNum.toFixed(2);
console.log(decimal2);

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

let i = 15;
/*значение изменяется на 1+, но сама переменная не записывается, поэтому в console.log(prefix) выводится 15*/
let prefix = i++;
let postfix = ++i; // значение изменяется и перезаписівается.

console.log(prefix);
/*поскольку предыдущим действием был Постфиксний інкримент - сначала добавилось 15+1,
но не изменилось значение, потом еще +1 к уже существующим 16 и перезаписалось на 17*/
console.log(postfix);


/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

let myTest = 20;
myTest += myNum;
console.log(myTest);

myTest -= myNum;
console.log(myTest);

myTest *= myNum;
console.log(myTest);

myTest /= myNum;
console.log(myTest);

myTest %= myNum;
console.log(myTest);


/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */
function circumference(myNum) {
    return Math.PI * Math.pow(myNum, 2);
}

let result = Math.trunc(circumference(myNum));
console.log(result);  // длина окружности и округление до целого

// или альтернатива по условиям дз:
// константа Pi → myPi

const myPi = Math.PI;
console.log(myPi);

// округлене значення числа 89.279 → myRound
let myRound = Math.trunc(89.279);
console.log(myRound);

// випадкове число між 0..10 → myRandom
let max = 10;

function getRandom(max) {
    return Math.floor(Math.random() * (max + 1));// (max + 1) - дает возможность генерировать включительно с макс числом

}

let myRandom = getRandom(max);
console.log(myRandom);

// 3 у 5 степені → myPow
let degree = 5;
let myPow = Math.pow(3, degree);
console.log(myPow);


/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

let strObj = {};
strObj.str = 'Мама мыла раму, рама мыла маму';
strObj.length = strObj.str.length;
console.log(strObj);


/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

let isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);
let isRama = strObj.str.includes('рама');
console.log(isRama);

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

let strReplace= strObj.str.replace('мыла', 'держит');
console.log(strReplace);

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

let someStr = 'some STRING'
let upperStr = someStr.toUpperCase();
console.log(upperStr);
let lowerStr = someStr.toLowerCase();
console.log(lowerStr);

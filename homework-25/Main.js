console.log('#8. JavaScript homework example file')

/*
 * #1 Розробити функцію createDomElement, яка приймає назву тега, текстовий вміст та контейнер, до якого потрібно
 *  додати новий елемент. Функція створює новий елемент з вказаним тегом та текстовим вмістом
 *  і додає цей елемент до заданого контейнера.
 *
 * Вимоги:
 * 1. Функція має приймати три параметри:
 *    - tagName - рядок, що вказує на назву тега нового елемента.
 *    - textContent - рядок, що вказує на текстовий вміст нового елемента.
 *    - container - DOM-елемент, до якого буде додано новий створений елемент.
 * 2. Функція має створити новий DOM-елемент з вказаним тегом і текстовим вмістом.
 * 3. Створений елемент має бути доданий до вказаного контейнера.
 * 4. Функція повертає посилання на створений елемент, що дозволяє подальшу взаємодію з ним.
 * 5. Функція має бути експортована для використання в інших модулях та тестування.
 */

function createDomElement(tagName, textContent, container) {
    const element = document.createElement(tagName);
    element.innerHTML = textContent;
    return container.appendChild(element);
}

// Демонстрація використання функції
const container = document.body; // В якості прикладу використовуємо body як контейнер
const createdElement = createDomElement('p', 'This paragraph has been added to the specified container.', container);
console.log(createdElement);
console.log(createDomElement('span', 'This span has been added to the paragraph.', createdElement))

/*
 * #2 Розробити функцію setLocalStorageInfo, яка встановлює LocalStorage змінну з корисною інформацією
 * і можливим таймаутом в секундах
 * Перший параметр - імʼя змінної
 * Другий параметр - значення змінної
 * Третій параметр (опціональний)
 *
 * Вимоги:
 *
 * 1. Функція приймає два обовʼязкові аргументи: key (назва інформаційного параметра) та value (значення параметра).
 * 2. Функція приймає третій опціональний параметр - таймаут в секундах. Якщо він переданий, видаляє змінну через цей час
 * 3. При встановленні змінної, функція виводить інформаційне повідомлення у консоль про успішне зберігання даних.
 * 4. Функція може обробляти масиви та обʼєкти в якості value
 */

function setLocalStorageInfo(key, value, timeout) {
    if (value === null || value === undefined) {
        console.log(`не вірне значення ${value} для ${key}`);
        return;
    }
    const dataToStore = typeof value === 'object' ? JSON.stringify(value) : value;
    localStorage.setItem(key, dataToStore);
    console.log(`збережено: ${key} = ${dataToStore}`)

    if (timeout) {
        setTimeout(function () {
            localStorage.removeItem(key);
            console.log(`дані ${key} успішно видалено`);
        }, timeout * 1000);
    }
}

const userNames = ['Oleksii', 'Oleksandr', 'Anna', 'Dmytro'];

const person = {
    name: 'John Wick',
    email: 'john@example.com',
    password: 'password@example.com',
}

// Демонстрація використання функції
setLocalStorageInfo('language', 'en');
setLocalStorageInfo('userNames', userNames, 5);
setLocalStorageInfo('user', person);

/*
* #3
*
* Задача: Зчитування змінної з LocalStorage та виведення її в консоль
* Мета: Розробити функцію getLocalStorageInfo, яка повертає значення змінної, яка була встановлена setLocalStorageInfo
* Параметр - імʼя змінної
*
* Вимоги:
*
* 1. Функція приймає аргумент: key (назва інформаційного параметра)
* 2. Функція повертає значення, якщо воно є, та undefined, якщо немає такої інформації в LocalStorage
*/

function getLocalStorageInfo(key) {
   const value = localStorage.getItem(key);
    if (value) {
        try {
            const parsedValue = JSON.parse(value);
            console.log('Збережений об\'єкт:', parsedValue);
        } catch (e) {
            console.log('Збережена інформація:', value);
        }
    } else {
        console.log('undefined');
    }
}

getLocalStorageInfo('language'); // en
getLocalStorageInfo('userNames'); // ['Oleksii', 'Oleksandr', 'Anna', 'Dmytro']
getLocalStorageInfo('user'); // обʼєкт персони John Wick поданий вище по коду
getLocalStorageInfo('nonExistentVariable'); // undefined
//

export {createDomElement, setLocalStorageInfo, getLocalStorageInfo}
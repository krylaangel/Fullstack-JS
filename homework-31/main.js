import {validateDataTypes, validatePatchData, validateRequiredFields} from "./validateData.js";

console.log('#14. JavaScript homework example file')

/*
 *
 * #1
 *
 * Функціональні Вимоги:
 * 1. Вхідні параметри:
 *  - `segment`: Рядок, який представляє сегмент шляху URL до ресурсу на API.
 * Наприклад: `/posts` для отримання списку постів, `/posts/1` для отримання посту з ідентифікатором 1.
 *
 * 2. Запити до API:
 *  - Виконати асинхронний HTTP GET запит до `https://jsonplaceholder.typicode.com`,
 * додавши сегмент шляху `segment` до базового URL.
 *  - Використати `fetch` для надсилання запиту.
 *
 * 3. Обробка відповідей:
 *  - У разі успішної відповіді (HTTP статус 200-299), конвертувати відповідь у формат JSON і повернути отримані дані.
 *  - Якщо відповідь вказує на помилку (HTTP статус виходить за межі 200-299),
 * повернути HTTP статус як індикатор помилки.
 *  - При виникненні помилки в процесі виконання запиту (наприклад, мережева помилка),
 * логувати помилку у консоль і повертати текст помилки.
 *
 * 4. Логування:
 *  - Вивести у консоль отримані дані при успішному запиті.
 *  - Логувати помилку у консоль при її виникненні.
 *
 * Технічні вимоги:
 * - Використання сучасних можливостей JavaScript (ES6+), зокрема асинхронних функцій (`async/await`).
 * - Належне управління помилками та виключеннями.
 * - Код має бути чистим, добре структурованим, зі зрозумілими назвами змінних та функцій.
 *
*/
const baseUrl = 'https://jsonplaceholder.typicode.com';

async function getData(segment) {

    try {
        const response = await fetch(`${baseUrl}${segment}`)
        if (!response.ok) {
            console.error(`❌HTTP error! Status: ${response.status}`);
            return response.status;
        }
        return await response.json();
    } catch
        (error) {
        console.error('❌Network or fetch error:', error.message);
        return error.message;
    }
}

getData("/posts").then(data => {
    console.table(data);
});
getData("/posts/1").then(data => {
    console.table(data);
});
getData("/posts/202").then(data => {
    console.table(data);
});


// отримати список користувачів
/*
 *
 * #2
 * Функціональні вимоги:
 *
 * 1. Вхідні параметри:
 *  - `segment`: Рядок, що вказує на сегмент API для виконання POST запиту (наприклад, `/posts`).
 *  - `data`: Об'єкт, який містить дані для відправки в тілі запиту.
 *
 * 2. Виконання запиту:
 *  - Виконати асинхронний HTTP POST запит до `https://jsonplaceholder.typicode.com`, додавши `segment` до URL. Використати `data` як тіло запиту.
 *  - Встановити необхідні заголовки для запиту, зокрема `Content-Type: application/json`.
 *
 * 3. Обробка відповіді:
 *  - У разі успішного отримання відповіді (HTTP статус 200-299), конвертувати відповідь у формат JSON і повернути отримані дані.
 *  - Якщо відповідь вказує на помилку (HTTP статус виходить за межі 200-299), повернути повідомлення про помилку.
 *
 * 4. Логування:
 *  - Логувати у консоль результат або повідомлення про помилку.
 *
 * Технічні Вимоги:
 * - Використання сучасних можливостей JavaScript (ES6+), зокрема асинхронних функцій (`async/await`).
 * - Належне управління помилками та відповідями від API.
 *
*/
const dataPost = {
    title: 'dataPost',
    body: 'dataPost',
    userId: 5,
}

async function postData(segment, data) {
    try {
        if (!validateDataTypes(data)&&!validateRequiredFields(data)) {
            return '❌Invalid data format POST';
        }
        const response = await fetch(`${baseUrl}${segment}`,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
        if (!response.ok) {
            console.error(`❌HTTP error! Status: ${response.status}`);
            return response.status;
        }
        const responseData = await response.json();
        console.log("✅Успішно надіслано:", responseData);
        return await responseData;
    } catch
        (error) {
        console.error('❌Network or fetch error:', error.message);
        return error.message;
    }
}

postData("/posts", dataPost).then(data => {
    console.table(data);
});

/*
 *
 * #3
 *
 * Функціональні вимоги:
 *
 * 1. Вхідні параметри:
 *  - `id`: Ідентифікатор об'єкта, який потрібно оновити.
 *  - `data`: Об'єкт з даними для оновлення.
 *
 * 2. Виконання запиту:
 *  - Виконати асинхронний HTTP PUT запит до `https://jsonplaceholder.typicode.com/posts/${id}` з використанням `id` та `data`.
 *  - Встановити заголовок `Content-Type: application/json`.
 * 3. Обробка відповідей:
 *  - У разі успішної відповіді, конвертувати відповідь у формат JSON і повернути отримані дані.
 *  - Якщо відповідь вказує на помилку (наприклад, неіснуючий ресурс або проблеми з сервером), повернути повідомлення про помилку.
 *
 * 4. Логування:
 *  - Логувати у консоль результат або повідомлення про помилку.
 *
 * Технічні Вимоги:
 * - Використання асинхронних функцій (`async/await`) для обробки HTTP запитів.
 * - Належне управління помилками та відповідями від API.
 *
 */
const dataPut = {
    title: 'dataPut',
    body: 'dataPut',
    userId: 1,
}

async function putData(id, data) {
    try {
        if (!validateDataTypes(data) && !validateRequiredFields(data)) {
            return '❌Invalid data format PUT';
        }
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
            {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
        if (!response.ok) {
            console.error(`❌HTTP error! Status: ${response.status}`);
            return response.status;
        }
        const responseData = await response.json();
        console.log("✅Успішно надіслано:", responseData);
        return await responseData;
    } catch (error) {
        console.error('❌Network or fetch error:', error.message);
        return error.message;
    }
}

putData(3, dataPut).then(data => {
    console.table(data);
});

/*
 *
 * #4
 * Функціональні вимоги:
 *
 * 1. Вхідні параметри:
 *  - `id`: Ідентифікатор об'єкта, який потрібно оновити.
 *  - `data`: Об'єкт з даними для оновлення.
 *
 * 2. Виконання запиту:
 *  - Виконати асинхронний HTTP PATCH запит до `https://jsonplaceholder.typicode.com/posts/${id}` з використанням `id` та `data`.
 *  - Встановити заголовок `Content-Type: application/json`.
 *
 * 3. Обробка відповідей:
 *  - У разі успішної відповіді, конвертувати відповідь у формат JSON і повернути отримані дані.
 *  - Якщо відповідь вказує на помилку (наприклад, неіснуючий ресурс або проблеми з сервером), повернути повідомлення про помилку.
 *
 * 4. Логування:
 *  - Логувати у консоль результат або повідомлення про помилку.
 *
 * Технічні Вимоги:
 * - Використання асинхронних функцій (`async/await`) для обробки HTTP запитів.
 * - Належне управління помилками та відповідями від API.
 *
 */
const dataPatch = {
    title: 'dataPatch',
    body: 'dataPatch',
    userId: 1,
}
async function patchData(id, data) {
    try {
        if (!validatePatchData(data)) {
            return '❌Invalid data format PATCH';
        }
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
            {
                method: 'PATCH',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
        if (!response.ok) {
            console.error(`❌HTTP error! Status: ${response.status}`);
            return response.status;
        }
        const responseData = await response.json();
        console.log("✅Успішно надіслано:", responseData);
        return await responseData;
    } catch (error) {
        console.error('❌Network or fetch error:', error.message);
        return error.message;    }
}
patchData(2, dataPatch).then(data => {
    console.table(data);
});
/*
 *
 * #5
 * Функціональні вимоги:
 *
 * 1. Вхідні дані:
 *  - Функція приймає один параметр id — ідентифікатор ресурсу, який потрібно видалити.
 *
 * 2. Запит на видалення:
 *  - Виконати асинхронний HTTP DELETE запит до API за адресою https://jsonplaceholder.typicode.com/posts/${id}, де ${id} замінюється на конкретний ідентифікатор ресурсу для видалення.
 *
 * 3. Обробка відповіді:
 *  - Якщо запит успішний (HTTP статус відповіді 200-299), логувати успішне повідомлення і повертати true.
 *  - У випадку отримання відповіді зі статусом, що вказує на помилку (все, що поза діапазоном 200-299), логувати помилку зі статусом і повертати сам статус помилки.
 *  - При виникненні помилки в процесі виконання запиту (наприклад, мережева помилка), логувати повідомлення про помилку і повертати текст помилки.
 *
 * 4. Логування:
 *  - Успішне видалення: Логувати повідомлення у консоль у форматі: "Post with id [id] has been successfully deleted.", де [id] — це ідентифікатор видаленого ресурсу.
 *  - Неуспішне видалення: Логувати повідомлення у консоль у форматі: "Failed to delete post with id [id]. Status: [status]", де [id] — ідентифікатор ресурсу, а [status] — HTTP статус відповіді.
 *  - Помилка виконання запиту: Логувати повідомлення у консоль у форматі: "Error during deletion: [error message]", де [error message] — текст помилки.
 *
 * Технічні вимоги:
 * - Використання асинхронних функцій (async/await) для обробки HTTP запитів.
 * - Забезпечити належну обробку помилок та відповідей від API.
 * - Функція повинна бути експортована для подальшого використання або тестування.
 *
 */

async function deleteData(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            console.log(`✅Запис с id ${id} успешно удалена`);
            return 'Success';
        } else {
            console.error(`❌Помилка при видаленні! Статус: ${response.status}`);
            return response.status;
        }
    } catch (error) {
        console.error('❌Network or fetch error:', error.message);
        return error.message;
    }
}

deleteData(1).then(data => {
    console.table(data);
});

export {getData, postData, putData, patchData, deleteData}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = void 0;
exports.sumArray = sumArray;
exports.createUser = createUser;
exports.getOrderStatus = getOrderStatus;
console.log("#19. TypeScript homework example file");
/*
 * #1
 *
 * Задача: Розробити функцію `sumArray`, яка приймає масив чисел і повертає їх суму.
 *
 * Мета: Створення надійної функції, що здатна обробляти масиви чисел різної довжини, включаючи порожні масиви,
 * і повертати точну суму їх елементів.
 *
 * Вимоги до реалізації:
 * 1 Функція повинна приймати один аргумент: `numbers` - масив чисел (`number[]`).
 * 2. Функція повинна повертати суму елементів масиву як число (`number`).
 * 3. Якщо масив порожній, функція повинна повертати `0`.
 * 4. Функція має використовувати метод `reduce` для обчислення суми елементів масиву.
 *
 */
function sumArray(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
// Вивід до консолі для демонстрації
console.log(sumArray([1, 2, 3, 4])); // Повинно вивести 10
console.log(sumArray([])); // Повинно вивести 0
function createUser(name, age, isActive = true) {
    return { name, age, isActive };
}
const newUser = createUser("Анна", 25, true);
const newUser2 = createUser("Анна", 33);
console.log(newUser);
console.log(newUser2);
/*
 * #3
 *
 * Задача: Розробити функцію getOrderStatus, яка приймає статус замовлення як параметр і повертає рядок з описом статусу.
 *
 * Мета: Створення функції, здатної ідентифікувати статус замовлення і
 * надавати користувачеві зрозуміле пояснення щодо поточного стану замовлення.
 *
 * Вимоги до реалізації:
 * 1. У коді має бути присутній enum OrderStatus з необхідними статусами.
 * 2. enum OrderStatus повинен мати статуси: 'Pending', 'Shipped', 'Delivered', 'Cancelled'.
 * 3. Функція має використовувати enum OrderStatus для визначення можливих статусів замовлення.
 * 4. Функція має приймати один параметр типу OrderStatus і повертати рядок з описом статусу.
 * 5. Функція повинна правильно обробити кожен статус замовлення, повертаючи відповідне повідомлення:
 * -  'Pending' -> 'Замовлення очікує на обробку',
 * -  'Shipped' -> 'Замовлення було відправлено',
 * -  'Delivered' -> 'Замовлення доставлено',
 * -  'Cancelled' -> 'Замовлення скасовано'
 * -  прокинути помилку з текстом 'Невідомий статус замовлення' в будь-якому іншому випадку.
 * 6. Параметри функції та її тип повернення мають бути явно типізовані.
 *
 */
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
function getOrderStatus(status) {
    switch (status) {
        case OrderStatus.Pending:
            return "Замовлення очікує на обробку";
        case OrderStatus.Shipped:
            return "Замовлення було відправлено";
        case OrderStatus.Delivered:
            return "Замовлення доставлено";
        case OrderStatus.Cancelled:
            return "Замовлення скасовано";
        default:
            throw new Error("Невідомий статус замовлення");
    }
}
// Приклад виклику функції
console.log(getOrderStatus(OrderStatus.Pending));
console.log(getOrderStatus(OrderStatus.Shipped));
console.log(getOrderStatus(OrderStatus.Delivered));
console.log(getOrderStatus(OrderStatus.Cancelled));
//другий варіант через об'єкт
const declaration = {
    [OrderStatus.Pending]: "Замовлення очікує на обробку",
    [OrderStatus.Shipped]: "Замовлення було відправлено",
    [OrderStatus.Delivered]: "Замовлення доставлено",
    [OrderStatus.Cancelled]: "Замовлення скасовано",
};
function getOrderStatusSecond(status) {
    const result = declaration[status];
    if (!result)
        throw new Error("Невідомий статус замовлення");
    return result;
}
// Приклад виклику функції
console.log(getOrderStatusSecond(OrderStatus.Pending));
console.log(getOrderStatusSecond(OrderStatus.Shipped));
console.log(getOrderStatusSecond(OrderStatus.Delivered));
console.log(getOrderStatusSecond(OrderStatus.Cancelled));

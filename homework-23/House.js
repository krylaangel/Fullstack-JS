'use strict';
import {Apartment} from "./Apartment.js";
//
// c) Створити клас Будинок.
//
//     Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
//     Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира,
// перевіряти, чи не буде кількість перевищувати максимальну кількість квартир,
// і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

export class House {
    flatsList = [];

    constructor(amountApartments) {
        this.amountApartments = amountApartments;
    }

    addApartment(apartment) {
        if (!(apartment instanceof Apartment)) {
            throw new Error(`${apartment} is not a valid Apartment`);
        }

        if (this.flatsList.length < this.amountApartments) {
            this.flatsList.push(apartment);
        } else {
            throw new Error(`the number of apartments exceeds the permissible maximum`);
        }
    }

 }
'use strict';
import { Human } from "./Human.js";

// b) Створити клас Квартира.
//     Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
//     Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
export class Apartment {
    residents = [];

    addResidents(human) {
        if (human instanceof Human) {
            this.residents.push(human);
        } else throw new Error(`${human} is not a valid Human`);
    }

    // показать, кто живет в квартире
    showResident() {
        console.log('residents in apartment: ' + this.residents.map(resident => `${resident.name} (${resident.sex})`).join(', '));
    }
}
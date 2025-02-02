'use strict';
import {Human} from "./Human.js";
import {Apartment} from "./Apartment.js";
import {House} from "./House.js";
// d) В якості демонстрації створити:
//   декілька екземплярів класу Людина;
//   декілька екземплярів класу Квартира;
//   додати екземпляри класу Людина до екземплярів класу Квартира;
//   екземпляр класу Будинок;
//   додати екземпляри класу Квартира до екземплярів класу Будинок.
// */


let human = new Human('Vasya', 'male'); // новый житель
console.log(human);

// try/catch потому что пользователь при возникновении ошибки не должен видеть структуру кода

try {
    let firstApartment = new Apartment(); // первая квартира и ее жители
    firstApartment.addResidents(human); // уже записанный из примера житель въехал в квартиру
    firstApartment.addResidents(new Human('Jack', 'male')); // новосозданный житель сразу въехал в квартиру
    firstApartment.showResident();



    let secondApartment = new Apartment(); // вторая квартира и ее жители
    secondApartment.addResidents(new Human('Yulya', 'female'));
    secondApartment.addResidents(new Human('Kolya', 'male'));
    secondApartment.showResident();


    let house = new House(2);
    house.addApartment(firstApartment);
    house.addApartment(secondApartment);
    console.log(house.flatsList);

}
catch (error) {
    console.log(`Error: ${error.message}`);
}
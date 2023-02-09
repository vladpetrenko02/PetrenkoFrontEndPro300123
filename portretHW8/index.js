let yearOfBirth = prompt("Enter the year of birth 'ex. 2002'");

if(yearOfBirth === null || yearOfBirth.trim() === '' || isNaN(yearOfBirth) === true) {
    alert(`Шкода, що Ви не захотіли ввести свій рік народження.`);
    yearOfBirth = "не вказано";
} 
else {
    yearOfBirth = 2023 - +yearOfBirth;
}

let livingPlace = prompt("Enter place of living: 'Kyiv', 'Washington' or 'London'");

if(livingPlace === null || livingPlace.trim() === '' || isNaN(livingPlace) !== true) {
    alert(`Шкода, що Ви не захотіли ввести своє місто проживання`);
    livingPlace = "ти не вказав, де ти живеш";
}
else if(livingPlace.trim().toLowerCase() === "kyiv") {
    livingPlace = "ти живеш у столиці України";
}
else if(livingPlace.trim().toLowerCase() === "washington") {
    livingPlace = "ти живеш у столиці США";
}
else if(livingPlace.trim().toLowerCase() === "london") {
    livingPlace = "ти живеш у столиці Великобританії";
}
else {
    livingPlace = `ти живеш у місті ${livingPlace}`;
}

let kindOfSport = prompt("Enter your favourite kind of sport: 'Basketball', 'Football' or 'Tenis'");

if(kindOfSport === null || kindOfSport.trim() === '' || isNaN(kindOfSport) !== true) {
    alert(`Шкода, що Ви не захотіли ввести свій улюблений вид спорту`);
    kindOfSport = "Не круто. Ти не вказав свій вид спорту.";
}
else if(kindOfSport.trim().toLowerCase() === "basketball") {
    kindOfSport = "Круто! Хочеш стати О'Нілом.";
}
else if(kindOfSport.trim().toLowerCase() === "football") {
    kindOfSport = "Круто! Хочеш стати Роналду.";
}
else if(kindOfSport.trim().toLowerCase() === "tenis") {
    kindOfSport = "Круто! Хочеш стати Мартою Костюк.";
}
else {
    kindOfSport = `Добре, що ти займаєшся таким видом спорту як ${kindOfSport}`;
}

alert(`Тобі ${yearOfBirth} років, ${livingPlace}.\n${kindOfSport}`);

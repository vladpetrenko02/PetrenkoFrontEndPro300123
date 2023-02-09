const yearOfBirth = prompt("Enter the year of birth 'ex. 2002'");

if(yearOfBirth === null || yearOfBirth.trim() === '' || isNaN(yearOfBirth) === true)
    alert(`Шкода, що Ви не захотіли ввести свій рік народження.`);

const livingPlace = prompt("Enter place of living: 'Kyiv', 'Washington' or 'London'");

if(livingPlace === null || livingPlace.trim() === '' || isNaN(livingPlace) !== true) {
    alert(`Шкода, що Ви не захотіли ввести своє місто проживання`);
}

const kindOfSport = prompt("Enter your favourite kind of sport: 'Basketball', 'Football' or 'Tenis'");

if(kindOfSport === null || kindOfSport.trim() === '' || isNaN(kindOfSport) !== true) {
    alert(`Шкода, що Ви не захотіли ввести свій улюблений вид спорту`);
}

switch(livingPlace.trim().toLowerCase()) {
    case "kyiv":
        switch(kindOfSport.trim().toLowerCase()) {
            case "basketball":
                switch(true) {
                    case isNaN(yearOfBirth):
                        alert(`Тобі невідомо скільки років, ти живеш у столиці України.\nКруто! Хочеш стати О'Нілом.`);
                        break;
                    case isNaN(yearOfBirth) === false:
                        alert(`Тобі ${2023 - Number(yearOfBirth)} років, ти живеш у столиці України.\nКруто! Хочеш стати О'Нілом.`);
                        break;
                    default:
                        alert(`Some exception`);
                        break;
                }
                break;
            case "football":
                switch(true) {
                    case isNaN(yearOfBirth):
                        alert(`Тобі невідомо скільки років, ти живеш у столиці України.\nКруто! Хочеш стати Роналду.`);
                        break;
                    case isNaN(yearOfBirth) === false:
                        alert(`Тобі ${2023 - Number(yearOfBirth)} років, ти живеш у столиці України.\nКруто! Хочеш стати Роналду.`);
                        break;
                    default:
                        alert(`Some exception`);
                        break;
                }
                break;
            case "tenis":
                switch(true) {
                    case isNaN(yearOfBirth):
                        alert(`Тобі невідомо скільки років, ти живеш у столиці України.\nКруто! Хочеш стати Мартою Костюк.`);
                        break;
                    case isNaN(yearOfBirth) === false:
                        alert(`Тобі ${2023 - Number(yearOfBirth)} років, ти живеш у столиці України.\nКруто! Хочеш стати Мартою Костюк.`);
                        break;
                    default:
                        alert(`Some exception`);
                        break;
                }
                break;
            default:
                switch(true) {
                    case isNaN(yearOfBirth):
                        alert(`Тобі невідомо скільки років, ти живеш у столиці України.\nДобре, що ти займаєшся таким видом спорту як ${kindOfSport}.`);
                        break;
                    case isNaN(yearOfBirth) === false:
                        alert(`Тобі ${2023 - Number(yearOfBirth)} років, ти живеш у столиці України.\nДобре, що ти займаєшся таким видом спорту як ${kindOfSport}.`);
                        break;
                    default:
                        alert(`Some exception`);
                        break;
                }
                break;
        }
        break;
    case "washington":
        switch(kindOfSport.trim().toLowerCase()) {
            case "basketball":
                switch(true) {
                    case isNaN(yearOfBirth):
                        alert(`Тобі невідомо скільки років, ти живеш у столиці США.\nКруто! Хочеш стати О'Нілом.`);
                        break;
                    case isNaN(yearOfBirth) === false:
                        alert(`Тобі ${2023 - Number(yearOfBirth)} років, ти живеш у столиці США.\nКруто! Хочеш стати О'Нілом.`);
                        break;
                    default:
                        alert(`Some exception`);
                        break;
                }
                break;
            case "football":
                switch(true) {
                    case isNaN(yearOfBirth):
                        alert(`Тобі невідомо скільки років, ти живеш у столиці США.\nКруто! Хочеш стати Роналду.`);
                        break;
                    case isNaN(yearOfBirth) === false:
                        alert(`Тобі ${2023 - Number(yearOfBirth)} років, ти живеш у столиці США.\nКруто! Хочеш стати Роналду.`);
                        break;
                    default:
                        alert(`Some exception`);
                        break;
                }
                break;
            case "tenis":
                switch(true) {
                    case isNaN(yearOfBirth):
                        alert(`Тобі невідомо скільки років, ти живеш у столиці США.\nКруто! Хочеш стати Мартою Костюк.`);
                        break;
                    case isNaN(yearOfBirth) === false:
                        alert(`Тобі ${2023 - Number(yearOfBirth)} років, ти живеш у столиці США.\nКруто! Хочеш стати Мартою Костюк.`);
                        break;
                    default:
                        alert(`Some exception`);
                        break;
                }
                break;
            default:
                switch(true) {
                    case isNaN(yearOfBirth):
                        alert(`Тобі невідомо скільки років, ти живеш у столиці США.\nДобре, що ти займаєшся таким видом спорту як ${kindOfSport}.`);
                        break;
                    case isNaN(yearOfBirth) === false:
                        alert(`Тобі ${2023 - Number(yearOfBirth)} років, ти живеш у столиці США.\nДобре, що ти займаєшся таким видом спорту як ${kindOfSport}.`);
                        break;
                    default:
                        alert(`Some exception`);
                        break;
                }
                break;
        }
        break;
    case "london":
        switch(kindOfSport.trim().toLowerCase()) {
            case "basketball":
                switch(true) {
                    case isNaN(yearOfBirth):
                        alert(`Тобі невідомо скільки років, ти живеш у столиці Великобританії.\nКруто! Хочеш стати О'Нілом.`);
                        break;
                    case isNaN(yearOfBirth) === false:
                        alert(`Тобі ${2023 - Number(yearOfBirth)} років, ти живеш у столиці Великобританії.\nКруто! Хочеш стати О'Нілом.`);
                        break;
                    default:
                        alert(`Some exception`);
                        break;
                }
                break;
            case "football":
                switch(true) {
                    case isNaN(yearOfBirth):
                        alert(`Тобі невідомо скільки років, ти живеш у столиці Великобританії.\nКруто! Хочеш стати Роналду.`);
                        break;
                    case isNaN(yearOfBirth) === false:
                        alert(`Тобі ${2023 - Number(yearOfBirth)} років, ти живеш у столиці Великобританії.\nКруто! Хочеш стати Роналду.`);
                        break;
                    default:
                        alert(`Some exception`);
                        break;
                }
                break;
            case "tenis":
                switch(true) {
                    case isNaN(yearOfBirth):
                        alert(`Тобі невідомо скільки років, ти живеш у столиці Великобританії.\nКруто! Хочеш стати Мартою Костюк.`);
                        break;
                    case isNaN(yearOfBirth) === false:
                        alert(`Тобі ${2023 - Number(yearOfBirth)} років, ти живеш у столиці Великобританії.\nКруто! Хочеш стати Мартою Костюк.`);
                        break;
                    default:
                        alert(`Some exception`);
                        break;
                }
                break;
            default:
                switch(true) {
                    case isNaN(yearOfBirth):
                        alert(`Тобі невідомо скільки років, ти живеш у столиці Великобританії.\nДобре, що ти займаєшся таким видом спорту як ${kindOfSport}.`);
                        break;
                    case isNaN(yearOfBirth) === false:
                        alert(`Тобі ${2023 - Number(yearOfBirth)} років, ти живеш у столиці Великобританії.\nДобре, що ти займаєшся таким видом спорту як ${kindOfSport}.`);
                        break;
                    default:
                        alert(`Some exception`);
                        break;
                }
                break;
        }
        break;
    default:
        switch(true) {
            case isNaN(yearOfBirth):
                switch(kindOfSport.trim().toLowerCase()){
                    case "basketball":
                        alert(`Тобі невідомо скільки років, ти живеш у місті ${livingPlace}.\nКруто! Хочеш стати О'Нілом.`);
                        break;
                    case "football":
                        alert(`Тобі невідомо скільки років, ти живеш у місті ${livingPlace}.\nКруто! Хочеш стати Роналду.`);
                        break;
                    case "tenis":
                        alert(`Тобі невідомо скільки років, ти живеш у місті ${livingPlace}.\nКруто! Хочеш стати Мартою Костюк.`);
                        break;
                    default:
                        alert(`Тобі невідомо скільки років, ти живеш у місті ${livingPlace}.\nДобре, що ти займаєшся таким видом спорту як ${kindOfSport}.`);
                        break;
                }
                break;
            case isNaN(yearOfBirth) === false:
                switch(kindOfSport.trim().toLowerCase()){
                    case "basketball":
                        alert(`Тобі ${2023 - Number(yearOfBirth)} років, ти живеш у місті ${livingPlace}.\nКруто! Хочеш стати О'Нілом.`);
                        break;
                    case "football":
                        alert(`Тобі ${2023 - Number(yearOfBirth)} років, ти живеш у місті ${livingPlace}.\nКруто! Хочеш стати Роналду.`);
                        break;
                    case "tenis":
                        alert(`Тобі ${2023 - Number(yearOfBirth)} років, ти живеш у місті ${livingPlace}.\nКруто! Хочеш стати Мартою Костюк.`);
                        break;
                    default:
                        alert(`Тобі ${2023 - Number(yearOfBirth)} років, ти живеш у місті ${livingPlace}.\nДобре, що ти займаєшся таким видом спорту як ${kindOfSport}.`);
                        break;
                }
                break;
            default:
                alert(`Some exception`);
                break;
        }
        break;
}






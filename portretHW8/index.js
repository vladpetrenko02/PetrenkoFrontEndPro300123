let yearOfBirth, livingPlace, kindOfSport;

while(true) {
    yearOfBirth = prompt("Enter the year of birth 'ex. 2002'");
    if(yearOfBirth === null || yearOfBirth.trim() === '' || isNaN(yearOfBirth) === true) {
        alert(`Шкода, що Ви не захотіли ввести свій рік народження коректно, спробуйте спочатку`);
        continue;
    }
    else {
        livingPlace = prompt("Enter place of living: 'Kyiv', 'Washington' or 'London'");
        if(livingPlace === null || livingPlace.trim() === '' || isNaN(livingPlace) !== true) {
            alert(`Шкода, що Ви не захотіли ввести своє місто проживання коректно, спробуйте спочатку`);
            continue;
        }
        else {
            kindOfSport = prompt("Enter your favourite kind of sport: 'Basketball', 'Football' or 'Tenis'");
            if(kindOfSport === null || kindOfSport.trim() === '' || isNaN(kindOfSport) !== true) {
                alert(`Шкода, що Ви не захотіли ввести свій улюблений вид спорту коректно, спробуйте спочатку`);
                continue;
            }
            else {
                break;
            }
        }
    }
}

switch(livingPlace.trim().toLowerCase()) {
    case "kyiv":
        alert(`Тобі ${2023 - Number(yearOfBirth)} років, ти живеш у столиці України`);
        break;
    case "washington":
        alert(`Тобі ${2023 - Number(yearOfBirth)} років, ти живеш у столиці США`);
        break;
    case "london":
        alert(`Тобі ${2023 - Number(yearOfBirth)} років, ти живеш у столиці Великобританії`);
        break;
    default:
        alert(`Тобі ${2023 - Number(yearOfBirth)} років, ти живеш у місті ${livingPlace}`);
        break;
}

switch(kindOfSport.trim().toLowerCase()) {
    case "basketball":
        alert(`Круто! Хочеш стати О'Нілом ?`);
        break;
    case "football":
        alert(`Круто! Хочеш стати Роналду?`);
        break;
    case "tenis":
        alert(`Круто! Хочеш стати Мартою Костюк?`);
        break;
    default:
        alert(`Добре, що ти займаєшся таким видом спорту як ${kindOfSport}`);
        break;
}






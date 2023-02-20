class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        console.log(`Ім'я людини: ${this.name}, вік: ${this.age} років`);
    }
}

class Car {
    constructor(brand, model, yearProduction, licencePlate) {
        this.brand = brand;
        this.model = model;
        this.yearProduction = yearProduction;
        this.licencePlate = licencePlate;
    }

    owner = {};
    makeOwner(Human) {
        (Human.age > 18) ? this.owner = Human : console.log(`${Human.name} ще не виповнилось 18 років`);
    }
    getInfo() {
        console.log(`Модель авто: ${this.brand}, марка: ${this.model}, рік випуску: ${this.yearProduction}, номерний знак: ${this.licencePlate}`);
        this.owner.getInfo();
    }
}

const kolya = new Human ("Kolya", 19);
const olga = new Human ("Olga", 25);
const vladyslav = new Human ("Vladyslav", 17);

const bmw = new Car ("BMW", "X5", 2022, "AA0000AA");
const skoda = new Car ("Skoda", "Octavia", 2015, "AB2524KO");
const audi = new Car ("Audi", "RSQ7", 2023, "KA0001KA");

bmw.makeOwner(kolya);
skoda.makeOwner(olga);
audi.makeOwner(vladyslav);

bmw.getInfo();
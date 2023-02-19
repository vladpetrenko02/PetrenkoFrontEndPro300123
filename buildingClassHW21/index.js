class Human {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Flat {
    rezidents = [];
    addRezident(Human) {
        this.rezidents.push(Human);
    }
}

class Building {
    constructor(maxAmFlats) {
        this.maxAmFlats = maxAmFlats;
    }

    flats = [];
    addFlat(Flat) {
        if(this.flats.length < this.maxAmFlats) {
            this.flats.push(Flat);
        }else {
            console.log("Вільних квартир не залишилось")
        }
    }
}

const valera = new Human ("Valera", "Man");
const vladyslav = new Human ("Vlad", "Man");
const olga = new Human ("Olga", "Women");
const stepan = new Human ("Stepan", "Man");
const sonya = new Human ("Sonya", "Women");
const viktoria = new Human ("Viktoria", "Women");

const flOne = new Flat ();
const flTwo = new Flat ();
const flThree = new Flat ();

flOne.addRezident(valera);
flOne.addRezident(olga);
flTwo.addRezident(vladyslav);
flTwo.addRezident(viktoria);
flThree.addRezident(stepan);
flThree.addRezident(sonya);

const building = new Building(2);
building.addFlat(flOne);
building.addFlat(flTwo);

console.log(building);
building.addFlat(flThree);

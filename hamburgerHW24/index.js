class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }

    topping = [];

    static SIZE_SMALL = "small";
    static SIZE_BIG = "big";
    static STUFFING_CHEESE = "cheese";
    static STUFFING_SALAT = "salat";
    static STUFFING_POTATO = "potato";
    static TOPPING_SEASONING = "seasoning";
    static TOPPING_SAUCE = "sauce";

    addTopping(topping) {
        this.topping.push(topping);
    }

    getCalories(type) {
        switch(type) {
            case Hamburger.SIZE_SMALL:
                return 20;
            case Hamburger.SIZE_BIG:
                return 40;
            case Hamburger.STUFFING_CHEESE:
                return 20;
            case Hamburger.STUFFING_SALAT:
                return 5;
            case Hamburger.STUFFING_POTATO:
                return 10;
            case Hamburger.TOPPING_SEASONING:
                return 0;
            case Hamburger.TOPPING_SAUCE:
                return 5;
            default:
                return 0;
        }
    }

    getPrice(type) {
        switch(type) {
            case Hamburger.SIZE_SMALL:
                return 50;
            case Hamburger.SIZE_BIG:
                return 100;
            case Hamburger.STUFFING_CHEESE:
                return 10;
            case Hamburger.STUFFING_SALAT:
                return 20;
            case Hamburger.STUFFING_POTATO:
                return 15;
            case Hamburger.TOPPING_SEASONING:
                return 15;
            case Hamburger.TOPPING_SAUCE:
                return 20;
            default:
                return 0;
        }
    }

    calculateCalories() {
        return this.getCalories(this.size) + this.getCalories(this.stuffing) + this.topping.reduce((acum, item) => {
            return acum + this.getCalories(item);
        },0);
    }

    calculatePrice() {
        return this.getPrice(this.size) + this.getPrice(this.stuffing) + this.topping.reduce((acum, item) => {
            return acum + this.getPrice(item);
        },0);
    }
}

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_SEASONING);

console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());

console.log(hamburger);

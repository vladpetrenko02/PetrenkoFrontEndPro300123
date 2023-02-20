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

    calculateCalories() {
        this.calories = 0;

        if(this.size === "small")
            this.calories += 20;
        if (this.size === "big")
            this.calories += 40;
        if (this.stuffing === "cheese")
            this.calories += 20;
        if (this.stuffing === "salat")
            this.calories += 5;
        if (this.stuffing === "potato")
            this.calories += 10;
        if (this.topping.some(item => item === "seasoning"))
            this.calories += 0;
        if (this.topping.some(item => item === "sauce"))
            this.calories += 5;

        return this.calories;
    }

    calculatePrice() {
        this.price = 0;

        if(this.size === "small")
            this.price += 50;
        if (this.size === "big")
            this.price += 100;
        if (this.stuffing === "cheese")
            this.price += 10;
        if (this.stuffing === "salat")
            this.price += 20;
        if (this.stuffing === "potato")
            this.price += 15;
        if (this.topping.some(item => item === "seasoning"))
            this.price += 15;
        if (this.topping.some(item => item === "sauce"))
            this.price += 20;

        return this.price;
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

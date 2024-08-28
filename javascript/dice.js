// A side-independent dice class where the amount of sides is determined on object creation.
class Dice {
    constructor(sides) {
        this.sides = sides;
    }

    // "Rolls the dice" by picking a random number within the amount of sides chosen.
    roll() {
        return Math.floor(Math.random() * this.sides) + 1;
    }
}

export { Dice };
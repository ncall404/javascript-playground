class Dice {
    constructor(sides) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(Math.random() * 6) + 1;
    }
}
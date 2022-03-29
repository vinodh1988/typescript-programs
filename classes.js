class Student {
    constructor(sno, name) {
        this.sno = sno;
        this.name = name;
    }
    display() {
        console.log(this.sno, this.name);
    }
}
class Player extends Student {
    constructor(sno, name, game) {
        super(sno, name);
        this.game = game;
    }
    show() {
        console.log(this.name, this.sno, this.game);
    }
}
Player.ground = "ABC ground";
let obj = new Student(1, "Ravi");

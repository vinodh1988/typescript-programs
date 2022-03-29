class Student{
    protected sno:number;
    protected name:string;

    constructor(sno:number,name:string){
        this.sno = sno
        this.name = name
    }

    display():void{
        console.log(this.sno, this.name)
    }
}

class Player extends Student{
    game:string
    static ground="ABC ground"
    constructor(sno,name,game){
        super(sno,name)
        this.game =game
    }

    show(){
        console.log(this.name,this.sno,this.game)
    }
}

let obj=new Student(1,"Ravi")

class Student{
    private sno:number;
    private name:string;

    public Student(sno:number,name:string){
        this.sno = sno
        this.name = name
    }

    display():void{
        console.log(this.sno, this.name)
    }
}
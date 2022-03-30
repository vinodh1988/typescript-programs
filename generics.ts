class Test<T> {
    member:T

    constructor(member:T){
        this.member=member
    }
    setMember(member:T){
        this.member =member
    }

    show():void{
        console.log("Member ",this.member)
    }
}

const temp:Test<number>=new Test<number>(89)
temp.setMember(90)
const obj:Test<string>=new Test<string>("Ram")
//obj.setMember(35)
temp.show()
obj.show()
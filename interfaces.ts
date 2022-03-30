interface Task{
    perform():void
}

interface Activity{
    doIt():void
}

class Star implements Task,Activity{
    perform(): void {
        console.log("Performing")
    }

    doIt():void{
        console.log("Doing")
    }

}

var t:Task=new Star();
t.perform()

var p:Activity =new Star();
p.doIt()

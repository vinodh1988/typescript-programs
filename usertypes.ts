/*interface person{
    sno:number;
    name: string;
    city:string;
}/*
class person{
    sno:number;
    name:string;
    city:string;
}*/

type person ={
    sno:number,
    name:string,
    city: string
}

type citizen=person

function process(obj:citizen):void{
    console.log(obj.sno)
    console.log(obj.name)
    console.log(obj.city)
}

process({sno:1,name: "Arjun",city: "Mumbai"})
process({sno:1})
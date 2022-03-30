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
function process(obj) {
    console.log(obj.sno);
    console.log(obj.name);
    console.log(obj.city);
}
process({ sno: 1, name: "Arjun", city: "Mumbai" });
process({ sno: 1 });

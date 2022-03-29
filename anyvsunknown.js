/*function processanything(param:any):void{
   // console.log(param)
   console.log(param.sno)
}*/
function processanything(param) {
    // console.log(param)
    //console.log(param)
    console.log(param.name);
    console.log(param);
}
processanything(24);
processanything([34, 534, 43]);
processanything(function () { });
processanything("Raj");
processanything({ sno: 1 });
processanything(processanything);

function  processIt(x:(data:string)=>void):void
{
    x("Perfect")
}

processIt(function(s:string){

})

processIt(function(s:any){

})

//processIt(24)


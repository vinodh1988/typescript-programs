interface Predicate{
    (name:string):boolean
}

function filterIt(callback:Predicate):void{
      if(callback("India"))
         console.log("Passed")
      else
         console.log("Failed")
}

filterIt((x:string)=>{
    return x.length>=5?true:false
})

filterIt((x:string)=>{})
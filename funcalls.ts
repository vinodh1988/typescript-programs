function add(a:number,b:number):number{
    return a+b
}

function sum(a:number[]):number
{
    let sum:number=0;
    for(let x in a)
      sum+=a[x]
    return sum
}
add(34,53)
console.log(sum([43,534,53]))
//console.log(sum([34,"raj"]))
//add(34)
//add("Raj","Ravi")
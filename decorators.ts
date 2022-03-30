function  Enhancer<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        metaInfo = " Addition info";
        print=function(){
            console.log("Added Feature")
        }
    };
  }

  @Enhancer
  class Temp{
      a:number
      b:string
      constructor(a:number,b:string){
          this.a = a
          this.b = b
      }

      display(){
          console.log(this.a, this.b)
      }
  }

  let obj:Temp=new Temp(1,"Raj");

  console.log(obj)
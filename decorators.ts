function  Enhancer<T extends { new (...args: any[]): {} }>
(constructor: T) {
    return class extends constructor {
        metaInfo = " Addition info";
        print=function(){
            console.log("Added Feature")
        }
    };
  }

  function  More<T extends { new (...args: any[]): {} }>
(constructor: T) {
    return class extends constructor {
        extra = " Extra info";
        more=function(){
            console.log("Added Feature")
        }
    };
  }
  
  type component=
  {
      selector: string,
      template: string,
      style:string
  }

function DecWithArgs(param:component){
 return  function<T extends { new (...args: any[]): {} }>
  (constructor: T) {
      return class extends constructor {
          component_properties = param
          selector = param.selector
      };
    }
}

  @DecWithArgs(
      {
          selector: "app-bar",
          template: "html",
          style: "css"
      }
  )
  @More
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
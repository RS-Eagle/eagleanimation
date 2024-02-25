"use-strict"
class rsAnimate {

    constructor(path) {
        if (path === null || path === undefined || path.nodeType !== 1) {
            throw new TypeError('Please Enter A Valid Path');
          }
          
        this.path = path;
        this.innertext = this.path.innerHTML;
        let classtwrite = typeof twrite === 'function' ? new twrite(this): false;
        this.twritereturn = function(){
          return classtwrite
        }
        
    }
    twriteInit(inputList){
      if (Array.isArray(inputList) === false) {
        throw new TypeError('list must be an array');
      }
        this.twritereturn().init(inputList)
    }
    twriteUpdate(obj){
        if(typeof obj === 'object'  && !Array.isArray(obj)){
          let updates = Object.keys(obj).sort().filter((e)=>this.twritereturn().updates().includes(e));
          for (let i = 0; i <= updates.length; i++) {
            this.twritereturn()[updates[i]] = obj[updates[i]]
          }
        }else{
          throw new TypeError('The update value must be in the object.');
        }
    }
   
}


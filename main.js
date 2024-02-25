"use-strict"
class rsAnimate {

    constructor(path, list) {
        if (path === null || path === undefined || path.nodeType !== 1) {
            throw new TypeError('Please Enter A Valid Path');
          }
          if (Array.isArray(list) === false) {
            throw new TypeError('list must be an array');
          }
        this.path = path;
        this.list = list;
        this.innertext = this.path.innerHTML;
        let classtwrite = typeof twrite === 'function' ? new twrite(this): false;
        this.twritereturn = function(){
          return classtwrite
        }
        
    }
    twriteInit(){
        this.twritereturn().init()
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


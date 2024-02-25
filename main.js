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
      let objUpate = obj
      let validKeys  =  this.twritereturn().updates();
        if(typeof objUpate === 'object'  && !Array.isArray(objUpate)){
          let updates = Object.keys(objUpate).sort().filter((e)=>validKeys.includes(e));
          for (let i = 0; i <= updates.length; i++) {
            this.twritereturn()[updates[i]] = objUpate[updates[i]]
          }
        }else{
          throw new TypeError('The update value must be in the object.');
        }
    }
   
}


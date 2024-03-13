"use-strict"
class rsAnimate {
    constructor(path) {
        if (path === null || path === undefined || path.nodeType !== 1) {
            throw new TypeError('Please Enter A Valid Path');
          }
          
        this.path = path;
        this.innertext = this.path.innerHTML;
        let classtwrite = typeof twrite === 'function' ? new twrite(this): false;
        let classwaveSplit = typeof waveSplit === 'function' ? new waveSplit(this): false;
        this.twritereturn = function(){
          return classtwrite
        }
        this.waveSplitreturn = function(){
          return classwaveSplit
        }
    }

    //  All Initialization
    twriteInit(inputList){
      if (Array.isArray(inputList) === false) {
        throw new TypeError('list must be an array');
      }
        this.twritereturn().verify(inputList)
    }
    waveSplitInit(obj){
        this.waveSplitUpdate(obj)
    }

    // All Updates 

    twriteUpdate(obj){
        if(typeof obj === 'object'  && !Array.isArray(obj)){
          let updates = Object.keys(obj).sort().filter((e)=>this.twritereturn().updates().includes(e));
          for (let i = 0; i <= updates.length; i++) {
            this.twritereturn()[updates[i]] = obj[updates[i]]
          }
        }else{
          throw new TypeError('The update value must be the object.');
        }
    }
    waveSplitUpdate(obj){
      if(typeof obj === 'object'  && !Array.isArray(obj)){
        let updates = Object.keys(obj).sort().filter((e)=>this.waveSplitreturn().validKeysReturn().includes(e));

        for(let i = 0; i <updates.length;i++){
          if(!this.waveSplitreturn().validEnteriesValueRangeReturn()[updates[i]](obj[updates[i]])){
            console.warn(`Please Enter A Valid Input For ${updates[i]}`)
            delete obj[updates[i]]
          }
          if(i+1 === updates.length){
            this.waveSplitreturn().variableUpdate(obj)
          }
        }
        
        
      }else{
        throw new TypeError('The update value must be the object.');
      }
  }
   
}


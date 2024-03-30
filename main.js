"use-strict";
class rsAnimate {
  constructor() {
    let classwaveSplit = typeof waveSplit === "function" ? new waveSplit(this) : false;
    let classwaveSplitObj = {};
    this.twritereturn = function () {
      return classtwrite;
    };
    this.waveSplitreturn = function () {
      return classwaveSplit;
    };


    this.classwaveSplitObjFunc = function(obj){
       if(!this.waveSplitreturn()){
         throw new Error("Add WaveSplit CDN")
       }
       let randomNumber = Math.floor(Math.random()*1000)
       classwaveSplitObj = {...classwaveSplitObj, [randomNumber]: new waveSplit(this)}
       this.waveSplitUpdate(obj, randomNumber)
    }


    this.classwaveSplitObjReturn = function(){
      return classwaveSplitObj
    }
  }




  twriteUpdate(obj) {
    if (typeof obj === "object" && !Array.isArray(obj)) {
      let updates = Object.keys(obj)
        .sort()
        .filter((e) => this.twritereturn().updates().includes(e));
      for (let i = 0; i <= updates.length; i++) {
        this.twritereturn()[updates[i]] = obj[updates[i]];
      }
    } else {
      throw new TypeError("The update value must be the object.");
    }
  }

  textAnimate(obj) {
    if (typeof obj === "object" && !Array.isArray(obj)) {
      if (
        obj.path === null ||
        obj.path === undefined ||
        obj.path.nodeType !== 1
      ) {
        throw new TypeError("Please Enter A Valid Path");
      } else {
        this.classwaveSplitObjFunc(obj)
      }
    }
  }

  waveSplitUpdate(obj,randomNumber) {
    if (typeof obj === "object" && !Array.isArray(obj)) {
      let updates = Object.keys(obj).filter((e) =>
        this.waveSplitreturn().validKeysReturn().includes(e)
      );
      for (let i = 0; i < updates.length; i++) {
        if (
          !this.classwaveSplitObjReturn()[randomNumber]
            .validEnteriesValueRangeReturn()
            [updates[i]](obj[updates[i]])
        ) {
          console.warn(`Please Enter A Valid Input For ${updates[i]}`);
          delete obj[updates[i]];
        }
        if (i + 1 === updates.length) {
          this.classwaveSplitObjReturn()[randomNumber].variableUpdate(obj);
        }
      }
    } else {
      throw new TypeError("The update value must be the object.");
    }
  }
}

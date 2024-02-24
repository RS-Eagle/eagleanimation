"use-strict"
class rsAnimate {

    constructor(path, list) {
        this.path = path;
        this.list = list;
        this.innertext = this.path.innerHTML;
        this.speed = 100;
        this.twrite = new twrite(this);
    }

   
}

let list = ["Hii This is Raman", "Hii Welcome"]


let ab = new rsAnimate(document.querySelector("span"),list)
ab.twrite.init();
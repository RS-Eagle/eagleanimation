"use-strict"
class rsAnimate {

    constructor(path, list) {
        this.path = path;
        this.list = list;
        this.innertext = this.path.innerHTML;
        this.speed = 100;
        this.twrite = typeof twrite === 'function' ? new twrite(this): false;
    }

   
}


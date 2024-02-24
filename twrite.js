class twrite{
    constructor(main){
        this.main = main
        this.lineIndex = 0;
        this.lineCount = main.list.length;
        this.line = "";
        this.visibleLine = "";
        this.index = 1;
        this.list = main.list
        this.speed = main.speed
        this.path =  main.path
        this.lineCountInc = 0
        this.repeat = false
    }

    init(){
        this.lineCountInc = 0
        this.line = "";
        this.visibleLine = "";
        this.lineIndex = 0;
        this.lineDecider()
    }

    lineDecider() {
        this.index = 1;
        this.lineCountInc++
        if(this.lineCount < this.lineCountInc){
            this.repeat ? this.init() : '';
        }
        else if(this.lineIndex != this.list.lenght){
        this.line = this.list[this.lineIndex];
        this.lineIndex++
        this.increment();
        }else{
            console.warn("Need A Valid List")
        }
    }
    increment() {
        this.visibleLine = this.line.slice(0, this.index);
        this.index++
        if (this.line.length != this.visibleLine.length){
            setTimeout( ()=> {
                this.main.path.innerHTML = this.visibleLine;
                this.increment();
            }, this.speed);
        }else if(this.line.length == this.visibleLine.length){
            
            this.lineCount <= this.lineCountInc && !this.repeat ?'':this.decrement() ;
        }else{
            console.warn("Need A Valid this.list")
        }

    }
     decrement() {
        this.visibleLine = this.line.slice(0, this.index);
        this.index--
        if (this.visibleLine.length >= 1){
            setTimeout( ()=> {
                this.main.path.innerHTML = this.visibleLine;
                this.decrement();
            }, this.speed);
        }else if(this.visibleLine.length == 0){
            this.lineDecider();
        }else{
            console.log(this.visibleLine.length)
            console.warn("Need A Valid this.list")
        }
    }

}
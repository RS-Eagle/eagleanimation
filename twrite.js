class twrite{
    constructor(main){
        this.main = main
        this.lineIndex = 0;
        this.list = []
        this.lineCount = this.list.length;
        this.line = "";
        this.visibleLine = "";
        this.index = 1;
        this.speed = 100;
        this.path =  main.path
        this.lineCountInc = 0
        this.repeat = false
        this.pauseTime = 2000
        let onlyUpdate = ['speed','repeat','pauseTime'];
        this.updates = function(){
            return onlyUpdate;
        }
    }

    init(inputList){
        this.list = inputList
        this.lineCountInc = 0
        this.line = "";
        this.visibleLine = "";
        this.lineIndex = 0;
        this.lineDecider()
    }

    lineDecider() {
        
        this.index = 1;
        this.lineCountInc++
        this.lineCount = this.list.length;
        console.log(this.lineCount)
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
        
        this.index++
        this.visibleLine = this.line.slice(0, this.index);
        if(this.line.length < this.index){
            setTimeout(()=>{
                this.lineCount <= this.lineCountInc && !this.repeat ?'':this.decrement() ;
            },this.pauseTime)
        }else if (this.line.length >= this.index){
            setTimeout( ()=> {
                this.main.path.innerHTML = this.visibleLine;
                this.increment();
            }, this.speed);
        }else{
            console.warn("Need A Valid this.list")
        }

    }
     decrement() {
        this.visibleLine = this.line.slice(0, this.index);
        this.index--
        // console.log(this.index,this.visibleLine)
        if (this.index >= -1){
            setTimeout( ()=> {
                this.main.path.innerHTML = this.visibleLine;
                this.decrement();
            }, this.speed);
        }else if(this.visibleLine.length >= 0){
            setTimeout(()=>{
                this.lineDecider();
            },this.pauseTime)
        }else{
            console.warn("Need A Valid this.list")
        }
    }

}
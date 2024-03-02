"use-strict"

class waveSplit{
    constructor(main){
        this.main = main;
        this.style = document.createElement('style')
        this.innerText = this.main.innertext;
        this.path = this.main.path
        this.splitText = this.innerText.split("")
        this.innerSpan = []
        this.repeat = true;
        this.running=false
        this.isIntervalFinished = false;
        this.styleID = ''
        this.aniSpeed = 100
        this.pauseTime = 0;
        this.inDir='left';
        this.outDir='right'
        this.outTimeFix = null;
        this.retrunRandomNumber = function(){return randomNumber()}
        this.stylelistindex = 1;
        let randomNumber = function(){return Math.floor(Math.random() * 100000)}
        let validEnteriesKeys = ['aniSpeed','inDir', 'inAni',  'outAni',  'pauseTime', 'repeat']
        let validEnteriesValueRange = {
        aniSpeed:function(e){return 1<e<1000},
        inDir:function(e){return e==="left" || e==="right"},
        inAni:function(e){return e === "color"|| e==="move"},
        repeat: function(e){return typeof e === 'boolean'},
        pauseTime:function(e){return 1000<e<10000}
    } 
        
    }
    init(){
        if(!this.running){
            this.running = !this.running
            this.populator();
        }else if(this.repeat){
            setTimeout(()=>{
                this.classRemover();
            },this.outTimeFix)
        }
    }

    classRemover(){
        let i=0;
        if(this.outDir === "left")i=0;
        else if(this.outDir === "right")i=this.innerSpan.length-1
        const repeat=()=>{
                this.innerSpan[i].classList.remove("__rsanimate_in__")
                if(this.outDir === "left")i++;
                else if(this.outDir === "right")i--
                if(this.innerSpan.length === i || i < 0)this.isIntervalFinished = true
                if(this.innerSpan.length === i|| i <0){clearInterval(timer); this.classAppend()};      
        }
        let timer = setInterval(repeat,this.aniSpeed)
     
    }
    animate(){
        this.styleID = `${this.retrunRandomNumber()}__eagelanimation`
        this.style.id = this.styleID
        this.style.type = 'text/css';
        this.style.title = "eagleAnimation"
        this.style.appendChild(document.createTextNode(`.__rsanimate_initial__{display: inline-block; opacity: 0;transform: translateX(-10px); transition: all ${this.aniSpeed/1000}s ease;} .__rsanimate_in__{opacity: 1;transform: translateX(0px);}`));
        document.head.appendChild(this.style);
        this.classAppend()
    }
    populator(){
        this.path.innerText = '' 
        for(let i = 0; i < this.innerText.length; i++){
            this.path.innerHTML  +=  `<span class="${this.splitText[i].trim() !== ''?"__rsanimate_initial__":""}">${this.splitText[i]}</span>`
        }
        
        this.animate()
    }
    classAppend(){
        this.innerSpan = Array.from(this.path.querySelectorAll("span"));
        this.outTimeFix = (this.aniSpeed*this.innerSpan.length) + this.pauseTime
        let i=0;
        if(this.inDir === "left")i=0;
        else if(this.inDir === "right")i=this.innerSpan.length-1
        const repeat=()=>{
                this.innerSpan[i].classList.add("__rsanimate_in__")
                if(this.inDir === "left")i++;
                else if(this.inDir === "right")i--
                if(this.innerSpan.length === i || i < 0)this.isIntervalFinished = true
                if(this.innerSpan.length === i|| i <0)clearInterval(timer);      
        }
        let timer = setInterval(repeat,this.aniSpeed)
        this.init()
    }
    
    
}
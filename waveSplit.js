"use-strict"

class waveSplit{
    constructor(main){
        this.main = main;
        this.style = document.createElement('style')
        this.innerText = this.main.innertext;
        this.path = this.main.path
        this.splitText = this.innerText.split("")
        this.innerSpan = []
        this.speed = 100
        this.pauseTime = 500;
        this.repeat = false
        this.running=false
        this.isIntervalFinished = false;
        this.styleID = ''
        this.inAniSpeed = 100
        this.retrunRandomNumber = function(){return randomNumber()}
        this.stylelistindex = 1;
        let randomNumber = function(){return Math.floor(Math.random() * 100000)}
        let validEnteriesKeys = ['dAni', 'dX', 'dY', 'inAni', 'inAniSpeed',"repeat", 'outTime']
        let validEnteriesValueRange = {dAni:function(e){return e==="left" || e==="right"},
        dX:function(e){return (-15000<e<15000)},
        dY: function(e){return (-15000<e<15000) },
        inAni:function(e){return e === "color"|| e==="move"},
        inAniSpeed:function(e){return 1<e<1000},
        repeat: function(e){return typeof e === 'boolean'}
    } 
        
    }
    init(){
        if(!this.running){
            this.running = !this.running
            this.populator();
        }else if(this.repeat){
            setTimeout(()=>{
                this.classRemover();
            },3000)
        }
    }

    classRemover(){
        let allStyleSheet = document.styleSheets;
        for(let i = 0; i< allStyleSheet.length; i++){
            if(allStyleSheet[i].title === "eagleAnimation"){
                allStyleSheet[i].cssRules[this.stylelistindex ].style = {}
                this.stylelistindex += 2
                setTimeout(()=>{
                    this.path.innerHTML = " "
                    const styleSheet = document.getElementById(this.styleID);
                    document.head.removeChild(styleSheet);
                    this.populator();
                },1000)
            }
        }
    }
    animate(){
        this.styleID = `${this.retrunRandomNumber()}__eagelanimation`
        this.style.id = this.styleID
        this.style.type = 'text/css';
        this.style.title = "eagleAnimation"
        this.style.appendChild(document.createTextNode(".__rsanimate_initial__{display: inline-block; opacity: 0;transform: translateY(-1000px); transition: all 0.4s ease;} .__rsanimate_in__{opacity: 1;transform: translateY(0px);}"));
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
        let i = 0
        const repeat=()=>{
                this.innerSpan[i].classList.add("__rsanimate_in__")
                i++
                if(this.innerSpan.length === i)this.isIntervalFinished = true
                if(this.innerSpan.length === i)clearInterval(timer);      
        }
        let timer = setInterval(repeat,this.inAniSpeed)
        this.init()
    }
    
    
}
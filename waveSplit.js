class waveSplit{
    constructor(main){
        this.main = main;
        this.style = document.createElement('style')
        this.innerText = this.main.innertext;
        this.path = this.main.path
        this.splitText = []
        this.innerSpan = []
        let validEnteries = ["fade",]
        let randomNumber = function(){return Math.floor(Math.random() * 100000)}
        this.speed = 100
        this.pauseTime = 500;
        this.repeat = true
        this.running=false
        this.isIntervalFinished = false;
        this.styleID = ''
        this.retrunRandomNumber = function(){return randomNumber()}
        
    }
    init(){
        if(!this.running){
            
            console.log('hhhh')
            this.running = !this.running
            this.break();
        }else if(this.repeat){
            setTimeout(()=>{
                console.log("3s")
                this.classRemover();
            },3000)
        }
    }

    classRemover(){
        let allStyleSheet = document.styleSheets;
        console.log(allStyleSheet)
        for(let i = 0; i< allStyleSheet.length; i++){
            if(allStyleSheet[i].title === "eagleAnimation"){
               
                allStyleSheet[i].cssRules[1].style = {}
            }
        }
        const styleSheet = document.getElementById(this.styleID);
        document.head.removeChild(styleSheet);
        

    }
    animate(){
        this.styleID = `${this.retrunRandomNumber()}__eagelanimation`
        this.style.id = this.styleID
        this.style.type = 'text/css';
        this.style.title = "eagleAnimation"
        this.style.appendChild(document.createTextNode(".__rsanimate_initial__{display: inline-block; opacity: 0;transform: translateY(-20px); transition: all 0.4s ease;} .__rsanimate_in__{opacity: 1;transform: translateY(0px);}"));
        document.head.appendChild(this.style);
        this.classAppend()
    }



    break(){
        this.splitText = this.innerText.split("")
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
                if(this.innerSpan.length === i)clearInterval(timer)

                
        }
        let timer = setInterval(repeat,100)
        this.init()
    }
    
    
}
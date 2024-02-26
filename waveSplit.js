class waveSplit{
    constructor(main){
        this.main = main;
        this.innerText = this.main.innertext;
        this.path = this.main.path
        this.splitText = []
        this.innerSpan = []
        let validEnteries = ["opacity"]
        
    }
    animate(){
        
        var style = document.createElement('style');
        // style.type = 'text/css';
        style.appendChild(document.createTextNode(".__rsanimate_initial__{display: inline-block; opacity: 0;transform: translateY(-10px); transition: all 0.4s ease;} .__rsanimate_final__{opacity: 1;transform: translateY(0px);}"));
        document.head.appendChild(style);
    }
    break(){
        this.animate()
        this.splitText = this.innerText.split("")
        this.path.innerText = '' 
        for(let i = 0; i < this.innerText.length; i++){
            this.path.innerHTML  +=  `<span class="${this.splitText[i].trim() !== ''?"__rsanimate_initial__":""}">${this.splitText[i]}</span>`
        }
        this.classAppend()

    }
    classAppend(){
        this.innerSpan = Array.from(this.path.querySelectorAll("span"));
        let i = 0
        const repeat=()=>{
            
                this.innerSpan[i].classList.add("__rsanimate_final__")
                i++
                if(this.innerSpan.length === i){
                    clearInterval(timer)
                }
        }
        let timer = setInterval(repeat,100)
    }
    
}
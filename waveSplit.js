class waveSplit{
    constructor(main){
        this.main = main;
        this.innerText = this.main.innertext;
        this.path = this.main.path
        this.splitText = []
        this.innerSpan = []
        
    }
    break(){
        this.splitText = this.innerText.split("")
        this.path.innerText = '' 
        for(let i = 0; i < this.innerText.length; i++){
            this.path.innerHTML  +=  `<span>${this.splitText[i]}</span>`
        }
        this.classAppend()

    }
    classAppend(){
        this.innerSpan = Array.from(this.path.querySelectorAll("span"));
        let i = 0
        const repeat=()=>{
                console.log("h")
                this.innerSpan[i].classList.add("_rsanimate_style")
                i++
                if(this.innerSpan.length === i){
                    clearInterval(timer)
                }
                
        }
        let timer = setInterval(repeat,100)

       
    }
    animate(){
        
    }
}
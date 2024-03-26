"use-strict";

class waveSplit {
  constructor(main) {
    this.main = main;
    this.innerText = this.main.innertext;
    this.path = this.main.path;
    this.splitText = this.innerText.split("");
    this.innerSpan = [];
    this.repeat = false;
    this.running = false;
    this.isIntervalFinished = false;
    this.styleID = "";
    this.aniSpeed = 4.9;
    this.cssaniSpeed = 6;
    this.pauseTime = 1000;
    this.inDir = "left";
    this.outDir = "left";
    this.outTimeFix = null;
    this.stylelistindex = 1;
    this.speedControl = false;
    this.activator = false;
    this.onView = false;
    this.isClassAppend = false;
    this.classAdder = true;

    // Animation Decider Varibales
    this.inAni = "bottomFade";
    this.baseColor = "white";
    this.inColor = "white";
    let currentAniationInitial = ``;
    let currentAniationOut = ``;

    //Animation Decider Ended
    //Animation Decider Update
    this.currentAniationInitialUpdate = function (val) {
      currentAniationInitial = val;
    };
    this.currentAniationOutUpdate = function (val) {
      currentAniationOut = val;
    };
    // Animation Decider Updater End

    // All Animation List
    let animations = [
      "fade",
      "leftFade",
      "rightFade",
      "topFade",
      "bottomFade",
      "topDrop",
      "bottomDrop",
      "leftDrop",
      "rightDrop",
      "colorFade",
      "colorAdd",
      "flipX",
      "flipY",
      "wave",
      "waveUp",
      "waveLeft"
    ];

    let animationObjectInitial = {
      fade: `transform: scale(0.9); opacity: 0;`,
      topFade: `opacity: 0;transform: translateY(-20px);`,
      bottomFade: `opacity: 0;transform: translateY(20px);`,
      rightFade: `opacity: 0;transform: translateX(20px);`,
      leftFade: `opacity: 0;transform: translateX(-20px);`,
      topDrop: `opacity: 0;transform: translateY(-500px);`,
      bottomDrop: `opacity: 0;transform: translateY(500px);`,
      leftDrop: `opacity: 0;transform: translateX(-500px);`,
      rightDrop: `opacity: 0;transform: translateX(500px);`,
      colorFade: `opacity: 0.1;`,
      colorAdd: `opacity: 1;`,
      flipX: `opacity: 0;transform: scale3d(-1, 1, 1);`,
      flipY: `opacity: 0;transform: scale3d(1, -1, 1);`,
      wave: `transform: scale(0.9); opacity: 0;`,
      waveUp: `transform: scale(1.15); `,
      waveLeft: `transform: rotate(-5deg); `,
    };
    let animationObjectOut = {
      fade: `transform: scale(1); opacity: 1;`,
      topFade: "opacity: 1;transform: translateY(0);",
      bottomFade: "opacity: 1;transform: translateY(0);;",
      rightFade: "opacity: 1;transform: translateX(0);",
      leftFade: "opacity: 1;transform: translateX(0);",
      topDrop: "opacity: 1;transform: translateY(0);",
      bottomDrop: "opacity: 1;transform: translateY(0);",
      leftDrop: "opacity: 1;transform: translateX(0);",
      rightDrop: "opacity: 1;transform: translateX(0);",
      colorFade: `opacity: 1;`,
      colorAdd: ``,
      flipX: `opacity: 1;transform: scale3d(1, 1, 1);`,
      flipY: `opacity: 1;transform: scale3d(1, 1, 1);`,
      wave: `transform: scale(1); opacity: 1;`,
      waveUp: `transform: scale(1); opacity: 1;`,
      waveLeft: `transform: rotate(5deg); `,
    };

    let speedOfAnimation = {
      fade: 0.6,
      flipX: 10.5,
      flipY: 0.3,
      wave:1,
      waveUp:0.5,
      waveLeft:0.5,

    };

    let specialAnimationValue = {
      repeat:true,
      speedControl:false,

    }

    //

    // All User Updates
    let validEnteriesKeys = [
      "aniSpeed",
      "inDir",
      "inAni",
      "pauseTime",
      "repeat",
      "baseColor",
      "inColor",
      "outDir",
      "speedControl",
      "onView"
    ];
    let validEnteriesValueRange = {
      aniSpeed: function (e) {
        return e <= 4.9 && e >= 1;
      },
      inDir: function (e) {
        return e === "left" || e === "right";
      },
      inAni: (e) => {
        return this.animationsReturn().includes(e);
      },
      repeat: function (e) {
        return typeof e === "boolean";
      },
      pauseTime: function (e) {
        return e <= 10000 && e >= 0;
      },
      baseColor: function (e) {
        return typeof e === "string";
      },
      inColor: function (e) {
        return typeof e === "string";
      },
      outDir: function (e) {
        return e === "left" || e === "right";
      },
      speedControl: function (e) {
        return typeof e === "boolean";
      },
      onView:function(e){
        return typeof e ==='boolean'
      }
    };
    let colorNotAllowedbase = ["colorFade", "colorAdd"];
    let colorAllowedInColor = ["colorAdd",];
    let colorInColor = ["colorFade"];
    let specialAni = ["wave","waveUp","waveLeft"]
    //USer Input Endded
    // All Return Varibles

    let randomNumber = function () {
      return Math.floor(Math.random() * 100000);
    };
    this.speedOfAnimationReturn = function () {
      return speedOfAnimation;
    };
    this.colorInColorReturn = function () {
      return colorInColor;
    };
    this.colorNotAllowedbaseReturn = function () {
      return colorNotAllowedbase;
    };
    this.colorAllowedInColorReturn = function () {
      return colorAllowedInColor;
    };
    this.validEnteriesValueRangeReturn = function () {
      return validEnteriesValueRange;
    };
    this.validKeysReturn = function () {
      return validEnteriesKeys;
    };
    this.animationObjectOutReturn = function () {
      return animationObjectOut;
    };
    this.animationsReturn = function () {
      return animations;
    };
    this.animationObjectInitialReturn = function () {
      return animationObjectInitial;
    };
    this.currentAniationOutReturn = function () {
      return currentAniationOut;
    };
    this.currentAniationInitialReturn = function () {
      return currentAniationInitial;
    };
    this.retrunRandomNumber = function () {
      return randomNumber();
    };
    this.styleClassNumber = this.retrunRandomNumber();
    let classInitial = () => {
      return "_" + this.styleClassNumber + "__rsanimate_initial__";
    };
    let classInAnimation = () => {
      return "_" + this.styleClassNumber + "__rsanimate_in__";
    };
    this.classReturnInitial = function () {
      return classInitial();
    };
    this.classReturnIn = function () {
      return classInAnimation();
    };
    this.specialAnimationValueReturn = function(){
      return specialAnimationValue;
    }
    this.specialAni = function(){
      return specialAni;
    }

    //Return Ended
  }
  //Contructor Ended

  // ---------------------------------------------------------------------------------

  variableUpdate(obj = {}) {
    let objKeys = Object.keys(obj);
    for (let i = 0; i < objKeys.length; i++) {
      this[objKeys[i]] = obj[objKeys[i]];
      if (i + 1 == objKeys.length) {
        this.speedUpdate();
    this.verify()
      }
    }
    
  }
  verify(){
    this.populator();
    this.animationDecider();
    this.animate();
  }
  start() {
    if(this.onView){
      this.scrollTri()
    }else{
      this.init();
    }
  }

  isInViewport(path) {
    const rect = path.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      
    );
  }

  scrollTri() {
    document.addEventListener("scroll",  ()=> {
      
      if (this.isInViewport(this.main.path)) {
        if (!this.activator) {
          this.activator = true;
          this.init()
        }
      }
    });
  }

  pauseWait(){
    this.isClassAppend = !this.isClassAppend
    if(this.classAdder){
      setTimeout(()=>{
        this.init();
      },this.aniSpeed * this.innerSpan.length)
    }
    else{
    setTimeout(() => {
      this.init()
    }, this.outTimeFix);
  }
  }

  init() {

    if (this.classAdder) {

      this.classManiplation();
    } else if (this.repeat) {

      this.classManiplation()
    }
  }

  speedUpdate() {
    if(this.specialAni().includes(this.inAni)){
      let keys = Object.keys(this.specialAnimationValueReturn());
      for(let i = 0; i<keys.length; i++){
          this[keys[i]] = this.specialAnimationValueReturn()[keys[i]];
      }
      this.pauseTime = 1000 * (6-this.aniSpeed)
      this.aniSpeed = 5;
    }
    this.aniSpeed = 5030 - (this.aniSpeed*1000);
    if (
      Object.keys(this.speedOfAnimationReturn()).includes(this.inAni) &&
      !this.speedControl
    ) {
      let val = this.speedOfAnimationReturn()[this.inAni];

      this.cssaniSpeed = this.aniSpeed / 1000 + val;
    } else {
      this.cssaniSpeed = this.aniSpeed / 1000;
    }



    
  }

  animationDecider() {
    let animationIn = `display: inline-block;`;
    let animationOut = ``;
    Object.keys(this.animationObjectInitialReturn()).forEach((e) => {
      if (e === this.inAni) {
        animationIn += this.animationObjectInitialReturn()[e];
      }
    });
    Object.keys(this.animationObjectOutReturn()).forEach((e) => {
      if (e === this.inAni) {
        animationOut += this.animationObjectOutReturn()[e];
      }
    });
    animationIn += `transition: all ${this.cssaniSpeed}s ease;`;
    if (!this.colorNotAllowedbaseReturn().includes(this.inAni)) {
      animationIn += `color: ${this.baseColor};`;
    }
    if (this.colorAllowedInColorReturn().includes(this.inAni)) {
      animationOut += `color: ${this.baseColor};`;
    }
    if (this.colorInColorReturn().includes(this.inAni)) {
      animationIn += `color: ${this.inColor};`;
    }

    this.currentAniationInitialUpdate(animationIn);
    this.currentAniationOutUpdate(animationOut);

    
  }

  animate() {
    let styleSheet;
    for (let i = 0; i < document.styleSheets.length; i++) {
      if (
        document.styleSheets[i].title === "eagleanimation" &&
        document.styleSheets[i].ownerNode.id === "eagleanimation"
      ) {
        styleSheet = document.querySelectorAll("style")[i];
      } else {
        styleSheet = document.createElement("style");
        styleSheet.title = "eagleanimation";
        styleSheet.id = "eagleanimation";
      }
    }
    styleSheet.appendChild(
      document.createTextNode(
        `.${this.classReturnInitial()}{${this.currentAniationInitialReturn()}} .${this.classReturnIn()}{${this.currentAniationOutReturn()}}`
      )
    );
    document.head.appendChild(styleSheet);

    this.start();
    
  }
  populator() {
    this.path.innerText = "";
    for (let i = 0; i < this.innerText.length; i++) {
      this.path.innerHTML += `<span class="${
        this.splitText[i].trim() !== ""
          ? `_${this.styleClassNumber}__rsanimate_initial__`
          : ""
      }">${this.splitText[i]}</span>`;
    }

  }
  classManiplation(){
    this.classAdder = !this.classAdder
    this.innerSpan = Array.from(this.path.querySelectorAll("span"));
    this.outTimeFix = this.aniSpeed * this.innerSpan.length + this.pauseTime;
    let i = 0;
    if ((this.isClassAppend && this.inDir === "left") || (!this.isClassAppend&&this.outDir === "left") ) i = 0;
    else if ((this.isClassAppend&&this.inDir === "right") || (!this.isClassAppend && this.outDir === "right")) i = this.innerSpan.length - 1;
    const repeat = () => {
      if(this.isClassAppend){
        this.innerSpan[i].innerText.trim() === ""
          ? ""
          : this.innerSpan[i].classList.add(`${this.classReturnIn()}`);
      }else if(!this.isClassAppend){
        this.innerSpan[i].innerText.trim() === ""
        ? ""
        : this.innerSpan[i].classList.remove(`${this.classReturnIn()}`);
      }
      if ((this.isClassAppend && this.inDir === "left") || (!this.isClassAppend&&this.outDir === "left")) i++;
      else if ((this.isClassAppend&&this.inDir === "right") || (!this.isClassAppend && this.outDir === "right")) i--;
      if (this.innerSpan.length === i || i < 0) this.isIntervalFinished = true;
      if (this.innerSpan.length === i || i < 0) clearInterval(timer);
    };
    let timer = setInterval(repeat, this.aniSpeed);
    this.pauseWait();
  }
}

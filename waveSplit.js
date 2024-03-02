"use-strict";

class waveSplit {
  constructor(main) {
    this.main = main;
    this.innerText = this.main.innertext;
    this.path = this.main.path;
    this.splitText = this.innerText.split("");
    this.innerSpan = [];
    this.repeat = true;
    this.running = false;
    this.isIntervalFinished = false;
    this.styleID = "";
    this.aniSpeed = 100;
    this.pauseTime = 1000;
    this.inDir = "right";
    this.outDir = "left";
    this.outTimeFix = null;
    this.stylelistindex = 1;
    let randomNumber = function () {
      return Math.floor(Math.random() * 100000);
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
    let validEnteriesKeys = [
      "aniSpeed",
      "inDir",
      "inAni",
      "outAni",
      "pauseTime",
      "repeat",
    ];
    let validEnteriesValueRange = {
      aniSpeed: function (e) {
        return 1 < e < 1000;
      },
      inDir: function (e) {
        return e === "left" || e === "right";
      },
      inAni: function (e) {
        return e === "color" || e === "move";
      },
      repeat: function (e) {
        return typeof e === "boolean";
      },
      pauseTime: function (e) {
        return 1000 < e < 10000;
      },
    };
  }
  init() {
    // console.log(this.classReturnInitial())
    if (!this.running) {
      this.running = !this.running;
      this.populator();
    } else if (this.repeat) {
      setTimeout(() => {
        this.classRemover();
      }, this.outTimeFix);
    }
  }

  classRemover() {
    let i = 0;
    if (this.outDir === "left") i = 0;
    else if (this.outDir === "right") i = this.innerSpan.length - 1;
    const repeat = () => {
      this.innerSpan[i].classList.remove(`${this.classReturnIn()}`);
      if (this.outDir === "left") i++;
      else if (this.outDir === "right") i--;
      if (this.innerSpan.length === i || i < 0) this.isIntervalFinished = true;
      if (this.innerSpan.length === i || i < 0) {
        clearInterval(timer);
        this.classAppend();
      }
    };
    let timer = setInterval(repeat, this.aniSpeed);
  }
  animate() {
    let styleSheet;
    for (let i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].title === "eagleanimation" && document.styleSheets[i].ownerNode.id === "eagleanimation" ) {
        styleSheet = document.querySelectorAll("style")[i];
      } else {
        styleSheet = document.createElement("style");
        styleSheet.title = "eagleanimation"
        styleSheet.id = "eagleanimation" 
      }
    }
   
    styleSheet.appendChild(
      document.createTextNode(
        `.${this.classReturnInitial()}{display: inline-block; color: white;transform: ; transition: all ${
          this.aniSpeed / 1000
        }s ease;} .${this.classReturnIn()}{opacity: 1;color: orange;}`
      )
    );
    document.head.appendChild(styleSheet);
    this.classAppend();
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

    this.animate();
  }
  classAppend() {
    this.innerSpan = Array.from(this.path.querySelectorAll("span"));
    this.outTimeFix = this.aniSpeed * this.innerSpan.length + this.pauseTime;
    let i = 0;
    if (this.inDir === "left") i = 0;
    else if (this.inDir === "right") i = this.innerSpan.length - 1;
    const repeat = () => {
      this.innerSpan[i].classList.add(`${this.classReturnIn()}`);
      if (this.inDir === "left") i++;
      else if (this.inDir === "right") i--;
      if (this.innerSpan.length === i || i < 0) this.isIntervalFinished = true;
      if (this.innerSpan.length === i || i < 0) clearInterval(timer);
    };
    let timer = setInterval(repeat, this.aniSpeed);
    this.init();
  }
}


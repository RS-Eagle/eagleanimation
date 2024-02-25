let list = ["Welcome To All", "Give A Star To This Repo"]
let ab = new rsAnimate(document.querySelector("h2"),list);

ab.twriteInit()

let obj = {
    speed: 50,
    pauseTime:200,
}

ab.twriteUpdate(obj)


# Eagle Animation Library


Welcome to the guide for the "Eagle Animation Library"! This cool library was made by Me new to coding, just for fun! Keep in mind. Even though it started as a fun project, the Create Is Animation Library has lots of neat text animations you can use to make your websites more exciting. Take a look through this guide to find out how to use these animations.


## Features

- Text Animation: The library provides a variety of text animation effects.



## CDN Link 🔗

- Main :- [Click Me And Copy Url](https://cdn.jsdelivr.net/gh/RS-Eagle/eagleanimation/main.min.js){Use:- CTRL + Click}

- WaveSplit :- [Click Me And Copy Url](https://cdn.jsdelivr.net/gh/RS-Eagle/eagleanimation/waveSplit.min.js){Use:- CTRL + Click}

    **Remember to add the "main cdn link" file after all my cdn link in index.htm file.**

## Demo Code
  - Download / Copy Demo Code From The Given Link 
  - Link Of Demo Code Repo :- [Click Me And Download The Code](https://github.com/RS-Eagle/demo-eagleanimation){Use:- CTRL + Click}

## Usage

- ### Initialization: 
Create an instance of the rsAnimate() class by providing a text element as a parameter.
#### For Example :-
    const animation = new rsAnimate(path);


`path`: The text element on which the animation will be applied.
#### For Example:-
     const path =  document.querySelector("h2");

- ### Configuration: 
Customize the animation by passing an options object to the waveSplitInit function.

#### For Exmaple:- 
    animation.waveSplitInit({
        repeat:false,    // Boolean indicating whether the animation should repeat.
        inAni: "flipY",    // Name of the desired animation effect.
        baseColor: "white",    // Base color of the text.
        inColor:"blue",    // Color of the incoming animation. Works With `colorAdd`
        inDir:"left",    // Direction of the animation beginning (left, right).
        outDir:"right",    //Direction of the outgoing beginning (left, right).
        pauseTime:2000,    // Pause time between animations.
        speedControl:false,    // Control Printing Speed.
        aniSpeed:6000, // Speed of the animation.
        onView:false  // Animation Start When Element On Screen (viewport)
    });



| Keyword  | Description |
| ------------- | ------------- |
|  `repeat` | Set to true if the animation should repeat, false otherwise.  |
| `inAni`  |  Name of the animation effect to apply. |
| `speedControl` | Set To True if you want to set Animation Speed And Word Printing Speed Different. If True The Printing Speed Will Be The Animation Speed. There Are Some Animation (`fade`, `flipX`, `flipY`) Which Have Their Own Word Printing Speed. So To Disable That Your Need To Set `speedControl` True |
| `onView` | Animation Occur When Element On Screen (ViewPort) |
| `baseColor`  | Base color of the text. |
| `inColor`  |  Color of the incoming animation. Works With `colorAdd` |
| `inDir`  |  Direction of the animation beginning (left, right). |
| `outDir`  |  Direction of the outgoing beginning (left, right). |
| `pauseTime`  |  Pause time between repeat animations  |
| `aniSpeed`  |  Speed of the animation. |


- ### Usage Guidelines:
    - #### Ranges:
        - `pauseTime`:  0 < pauseTime < 10000;
        - `aniSpeed`: 1 < aniSpeed < 5;
    - #### Valid Inputs:
        - `repeat`: Should be either true or false
        - `inAni`: Should be one of the predefined animation names, including `leftFade`, `rightFade`, `topFade`, `bottomFade`, `topDrop`, `bottomDrop`, `leftDrop`, `rightDrop`, `colorFade`, `colorAdd`,`flipX`,`flipY`.
        - `baseColor`: Should be a valid CSS color
        - `inColor`: Should be a valid CSS color
        - `inDir` and `outDir`: Should be left or right
        - `speedControl`: Should be  true or false (`fade`, `flipX`, `flipY`)
        - `onView`: Should be  true or false



## 🚀 About Me
Hi there! I'm Raman Kumar Charak, a passionate Frontend Web Developer with a love for creating stunning and user-friendly web experiences.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://rs-eagle.github.io/Portfolio/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/raman-kumar-charak-36372826b)
[![Instagram](https://img.shields.io/badge/instagram-f21da1?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/raman.charak1026/)


## 🛠 Skills
 HTML , CSS,  JAVASCRIPT, BOOTSTRAP 5  & REACT


## Authors

- [Raman Kumar Charak](https://github.com/RS-Eagle)


## Feedback

If you have any feedback, please reach out to us at ramankumarcharak@gmail.com


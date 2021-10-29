import './style.css'
import gsap from 'gsap';

let tl = gsap.timeline();

let fontSize = 60;
let imgMove = document.querySelector(".img1").clientHeight
let containerPadding = 10;

if(window.screen.width <= 320) {
    fontSize = 50;
}

if(window.screen.width > 600) {
    imgMove = imgMove * 1.5;
    containerPadding = 30;
}

if(window.screen.width > 900) {
    fontSize = 75;
}

window.onload = () => {
    tl.to(".loaderName", { transform: "translate(0)", duration: .75, ease: "power2.out", onComplete: () => {
        document.querySelector(".cover").classList.add("disableCover");
    } })
      .to(".loaderName", {
          fontSize: fontSize,
          width: window.innerWidth - containerPadding*2,
          duration: .75,
          ease: "Power2.inOut",
          autoRound: false
      })
      .to(".cover", {
          top: document.querySelector(".header").offsetHeight + 15,
          duration: .75,
          ease: "Power2.inOut",
          onComplete: () => {
              document.querySelector(".cover").classList.add("invisible");
              document.querySelector(".name").classList.remove("invisible");
          }
      }, "-=.75")
      .from(".jobTitle, .introTxt", {
            opacity: 0,
            y: 100,
            duration: .5,
            ease: "power2.out"
      }, "-=.4")
      .from(".circle, .navLink", {
            opacity: 0,
            duration: .5
      }, "-=.5")
      .from(".img1, .img2", {
            y: imgMove,
            duration: 1,
            ease: "power2.out"
    }, "-=.75");
}
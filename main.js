import './style.css'
import gsap from 'gsap';

let tl = gsap.timeline();

window.onload = () => {
    tl.to(".loaderName", { transform: "translate(0)", duration: .75, ease: "power2.out", onComplete: () => {
        document.querySelector(".cover").classList.add("disableCover");
    } })
      .to(".loaderName", {
          fontSize: 60,
          width: window.innerWidth -20,
          duration: .75,
          ease: "Power2.inOut"
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
      .from(".jobTitle", {
            opacity: 0,
            y: 100,
            duration: .5,
            ease: "power2.out"
      }, "-=.4")
      .from(".circle", {
            opacity: 0,
            duration: .5
      }, "-=.5")
      .from(".img1", {
            y: document.querySelector(".img1").clientHeight,
            duration: 1,
            ease: "power2.out"
    }, "-=.75");
}
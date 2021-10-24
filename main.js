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
          duration: 1,
          ease: "Power2.easeInOut"
      })
      .to(".cover", {
          top: document.querySelector(".header").offsetHeight + 15,
          duration: 1,
          ease: "Power2.easeInOut",
          onComplete: () => {
              document.querySelector(".cover").classList.add("invisible");
              document.querySelector(".name").classList.remove("invisible");
          }
      }, "-=1")
      .from(".circle, .jobTitle, .img1", {
          opacity: 0,
          duration: 1
      })
}
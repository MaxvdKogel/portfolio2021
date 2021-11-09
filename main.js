import './style.css'
import gsap from 'gsap';

//on refresh start at top
let linkWasClicked = false;
document.querySelector(".github").addEventListener("click", () => {
    linkWasClicked = true;
})
document.querySelector(".mail").addEventListener("click", () => {
    linkWasClicked = true;
})

window.onbeforeunload = function () {
    if(!linkWasClicked) {
        window.scrollTo(0,0);
        linkWasClicked = false;
    }
};

window.addEventListener('scroll', () => {
    var el = document.querySelectorAll(".hidden");
    for (var i = 0; i < el.length; i++) {
        if(el[i].getBoundingClientRect().top - (window.innerHeight * 0.75) < 0) {

            el[i].classList.remove("hidden");

            gsap.from(el[i], {
                opacity: 0,
                y: 50,
                duration: .5
            })

        }
    }
})

//reload page on resize to prevent bugs
window.onresize = function(){ location.reload(); }

//smooth scroll nav links
document.querySelector(".projectLink").addEventListener("click", () => {
    document.querySelector("#projects").scrollIntoView({behavior: "smooth", block:"start"}); 
})

document.querySelector(".navContactLink").addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView({behavior: "smooth", block:"start"}); 
})

//loading animation

let tl = gsap.timeline();

let fontSize = 60;
let imgMove = document.querySelector(".img1").clientHeight
let containerPadding = 10;
let extraSpacing = 0;

if(window.innerWidth <= 320) {
    fontSize = 50;
}

if(window.innerWidth > 600) {
    imgMove = imgMove * 1.5;
    containerPadding = 30;
}

if(window.innerWidth > 900) {
    fontSize = 75;
}

if(window.innerWidth > 1200) {
    containerPadding = 100;
    fontSize = 100;
    extraSpacing = 7;
}

window.onload = () => {
    tl.to(".loaderName", { transform: "translate(0)", duration: 1, ease: "power2.out", onComplete: () => {
        document.querySelector(".cover").classList.add("disableCover");
        document.querySelector(".loader").style.backgroundColor = 'transparent';
        document.querySelector(".loader").style.zIndex = "-1";
    } })
      .to(".loaderName", {
          fontSize: fontSize,
          width: window.innerWidth - containerPadding*2,
          duration: .75,
          ease: "Power2.inOut",
          autoRound: false,
          force3D:true
      })
      .to(".cover", {
          top: document.querySelector(".header").offsetHeight + 15,
          x: extraSpacing,
          duration: .75,
          ease: "Power2.inOut",
          autoRound: false,
          force3D:true,
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
      .from(".circle, .navLink, .arrow", {
            opacity: 0,
            duration: .5
      }, "-=.5")
      .from(".img1, .img2", {
            y: imgMove,
            duration: 1,
            ease: "power2.out"
    }, "-=.75");
}
import { gsap } from "gsap";

gsap.from("#line-1",{duration:1,y:100,alpha:0});
gsap.from("#line-2",{duration:1,y:100,alpha:0,delay:0.15});  

gsap.from("#shop-btn",{duration:1,y:-100,alpha:0,delay:0.15}); 

let shopBtn = document.querySelector("#shop-btn");

shopBtn.addEventListener("mouseover", function(){
    gsap.to("#shop-btn", {duration:1,scale:2});
})

shopBtn.addEventListener("mouseoutr", function(){
    gsap.to("#shop-btn", {duration:1,scale:1});
})
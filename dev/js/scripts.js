import { gsap } from "gsap";

gsap.set("button i",{transformOrigin:"center bottom"});

gsap.from("#line-1",{duration:1,y:-100,alpha:0});
gsap.from("#line-2",{duration:1,y:-100,alpha:0,delay:0.15});  

gsap.from("#shop-btn",{duration:1,y:100,alpha:1, delay:0.15}); 
gsap.from("button i",{duration:0.5,alpha:0,rotation:90,delay:0.5}); 

let button = document.querySelector("#shop-btn");
button.addEventListener("mouseover",function(){
    gsap.to("#shop-btn",{duration:0.25,scale:1.25, opacity:100});

    gsap.to("#shop-btn i",{duration:1,rotateY:360});

    gsap.to("#line-1",{duration:0.25,alpha:0,y:50});
    gsap.to("#line-2",{duration:0.25,alpha:0,y:50});
})


button.addEventListener("mouseout",function(){
    gsap.to("#shop-btn",{duration:0.25,scale:1, opacity:0.75});

    gsap.to("#shop-btn i",{duration:1,rotateY:0});

    gsap.to("#line-1",{duration:0.25,alpha:1,y:0});
    gsap.to("#line-2",{duration:0.25,alpha:1,y:0});
})
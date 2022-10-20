import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Sets
gsap.set("button i",{transformOrigin:"center bottom"});

function heroAnimation(){

  var tl = gsap.timeline();
  tl.from("#line-1",{duration:1,y:-100,alpha:0})
  .from("#line-2",{duration:1,y:-100,alpha:0})
  .from("#work-btn",{duration:0.75,y:100,alpha:0})
  .from("button i",{duration:0.5,alpha:0,rotation:90}); 
  return tl;
}

var mainTL=gsap.timeline();
mainTL.add(heroAnimation())
      .add(quoteAnimation())
      .add(welcomeAnimation());


let mm = gsap.matchMedia();

var buttonSize = 1;


mm.add("(min-width: 800px)", () => {
  // desktop setup code here...
  buttonSize = 2;
});

mm.add("(max-width: 799px)", () => {
  // mobile setup code here...
  buttonSize = 1;
});


let button = document.querySelector("#work-btn");

var buttonTL = gsap.timeline({paused:true});
buttonTL.to("#work-btn", {duration:0.25, backgroundColor:"rgb(206, 3, 3)"})
  .to("#work-btn i",{duration:0.25,rotateY:360})
  .to("#line-1",{duration:0.25,alpha:0,y:50})
  .to("#line-2",{duration:0.25,alpha:0,y:50})
  .from("#newImg",{duration:0.25,alpha:0})



button.addEventListener("mouseover",function (){
  buttonTL.play();
});

button.addEventListener("mouseout",function(){
  buttonTL.reverse();
})

function welcomeAnimation(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#aboutMe", scrub:true,markers:false, end:"top 30%"}});
    tl.from("#aboutMe aside div",{duration:1, scale:3},"startWelcome")
    .from("#aboutMe h1",{duration:1,x:"-=-200%", alpha:0},"startWelcome")
    .from("#aboutMe p",{duration:1,x:"-=200%", alpha:0},"startWelcome")
    return tl;
}

function quoteAnimation(){
  var tl =gsap.timeline({scrollTrigger:{trigger:"#hero-2", scrub:true, markers: false, end:"top 20%", start:"top 85%"}});
  tl.from("#bg-img",{duration:5, clipPath:"inset(0 50%)", ease:"back.out(1,0.3)"}, "startSplit")
  .from("#hero-2 h1",{duration:2, clipPath:"inset(0 50%)"},"-=25%","startSplit")
  .from("#color",{duration:2, clipPath:"inset(0 50%)"},"-=25%","startSplit")
  .from("#hero-2 h2",{duration:2, clipPath:"inset(0 50%)"},"-=5%")
  return tl;}







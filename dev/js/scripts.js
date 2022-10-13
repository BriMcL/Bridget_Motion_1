import { gsap } from "gsap";

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
mainTL.add(heroAnimation());


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

var buttonAnimation = gsap.timeline({paused:true});
buttonAnimation.to("#work-btn", {duration:0.25, scale:buttonSize})
  .to("#work-btn i",{duration:0.25,rotateY:360})
  .to("#line-1",{duration:0.25,alpha:0,y:50})
  .to("#line-2",{duration:0.25,alpha:0,y:50});

let button = document.querySelector("#work-btn");
button.addEventListener("mouseover",{scale:1.25,duration:0.25},function(){
  buttonAnimation.play();

});

button.addEventListener("mouseout",function(){
  buttonAnimation.reverse();
});
 











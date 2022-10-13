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


let button = document.querySelector("#work-btn");

var buttonTL = gsap.timeline({paused:true});
buttonTL.to("#work-btn", {duration:0.25, backgroundColor:"rgb(206, 3, 3)"})
  .to("#work-btn i",{duration:0.25,rotateY:360})
  .to("#line-1",{duration:0.25,alpha:0,y:50})
  .to("#line-2",{duration:0.25,alpha:0,y:50});


button.addEventListener("mouseover",function(){
  buttonTL.play();

});

button.addEventListener("mouseout",function(){
  buttonTL.reverse();
})

 
 











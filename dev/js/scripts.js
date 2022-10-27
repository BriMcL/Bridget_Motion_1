import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);




function simpleMotion(){

  var tl = gsap.timeline();

  return tl;
}


function patternMotion(){

  var tl = gsap.timeline()

  tl.from(".odd", {duration: 2, drawSVG: 0, stagger:  0.25, rotate: 180, transformOrigin:"center"},"spin")
  .fromTo(".even", {drawSVG: "0% 0%"},{duration: 2, drawSVG: "0% -100%", stagger:  0.25, rotate: 180, transformOrigin:"center"}, "spin");

  return tl;
}


function UIMotion(){

  var bottomLine = document.querySelector("#bottom-line");
  bottomLine = bottomLine.getBBox();

  console.log(bottomLine.width);

  var tl = gsap.timeline();

  tl.to("#pencil", {duration: 0.5, x: bottomLine.width}, "draw")
  .from("#bottom-line", {duration: 0.5,drawSVG:0}, "draw")
  .to("#pencil", {duration: 0.25,alpha:0}, "drawOutline")
  .fromTo("#outline", {drawSVG:"100% 100%"},{duration: 0.5, drawSVG: "100% 0%"}, "drawOutline");

  return tl;
}


var mainTL=gsap.timeline();
mainTL.add(simpleMotion())
.add(patternMotion())
.add(UIMotion());

GSDevTools.create();
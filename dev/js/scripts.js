import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, GSDevTools);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

function found(){
   
    var tl = gsap.timeline();
    tl.from("#outline",{duration:3, drawSVG:"100% 100%"}, "same")
    .to("#outline",{duration: 3, drawSVG:0}, "-=2", "same")
    return tl;

}

function morphShapes(){
    var tl=gsap.timeline();
    tl.to("#flame", {duration: 1, morphSVG:"#flame2"})
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(found())
.add(morphShapes())



GSDevTools.create();
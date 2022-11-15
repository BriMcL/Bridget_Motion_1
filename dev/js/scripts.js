import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simpleMotion(){
   
    var tl = gsap.timeline();
    tl.from("#center",{duration:1, drawSVG: 0})
    .from("#stems",{duration:3, drawSVG: 0}, "yes")
    .from("#schuylkill",{duration:2, alpha: 0}, "yes")
    return tl;

}

function patternMotion(){

    var tl = gsap.timeline();

    tl.from("#lighter",{duration:3, rotate:360, transformOrigin:"center"},"spin")
    .from(".circle",{duration:3, drawSVG:0, stagger:0.5, rotate:360, transformOrigin:"center"},"spin");
    return tl;

}

function UIMotion(){

    var tl = gsap.timeline();
    tl.from("#backbar",{duration:2, drawSVG:0})
    return tl;

}


var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
mainTL.add(patternMotion())
.add(UIMotion())



GSDevTools.create();
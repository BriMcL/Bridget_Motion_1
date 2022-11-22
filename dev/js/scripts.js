import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function foundAnimation(){
   
    var tl = gsap.timeline();
    tl.from("#leaf",{duration:1, alpha:0 })
    .from("#center",{duration:1, drawSVG: 0})
    .from("#bottomstemleft",{duration:1, drawSVG: 0}, "same")
    .from("#bottomstemright",{duration:1, drawSVG: 0}, "same")
    .from("#topstems",{duration:1, drawSVG: 0})
    .from("#schuylkillcenter",{duration:1, alpha: 0})
    .from("#line",{duration:3, drawSVG: 0})
    
    return tl;

}




var mainTL = gsap.timeline();
mainTL.add(foundAnimation())




GSDevTools.create();
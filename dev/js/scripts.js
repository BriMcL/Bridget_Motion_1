import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function foundAnimation(){
   
    var tl = gsap.timeline();
    tl.from("#leaf",{duration:1, alpha:0 })
    .from("#center",{duration:1, drawSVG: 0})
    .from("#bottomstems",{duration:3, drawSVG: 0})
    .from("#topstems",{duration:3, drawSVG: 0})
    .from("#schuylkillcenter",{duration:2, alpha: 0})

    
    return tl;

}




var mainTL = gsap.timeline();
mainTL.add(foundAnimation())




GSDevTools.create();
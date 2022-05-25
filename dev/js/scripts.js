 import { gsap } from "gsap";
 import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
 

 gsap.registerPlugin(DrawSVGPlugin);
 

 const mainTL = gsap.timeline({id:"mainTL"});

 function rindMotion(){
    let tl = gsap.timeline();

    tl.from("#Rindleft1", {duration:3, drawSVG:0}, "rind")
    .from("#Rindright1", {duration:3, drawSVG:0}, "rind")

    ;
    return tl;
    }

    

    

    function wedgeFill(){

        let tl = gsap.timeline();

        tl.from(".wedge", {duration:1.5, stagger:0.7, ease: "power1.inOut", opacity:0 }, "start")

       ;

        return tl;
    }

    

   


 mainTL.add(rindMotion())
 .add(wedgeFill())
 ;
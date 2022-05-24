 import { gsap } from "gsap";
 import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
 

 gsap.registerPlugin(DrawSVGPlugin);
 

 const mainTL = gsap.timeline({id:"mainTL"});

 function rindMotion(){
    let tl = gsap.timeline();

    tl.from("#rind-left", {duration:2, drawSVG:0}, "rind")
    .from("#rind-right", {duration:2, drawSVG:0}, "rind")

    ;

    }

    

    

    function wedgeFill(){

        let tl = gsap.timeline();

        tl.from(".wedge", {duration:1.5, stagger:0.7, ease: "power1.inOut", opacity:0 }, "start")

       ;

        
    }

    

   

    
    

 



 mainTL.add(rindMotion())
 .add(wedgeFill())
 ;
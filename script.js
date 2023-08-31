var crsr = document.querySelector("#cursor")
var crsrb = document.querySelector("#cursor-blur")

document.addEventListener('mousemove',function(dets){
    crsr.style.left = dets.x-10+"px"
    crsr.style.top = dets.y-10+"px"
    crsrb.style.left = dets.x- 200 +"px"
    crsrb.style.top = dets.y-200 +"px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        crsr.style.scale = 4
        crsr.style.border = "0.5px solid white"
        crsr.style.backgroundColor = "transparent"
    })
    e.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0.5px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

var c = document.querySelectorAll("#overlay")
c.forEach(function(e){
    
    e.addEventListener("mouseenter", function(){
        crsr.style.scale = 4
        crsr.style.border = "0.5px solid white"
        crsr.style.backgroundColor = "transparent"
    })
    e.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0.5px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.to("#nav",{
    backgroundColor : 'black',
    height:"110px",
    duration : 1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start: "top -10%",
        end:"top -11%",
        scrub:1,    
    },
})

gsap.to("#main",{
    backgroundColor : 'black',
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        scrub:2,
        start: "top -30%",
        end:"top -31%"
        // markers:true
    }
})

gsap.from("#about-us img, #about-us-in",{
    scale:0.2,
    y:50,
    opacity: 0,
    duration: 1,
    // stagger: 0.4,  
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:3,
        // markers: true
    }
})

gsap.from(".card",{
    y:50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,  
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 65%",
        end:"top 60%",
        scrub:2,
        // markers: true
    }
})

gsap.from("#colon1",{
    x:-30,
    y:-30,
    opacity: 0,
    duration: 1,  
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:4,
        // markers: true
    }
})

gsap.from("#colon2",{
    x:30,
    y:30,
    opacity: 0,
    duration: 1,  
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        scrub:4,
        // markers: true
    }
})

gsap.from("#page4 h1",{
    y: 50,  
    opacity: 0,
    duration: 1,  
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3,
        // markers: true
    }
})
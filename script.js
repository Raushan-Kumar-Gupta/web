

tl=gsap.timeline();

tl.from(".line h1",{
    y:150,
    stagger:0.2,
    duration:0.6,
    delay:0.5,
})
tl.from("#line-part1, .line h2",{
    opacity:0,
    onStart: function(){
        var counter=document.querySelector('#line-part1 h5');
        var cnt=0;
        setInterval(function(){
            if(cnt!=100){
                cnt++;
                counter.innerHTML=cnt;
            }
        },40)
    }
})

tl.to("#loader",{ 
    opacity:0, 
    duration:0.4,
    delay:4, 
   
})

tl.from("#page1",{
    delay:0.2,
    y:1600,
    duration:0.5,
    opacity:0,
    ease:power4,
})
tl.to("#loader",{ 
    display:"none",
   
})


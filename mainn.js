let daynight = document.querySelector(".daynight");
let banner = document.querySelector(".bnnner");
daynight.addEventListener("click", function(){
    banner.classList.toggle("night");
})
var options = {
   strings: ["dropXout" ,"Youtuber", "coder"],
   loop:true,
   typeSpeed: 100,
   backSpeed: 50,
   backDelay:1000,
   smartBackspace: true,
   loop: true
};
var typed = new Typed ("#text", options);
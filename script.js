let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("sec");
function clock(){
  let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

hours.innerHTML=h;
minutes.innerHTML=m;
seconds.innerHTML=s;  
}

var interval = setInterval(clock, 1000);
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{
    let currentTime = new Date();

    hrs.textContent = currentTime.getHours()<10? "0"+currentTime.getHours(): currentTime.getHours();
    min.textContent = currentTime.getMinutes()<10? "0"+currentTime.getMinutes(): currentTime.getMinutes();
    sec.textContent = currentTime.getSeconds()<10? "0"+currentTime.getSeconds(): currentTime.getSeconds();
}, 1000);
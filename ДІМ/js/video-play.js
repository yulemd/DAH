function vidplay() {
    var video = document.getElementById("Video1");
    var button = document.getElementById("play");
    var greet = document.getElementById("greeting");
    if (video.paused) {
       video.play();
       button.style.display = "none";
       greet.style.display = "none";
       video.style.filter = "brightness(100%)";
       video.addEventListener("click", () => {
           button.style.display = "block";
           greet.style.display = "block";
           video.style.filter = "brightness(30%)";
        });
       /*button.textContent = "||";*/
    }    
    /*else {
        video.addEventListener("click", () => {
            button.style.display = "block";
         });
       video.pause();
       button.textContent = ">";
    }*/
 }

 function restart() {
     var video = document.getElementById("Video1");
     video.currentTime = 0;
 }

 function skip(value) {
     var video = document.getElementById("Video1");
     video.currentTime += value;
 }    
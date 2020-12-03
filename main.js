$(document).ready(function() {
    $("img").click(function() {
        var audio = new Audio("final.mp3");
        audio.volume = 0.5;
        audio.play();
        $(this).attr("src", "hit2.png");
        setTimeout(() => {$(this).attr("src", "hit1.png")} , 1000);
        $('.run-text').removeClass("hide");
   })
})
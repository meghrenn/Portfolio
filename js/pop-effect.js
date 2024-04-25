

const bop = new Audio('../audio/pop.wav');
bop.preload = 'auto';
// bop.playbackRate = 3;
document.addEventListener("DOMContentLoaded", function () {




    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const dotButtons = document.querySelectorAll(".dot");

    prevButton.addEventListener("click", playAudio);
    nextButton.addEventListener("click", playAudio);
    dotButtons.forEach(function (dotButton) {
        dotButton.addEventListener('click', playAudio);
    });

    function playAudio() {
        bop.play();
    }
});
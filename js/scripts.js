$(document).ready(function () {
    squishHeader();


    // HEADER RESPONSIVITY
    const pop = new Audio('../audio/pop.wav');
    const chime1 = new Audio('../audio/chime1.wav');
    const chime2 = new Audio('../audio/chime2.wav');
    const chime3 = new Audio('../audio/chime3.wav');
    pop.preload = 'auto';
    chime1.preload = 'auto';
    chime2.preload = 'auto';
    chime3.preload = 'auto';




    const $tab = $(".tabs");
    const $tabName = $(".tabs li a");
    $tabName.on('mouseover', function () {
        $(this).addClass(' active-bounce-down');


    });
    $tabName.on('mouseout', function () {
        $tabName.removeClass(' active-bounce-down');
    });

    // console.log($tab.eq(0).children().eq(0));



    $tab.eq(0).children().eq(0).on('mouseover', function () {
        chime1.play();
    });
    $tab.eq(0).children().eq(1).on('mouseover', function () {
        chime2.play();
    });
    $tab.eq(0).children().eq(2).on('mouseover', function () {
        chime3.play();
    });



    $('#name').on('mouseover', function () {
        pop.play();
        $('#bee').addClass(' active-bounce');

    });
    $('#name').on('mouseout', function () {
        $('#bee').removeClass(' active-bounce');
    });




    // $("#click-for-cv").on("click", function () {
    //     introAnim("#artist-cv");
    // });
    // $("#exit-cv").on("click", function () {
    //     outroAnim("#artist-cv");
    // });

    // $('html').on("click", function () {
    //     $('#bee').addClass(' active-bounce');
    // });



    // PUSHPINS
    function updatePushpinHolderWidth() {
        var projectTitleWidth = $('.project-title').width();
        var newWidth = projectTitleWidth;
        // var buttonWidth = $('.pinback-button-scale').width();
        $('.pushpin-holder').width(newWidth);
        // $('.pinback-button-scale').height(buttonWidth);
    }

    // Initial setup
    updatePushpinHolderWidth();
    // Update on window resize
    $(window).on('resize', function () {
        updatePushpinHolderWidth();
    });




    //BUTTON AUDIO
    // Create a new Audio object and specify the source
    // const chimes = new Audio('audio/chimes.wav');



    // Select all elements with class "button"
    var buttons = document.querySelectorAll('.button');

    // Iterate over each button and add a click event listener
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Play the audio
            pop.play();
        });
    });








    // SCROLL-BUTTON FUNCTIONALITY
    const scrollDown = new Audio('../audio/scroll-down.wav');
    scrollDown.playbackRate = 3.25;
    scrollDown.preload = 'auto';
    var audioDurationMs = scrollDown.duration * 1000; // Convert seconds to milliseconds
    $('#scroll-list li').on('click', function () {
        var targetId = $(this).data('target');
        var targetOffset = $('#' + targetId).offset().top;  // Get the target element offset from the top of the document
        var initialScrollTop = $(window).scrollTop();  // Get the current scroll position before the animation
        var distanceBeforeScrolling = Math.round(Math.abs(targetOffset - initialScrollTop)); // Calculate the distance from the current scroll position to the target element




        // Get the height of the viewport
        var viewportHeight = $(window).height();

        // Get the height of the document
        var documentHeight = $(document).height();

        // Calculate the amount of padding needed to extend the page's length
        var paddingNeeded = viewportHeight - (documentHeight - targetOffset);

        // Add temporary padding to the bottom of the page
        $('body').css('padding-bottom', paddingNeeded);





        var halfwayPoint = distanceBeforeScrolling / 2;
        // console.log(distanceBeforeScrolling / 2);
        scrollDown.play(0.5);




        $('html, body').animate({
            scrollTop: (targetOffset - window.innerHeight * 0.25)
        }, {
            duration: 1000,
            easing: 'easeInOutBack',
            step: function () {
                // Check if the distance scrolled is less than halfway and the audio duration is longer than the remaining time
                if ($(window).scrollTop() - initialScrollTop < halfwayPoint && audioDurationMs > halfwayPoint) {
                    // Calculate the time remaining for the scroll
                    var remainingScrollTime = halfwayPoint * 1000; // Convert to milliseconds

                    // Pause the audio
                    scrollDown.pause();

                    // Delay resuming audio to prevent it from starting again immediately
                    setTimeout(function () {
                        // Resume audio playback
                        scrollDown.play(0.5);
                    }, remainingScrollTime);
                }

            },
            complete: function () {
                // Remove temporary padding from the bottom of the page when animation completes
                $('body').css('padding-bottom', 0);
            }
        });
    });







    $('#back-to-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, {
            duration: 500,
        });
        scrollDown.play(1);
    });
});

// function updateObjectData() {
//     var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

//     // Check if the viewport width is less than 1200px
//     if (viewportWidth > 1200) {
//         // Update the data attribute with the new SVG path
//         $('#learn-about-me-line').attr('data', 'images/cartoon-meghans/learn-about-me-largevw.svg');
//     } else {
//         if (viewportWidth > 750) {
//             // Update the data attribute with the new SVG path
//             $('#learn-about-me-line').attr('data', 'images/cartoon-meghans/learn-about-me-mediumvw.svg');
//         } else {
//             // Reset the data attribute if the viewport width is 1200px or more
//             $('#learn-about-me-line').attr('data', 'images/cartoon-meghans/learn-about-me-smallvw.svg');
//         }
//     }
// }

// // Call the function initially
// updateObjectData();

// // Add event listener to check viewport width on window resize



function squishHeader() {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth < 650) {
        $("#name a h1").text("");

    } else {
        $("#name a h1").text("Meghan Rennie");
    }

}
$(window).resize(squishHeader);







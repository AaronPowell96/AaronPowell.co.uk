// When the user scrolls the page, execute myFunction 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}
/* If the menu is mobile view the icon runs this function to load a list of menu items */
function navFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* If the menu is mobile view, it will close once an item has been selected */
function navChosen() {
    var topNav = document.getElementById("myTopnav");
    if (topNav.className === "topnav responsive") {
        topNav.className = "topnav";
    }
}

/* Edited from stackOverflow to smoothly transition to anchors */
// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
   var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault(); //try removing and add stopPropogation?
    //e.stopPropogation();
    // top position relative to the document, offset by menuheight
    var pos = $id.offset().top-50;

    // animated top scrolling
    $('html').animate({scrollTop: pos});
});
function aboutme(){
    $('.typed-cursor').hide();
    $(".aboutMeSub").typed({
    strings: ["Get to know me",
    ],
    startDelay: 600,
    typeSpeed: 60,
    backDelay: 100,
    });
    navChosen();
};
function homeClick(){
    $('.typed-cursor').hide();
    $(".home_subHeading").typed({
        strings: ["",
        ],
        typeSpeed: 1,
        backDelay: 100,
        });
    $(".home_title2").typed({
        strings: ["",
        ],
        typeSpeed: 1,
        backDelay: 100,
        });
    $('.typed-cursor').hide();
    $(".home_title").typed({
    strings: ["Aaron Powell",
    ],
    startDelay: 400,
    typeSpeed: 60,
    backDelay: 100,
    callback: function(){
        subHeading();
    }
    });
    navChosen();
};
function projectsClick(){
    $('.typed-cursor').hide();
    $(".projectsSub").typed({
    strings: ["From java to javascript",
    ],
    typeSpeed: 60,
    backDelay: 100,
    });
    navChosen();
};
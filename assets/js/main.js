$(function(){
    $('.typed-cursor').hide();
    $(".home_title").typed({
    strings: ["Aaron",
    ],
    startDelay: 1000,
    typeSpeed: 60,
    backDelay: 10,
    callback: function(){
          couk();
        }
    });
});
function couk(){
    $('.typed-cursor').hide();
    var subHeadText = document.getElementsByClassName('topnav')[0].innerText;
    var uniText = "University of Kent"
    $(".home_title2").typed({
    strings: ["Powell.co.uk","&nbsp;Powell",
    ],
    typeSpeed: 100,
    backDelay: 80,   
    callback: function(){
        subHeading();
    }
});
};
function subHeading(){
    $('.typed-cursor').hide();
    $(".home_subHeading").typed({
    strings: ["Under Construction",
    ],
    startDelay: 200,
    typeSpeed: 60,
    });
};
//projects
$(function(){
    $(".projectsSub").typed({
    strings: ["My projects.", 
    ],
    typeSpeed: 60,
    backDelay: 200,
    });
});
//about
$(function(){
    $(".aboutMeSub").typed({
    strings: ["This is me."
    ],
    typeSpeed: 60,
    backDelay: 100,
    });
});

$(document).ready(function() {
    // Get the modal
var modal = document.getElementById('myModal');
var body = document.getElementById('body');
// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];
var maximise = document.getElementsByClassName("maximiseModalBtn")[0];
   // Get the button that opens the modal
var btn = document.getElementById("myBtn");
// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    body.style.overflow = "hidden";
};

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    modal.style.display = "none";
    body.style.overflow = "auto";
}
maximise.onclick = function() {
    var modalContent = document.getElementById('modal-content');
    if (modalContent.className === "modalNormalSize") {
        modalContent.className += " maximisedModal";
        maximise.innerHTML = "&minus;";
        maximise.style.fontSize = "50px";
    } else {
        modalContent.className = "modalNormalSize";
        maximise.innerHTML = "&#128470;";
        maximise.style.fontSize = "35px";
    }
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
}
});
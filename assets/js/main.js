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
//about
$(function(){
    $(".aboutMeSub").typed({
    strings: ["This is me."
    ],
    typeSpeed: 60,
    backDelay: 100,
    });
});

$(document).ready(function(){
var body = document.getElementById('body');
$(".modalButton").on("click", function() {
    var modal = $(this).data("modal");
    $(modal).show();
    body.style.overflow = "hidden";
  });

$(".close").on("click", function(){
    body.style.overflow = "auto";
    $(this).closest(".modal").hide();
});

$(".maximiseModalBtn").on("click", function(){
    console.log($(this).parent().parent()[0]);
    var modalContent = $(this).parent().parent()[0];
   /** var modalContent = document.getElementById('modal-content'); */
    if (modalContent.className === "modalNormalSize") {
        modalContent.className += " maximisedModal";
        this.innerHTML = "&minus;";
        this.style.fontSize = "58px";
    } else {
        modalContent.className = "modalNormalSize";
        this.innerHTML = "+";
        this.style.fontSize = "58px";
    }
});
  
  $(".modal").on("click", function(e) {
    var className = e.target.className;
    if(className === "modal" || className === "close"){
      $(this).closest(".modal").hide();
      body.style.overflow = "auto";
    }
  });});
/*
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
        maximise.style.fontSize = "58px";
    } else {
        modalContent.className = "modalNormalSize";
        maximise.innerHTML = "+";
        maximise.style.fontSize = "58px";
    }
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
}
});*/
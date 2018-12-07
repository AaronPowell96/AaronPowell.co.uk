$(document).ready(function(){
    $(function(){
        $(".projectsSub").typed({
        strings: ["My projects.", 
        ],
        typeSpeed: 60,
        backDelay: 200,
        });
    });
    $(".hideProjectImages").on("click", function(){
        $("#projectImages").toggle();
    });
});
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type = "text/css" href="assets/css/home.css">
        <script src="assets/js/jquery-3.2.1.js"></script>
        <script src="assets/js/typed.js-master/js/typed.js"></script>
    </head>
    <body>
    <?php include 'menubar.php';?>
        <div class = "banner_cv">
            <h1 class = "title">Skills</h1>
            <span class = "typing_text"></span>
        </div>
        <div class = "content"> 
            <div class = "header">
                <script>
                    $(function(){
                        $(".typing_text").typed({
                        strings: ["My qualifications.", 
                        ],
                        typeSpeed: 20,
                        backDelay: 200,
                        });
                    });
                </script>
            </div>
            <div class = "body">
                <h2 class = "subtitle2">About</h2>
                <p class = "intro_body">This page lists my current skills and qualifications to date. If you wish to access any of my transcripts, including degree certification, grades or results, please don't hesitate to contact me via email.</p>
                <div class = "q_div">
                    <h2 class = "subtitle2">-</h2>
                    <h2 class = "subtitle2">()</h2>
                    <p class = "intro_body">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rem deleniti sint, cumque ipsa qui explicabo dignissimos ducimus vel veniam iste, accusantium eius iure! Tenetur in quidem error vitae architecto.
                    </p>
                    <ul class = "qualification_list">
                        <li>LOLOLOL</li>
                        <li>fsdfdsfdsf sdfsdfds</li>
                    </ul>
                </div>
                <div class = "q_div">
                    <h2 class = "subtitle2">sdfsdfsd</h2>
                    <h2 class = "subtitle2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum a saepe eligendi explicabo, illo quidem reiciendis ullam deleniti architecto ea impedit alias quisquam voluptatem at laborum! Maiores corrupti maxime neque vero, laudantium minima pariatur voluptatum magni reprehenderit consectetur unde beatae commodi aliquam molestias iure iusto, obcaecati enim iste omnis ducimus?</h2>
                    <p class = "intro_body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique quos, quibusdam illo inventore explicabo sint culpa repellendus debitis vel laudantium voluptatem porro necessitatibus modi corporis earum molestiae aliquid corrupti.
                    </p>
                    <ul class = "qualification_list">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </div>
                <div class = "q_div">
                    <h2 class = "subtitle2">GCSE</h2>
                    <h2 class = "subtitle2">1</h2>
                    <ul class = "qualification_list">
                        <li>lol</li>
                    </ul>
                </div>
                <div class = "q_div"> 
                    <h2 class = "subtitle2">Miscellaneous</h2>
                    <ul class = "qualification_list">
                        <li>F</li>
                        <li>Full English Driving License</li>
                        <li></li>
                    </ul>
                </div>
                <div class = "cv_div">
                    <h2 class = "subtitle2">Curriculum Vitae</h2>
                    <p class = "intro_body">If you are interested in viewing my CV, press the button below to download a pdf.</p>
                    <br>
                    <a href="assets/cv/CV.pdf">
							<button class="btn_primary" type="button">Download CV</button>
					</a>
                </div>
            </div>
        </div>
       <!-- include 'copyright.php' -->
    </body>
</html>

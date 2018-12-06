<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type = "text/css" href="assets/css/home.css">
        <link rel = "stylesheet" type="text/css" href = "assets/css/menubar.css">
        <link rel = "stylesheet" type="text/css" href = "assets/css/project.css">
        <link rel = "stylesheet" type="text/css" href = "assets/css/modals.css">
        <link rel="stylesheet" type="text/css" href="assets/js/fancybox-master/dist/jquery.fancybox.min.css"/>
        <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
        <script src="assets/js/jquery-3.2.1.js"></script>
        <script src="assets/js/typed.js-master/js/typed.js"></script>
        <script src="assets/js/main.js"></script>
        <script src="assets/js/menu.js"></script>
        <script src="assets/js/fancybox-master/dist/jquery.fancybox.min.js"></script>
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <meta property="og:image" content="http://www.aaronpowell.co.uk/assets/images/profile_pic-min.jpg">
        <meta property="og:image:alt" content="http://www.aaronpowell.co.uk/assets/images/laptop.jpg" property="og:image:type" content="image/jpg">
<meta property="og:title" content="Aaron Powell's Portfolio" property="og:type" content="Website">
<meta property="og:description" content="Portfolio website of Computer Science Student, Aaron Powell.">
<meta property="og:url" content="http://www.AaronPowell.co.uk">
<title>Aaron Powell's Portfolio</title>
</head>
    <body id="body">
       <?php include 'menubar.php'; ?>
        <div id="home">
        <div class = "banner_home">
            <span class = "typing_text title home_title"></span>
            <span class = "typing_text title home_title2"></span>
            <br/>
            <span class = "typing_text home_subHeading"></span>
            </div>
</div>
        <div class = "content">
            <div class = "header">

            </div>
            <?php include 'modals.php'; ?>
<div class = "profile_div">
    <span class = "profile_pic"></span>
                    <!--<span class = "profile_pic"></span>-->
                </div>
                <!-- Trigger/Open The Modal -->
<button class ="modalButton cvBtn" data-modal="#cvModal">View CV</button>
                <h2 class="subtitle2">Who am I? </h2>
                <div class = "content_body light-wrapper">
                I am Aaron Powell and this is my portfolio. If you’re looking for my CV you’re lucky, its right above here!</p>
                <p>
                I am currently in the second year of my Computer Science course at University of Kent as of 20/11/2018. 
                The purose of this website is to expose myself to every step need in the deployment of a website. While also showing off my projects, I intend to imlement technologies
                that I learn on a day to day basis into the website and projects as much as possible. A focus of creating this website is clean and understandable code, and developing with
                a mobile-first approach.</p>
</div>
                <div class = "content_body light-wrapper">
                The languages, libraries, and frameworks I have used to date (<i>not to say I am an expert by any means</i>) are:<ul class="languageList">
                     <li>Java</li>
                     <li>HTML</li>
                     <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>php</li>
                    <li>MySQL</li>
</ul>
</div>
<p class = "content_body light-wrapper">
                    Outside of university curriculum I enjoy diving deeper into javascript, following tutorials for further exposure and I have recently begun
                    learning the react library, with future goals of learning NodeJS with expressJS. <br/>Learning more about microservices is also on the list, but lets
                    not get overwhelmed, I am willing to take it a step at a time to be a better developer in the long run.
</p>
                
                <div class = "contact_field">
                    <p class = "content_body dark-wrapper">
                        I am currently looking for a Year in Industry placement, beginning June-September 2019.
                        Academic Email:  <a class="text_links" href = "mailto:AP820@kent.ac.uk">AP820@kent.ac.uk</a>
                    </p>
                </div>
        </div>
    <?php include 'about.php'; ?> 
    <?php include 'projects.php'; ?>
    </body>
</html>

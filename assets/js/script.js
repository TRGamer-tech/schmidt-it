$(document).ready(function(){
    $('#loader').fadeOut('slow');
});

$(window).on('load', function() {
    $('#eye1').click(function(){       
        if($(this).hasClass('bi-eye-fill')){         
            $(this).removeClass('bi-eye-fill');        
            $(this).addClass('bi-eye-slash-fill');        
            $('#pwToggle1').attr('type','text');           
        } else {        
            $(this).removeClass('bi-eye-slash-fill');         
            $(this).addClass('bi-eye-fill');           
            $('#pwToggle1').attr('type','password');
        }
    });

    $('#eye2').click(function(){       
        if($(this).hasClass('bi-eye-fill')){         
            $(this).removeClass('bi-eye-fill');        
            $(this).addClass('bi-eye-slash-fill');        
            $('#pwToggle2').attr('type','text');           
        } else {        
            $(this).removeClass('bi-eye-slash-fill');         
            $(this).addClass('bi-eye-fill');           
            $('#pwToggle2').attr('type','password');
        }
    });

    //Light-Dark Mode Switch
    function activateDarkMode() {
        $('body').removeClass('bg-light');
        $('body').addClass('bg-dark');
        $('body').removeClass('text-dark');
        $('body').addClass('text-light');
        $('#loader').removeClass('loader-light');
        $('#loader').addClass('loader-dark');
        $('nav').removeClass('navbar-light');
        $('nav').addClass('navbar-dark');
        //$('nav').removeClass('bg-light');
        //$('nav').addClass('bg-dark');
        $('nav').removeClass('shadow-black');
        $('nav').addClass('shadow-white');
        $('a.active').addClass('dark-active');
        $('.dropdown-menu').removeClass('dropdown-menu-light');
        $('.dropdown-menu').addClass('dropdown-menu-dark');
        $('.footer').removeClass('bg-light');
        $('.footer').addClass('bg-dark');
        $('.footer').removeClass('text-dark');
        $('.footer').addClass('text-light');
        $('.footer').removeClass('footer-shadow-black');
        $('.footer').addClass('footer-shadow-white');
        $('table').removeClass('table-light');
        $('table').addClass('table-dark');
        $('.modal-content').removeClass('bg-light');
        $('.modal-content').addClass('bg-dark');
        $('.form-control').removeClass('bg-light');
        $('.form-control').addClass('bg-secondary');
        $('.form-control').removeClass('text-dark');
        $('.form-control').addClass('text-light');
        $('.accordion-item').removeClass('bg-light');
        $('.accordion-item').addClass('bg-dark');
        $('.accordion-item').removeClass('text-dark');
        $('.accordion-item').addClass('text-light');
        $('.accordion-button').removeClass('bg-light');
        $('.accordion-button').addClass('bg-dark');
        $('.accordion-button').addClass('light-link');
        $('.input-group-text').removeClass('bg-light');
        $('.input-group-text').addClass('bg-secondary');
        $('.input-group-text').removeClass('text-dark');
        $('.input-group-text').addClass('text-light');
        $('#modeSwitchText').removeClass('text-dark');
        $('#modeSwitchText').addClass('text-light');
        $('#modeIcon').removeClass('text-dark');
        $('#modeIcon').addClass('text-light');
        $('#modeIcon').removeClass('bi-brightness-high-fill');
        $('#modeIcon').addClass('bi-moon-stars-fill');
        $('#textModeSwitchText').removeClass('text-dark');
        $('#textModeSwitchText').addClass('text-light');
        $('#textModeIcon').removeClass('text-dark');
        $('#textModeIcon').addClass('text-light');
        $('#copyRight').removeClass('text-dark');
        $('#copyRight').addClass('text-light');
        $('#twitter-social').addClass('light-link');
    }

    function deactivateDarkMode() {
        $('body').addClass('bg-light');
        $('body').removeClass('bg-dark');
        $('body').addClass('text-dark');
        $('body').removeClass('text-light');
        $('#loader').addClass('loader-light');
        $('#loader').removeClass('loader-dark');
        $('nav').addClass('navbar-light');
        $('nav').removeClass('navbar-dark');
        //$('nav').addClass('bg-light');
        //$('nav').removeClass('bg-dark');
        $('nav').addClass('shadow-black');
        $('nav').removeClass('shadow-white');
        $('a.active').removeClass('dark-active');
        $('.dropdown-menu').addClass('dropdown-menu-light');
        $('.dropdown-menu').removeClass('dropdown-menu-dark');
        $('.footer').addClass('bg-light');
        $('.footer').removeClass('bg-dark');
        $('.footer').addClass('text-dark');
        $('.footer').removeClass('text-light');
        $('.footer').addClass('footer-shadow-black');
        $('.footer').removeClass('footer-shadow-white');
        $('table').addClass('table-light');
        $('table').removeClass('table-dark');
        $('.modal-content').addClass('bg-light');
        $('.modal-content').removeClass('bg-dark');
        $('.form-control').addClass('bg-light');
        $('.form-control').removeClass('bg-secondary');
        $('.form-control').addClass('text-dark');
        $('.form-control').removeClass('text-light');
        $('.accordion-item').addClass('bg-light');
        $('.accordion-item').removeClass('bg-dark');
        $('.accordion-item').addClass('text-dark');
        $('.accordion-item').removeClass('text-light');
        $('.accordion-button').addClass('bg-light');
        $('.accordion-button').removeClass('bg-dark');
        $('.accordion-button').removeClass('light-link');
        $('.input-group-text').addClass('bg-light');
        $('.input-group-text').removeClass('bg-secondary');
        $('.input-group-text').addClass('text-dark');
        $('.input-group-text').removeClass('text-light');
        $('#modeSwitchText').addClass('text-dark');
        $('#modeSwitchText').removeClass('text-light');
        $('#modeIcon').addClass('text-dark');
        $('#modeIcon').removeClass('text-light');
        $('#modeIcon').addClass('bi-brightness-high-fill');
        $('#modeIcon').removeClass('bi-moon-stars-fill'); 
        $('#textModeSwitchText').addClass('text-dark');
        $('#textModeSwitchText').removeClass('text-light');
        $('#textModeIcon').addClass('text-dark');
        $('#textModeIcon').removeClass('text-light');
        $('#copyRight').addClass('text-dark');
        $('#copyRight').removeClass('text-light');
        $('#twitter-social').removeClass('light-link');
    }

    $("#modeSwitch").on("click", () => {
        if ($("#modeSwitch").prop("checked")) {
            activateDarkMode();
            localStorage.setItem("darkmode", "enabled");
            $('#modeSwitchText').text('Dark Mode');
        } else {
            deactivateDarkMode();
            localStorage.setItem("darkmode", "disabled");
            $('#modeSwitchText').text('Light Mode');
        }
      });
      
      let mode;
      mode = localStorage.getItem("darkmode");
      
      if (mode == "enabled") {
        activateDarkMode();
        $("#modeSwitch").prop("checked", true);
        $('#modeSwitchText').text('Dark Mode');
      } else {
        deactivateDarkMode();
        $("#modeSwitch").prop("checked", false);
        $('#modeSwitchText').text('Light Mode');
      }


    //Dyslexic-Normal Font Switch

    function deactivateSpecialText() {
        $('h1').removeClass('special-text');
        $('h1').addClass('normal-text');
        $('h2').removeClass('special-text');
        $('h2').addClass('normal-text');
        $('h3').removeClass('special-text');
        $('h3').addClass('normal-text');
        $('a').removeClass('special-text');
        $('a').addClass('normal-text');
        $('b').removeClass('special-text');
        $('b').addClass('normal-text');
        $('p').removeClass('special-text');
        $('p').addClass('sans-serif-font');
        $('span').removeClass('special-text');
        $('span').addClass('sans-serif-font');
        $('button').removeClass('special-text');
        $('button').addClass('normal-text');
        $('div').removeClass('special-text');
        $('div').addClass('sans-serif-font');
        $('input').removeClass('special-text');
        $('input').addClass('sans-serif-font');
        $('label').removeClass('special-text');
        $('label').addClass('sans-serif-font');
        $('pre').removeClass('special-text');
        $('#textModeSwitchText').addClass('special-text');
        $('#textModeSwitchText').removeClass('normal-text');
        $('#textModeIcon').removeClass('bi-type');
        $('#textModeIcon').addClass('bi-fonts');
    }

    function activateSpecialText() {
        $('h1').removeClass('normal-text');
        $('h1').addClass('special-text');
        $('h2').removeClass('normal-text');
        $('h2').addClass('special-text');
        $('h3').removeClass('normal-text');
        $('h3').addClass('special-text');
        $('a').removeClass('normal-text');
        $('a').addClass('special-text');
        $('b').removeClass('normal-text');
        $('b').addClass('special-text');
        $('p').removeClass('sans-serif-font');
        $('p').addClass('special-text');
        $('span').removeClass('sans-serif-font');
        $('span').addClass('special-text');
        $('button').removeClass('normal-text');
        $('button').addClass('special-text');
        $('div').removeClass('sans-serif-font');
        $('div').addClass('special-text');
        $('input').removeClass('sans-serif-font');
        $('input').addClass('special-text');
        $('label').removeClass('sans-serif-font');
        $('label').addClass('special-text');
        $('pre').addClass('special-text');
        $('#textModeSwitchText').addClass('normal-text');
        $('#textModeSwitchText').removeClass('special-text');
        $('#textModeIcon').removeClass('bi-fonts');
        $('#textModeIcon').addClass('bi-type');
    }

    $("#textModeSwitch").on("click", () => {
    if ($("#textModeSwitch").prop("checked")) {
        activateSpecialText();
        localStorage.setItem("SpecialText", "enabled");
        $('#textModeSwitchText').text('Activate Normal Font');
    } else {
        deactivateSpecialText();
        localStorage.setItem("SpecialText", "disabled");
        $('#textModeSwitchText').text('Activate Dyslexic Font');
    }
    });
    
    let textMode;
    textMode = localStorage.getItem("SpecialText");
    
    if (textMode == "enabled") {
        activateSpecialText();
        $("#textModeSwitch").prop("checked", true);
        $('#textModeSwitchText').text('Activate Normal Font');
    } else {
        deactivateSpecialText();
        $("#textModeSwitch").prop("checked", false);
        $('#textModeSwitchText').text('Activate Dyslexic Font');
    }

    //Add Underline to all Links on hover
    $('a:link').not('.nav-link').not('.btn').addClass('underline');

    //Add active link color if bg is dark
    $('body.bg-dark .nav-link.active').not('.btn').addClass('dark-active');

    //Remove dark active link color if bg is light
    $('body.bg-light .nav-link.active').not('.btn').removeClass('dark-active');

    //Add better link color if bg is dark
    $('body.bg-dark a.underline').not('.nav-link').not('.btn').addClass('light-link');

    //Remove better link color if bg is light
    $('body.bg-light a.underline').not('.nav-link').not('.btn').removeClass('light-link');

    //Add better nav link color if bg is dark
    $('body.bg-dark a.nav-link').not('.nav-link').not('.btn').addClass('light-nav-link');

    //Remove better nav link color if bg is light
    $('body.bg-light a.nav-link').not('.nav-link').not('.btn').removeClass('light-nav-link');

    // Add Active to current site
    var pathname = window.location.pathname;
    console.log("Current URL: " + pathname);
    switch (pathname) {
        case "/index":
        case "/index.html":
        case "/":
            $(".nav-link").eq(2).addClass("active");
            $(".nav-item > ul > li > a").eq(0).addClass("selecteddropdown");
            console.log("Active added to " + pathname);
            break;
        case "/firma":
        case "/firma.html":
            $(".nav-link").eq(1).addClass("active");
            console.log("Active added to " + pathname);
            break;
        case "/firma/ueber-mich":
        case "/firma/ueber-mich.html":
            $(".nav-item > ul > li > a").eq(0).addClass("selecteddropdown");
            console.log("Active added to " + pathname);
            break;
        case "/firma/faq":
        case "/firma/faq.html":
            $(".nav-item > ul > li > a").eq(1).addClass("selecteddropdown");
            console.log("Active added to " + pathname);
            break;
        case "/dienste":
        case "/dienste.html":
            $(".nav-link").eq(2).addClass("active");
            console.log("Active added to " + pathname);
            break;
        case "/news":
        case "/news.html":
            $(".nav-link").eq(3).addClass("active");
            console.log("Active added to " + pathname);
            break;
        case "/kontakt":
        case "/kontakt.html":
            $(".nav-link").eq(4).addClass("active");
            console.log("Active added to " + pathname);
            break;
        default:
            console.log("Active added to nothing");
            break;
    }
});  
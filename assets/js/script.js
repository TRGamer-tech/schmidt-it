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
    function activateLightMode() {
        $('body').removeClass('bg-dark');
        $('body').addClass('bg-light');
        $('body').removeClass('text-light');
        $('body').addClass('text-dark');
        $('nav').removeClass('navbar-dark');
        $('nav').addClass('navbar-light');
        $('nav').removeClass('bg-dark');
        $('nav').addClass('bg-light');
        $('nav').removeClass('shadow-white');
        $('nav').addClass('shadow-black');
        $('.dropdown-menu').removeClass('dropdown-menu-dark');
        $('.dropdown-menu').addClass('dropdown-menu-light');
        $('.footer').removeClass('bg-dark');
        $('.footer').addClass('bg-light');
        $('.footer').removeClass('text-dark');
        $('.footer').addClass('text-light');
        $('.footer').removeClass('footer-shadow-white');
        $('.footer').addClass('footer-shadow-black');
        $('table').removeClass('table-dark');
        $('table').addClass('table-light');
        $('.modal-content').removeClass('bg-dark');
        $('.modal-content').addClass('bg-light');
        $('.form-control').removeClass('bg-secondary');
        $('.form-control').addClass('bg-light');
        $('.form-control').removeClass('text-light');
        $('.form-control').addClass('text-dark');
        $('.input-group-text').removeClass('bg-secondary');
        $('.input-group-text').addClass('bg-light');
        $('.input-group-text').removeClass('text-light');
        $('.input-group-text').addClass('text-dark');
        $('#modeSwitchText').removeClass('text-light');
        $('#modeSwitchText').addClass('text-dark');
        $('#modeIcon').removeClass('text-light');
        $('#modeIcon').addClass('text-dark');
        $('#modeIcon').removeClass('bi-moon-stars-fill');
        $('#modeIcon').addClass('bi-brightness-high-fill');
        $('#textModeSwitchText').removeClass('text-light');
        $('#textModeSwitchText').addClass('text-dark');
        $('#textModeIcon').removeClass('text-light');
        $('#textModeIcon').addClass('text-dark');
        $('#copyRight').removeClass('text-light');
        $('#copyRight').addClass('text-dark');
        $('#secretbtn').addClass('text-light');
        $('#secretbtn').removeClass('text-dark');
        $('#secretbtn').addClass('btn-light');
        $('#secretbtn').removeClass('btn-dark');
    }

    function deactivateLightMode() {
        $('body').addClass('bg-dark');
        $('body').removeClass('bg-light');
        $('body').addClass('text-light');
        $('body').removeClass('text-dark');
        $('nav').addClass('navbar-dark');
        $('nav').removeClass('navbar-light');
        $('nav').addClass('bg-dark');
        $('nav').removeClass('bg-light');
        $('nav').addClass('shadow-white');
        $('nav').removeClass('shadow-black');
        $('.dropdown-menu').addClass('dropdown-menu-dark');
        $('.dropdown-menu').removeClass('dropdown-menu-light');
        $('.footer').addClass('bg-dark');
        $('.footer').removeClass('bg-light');
        $('.footer').addClass('text-dark');
        $('.footer').removeClass('text-light');
        $('.footer').addClass('footer-shadow-white');
        $('.footer').removeClass('footer-shadow-black');
        $('table').addClass('table-dark');
        $('table').removeClass('table-light');
        $('.modal-content').addClass('bg-dark');
        $('.modal-content').removeClass('bg-light');
        $('.form-control').addClass('bg-secondary');
        $('.form-control').removeClass('bg-light');
        $('.form-control').addClass('text-light');
        $('.form-control').removeClass('text-dark');
        $('.input-group-text').addClass('bg-secondary');
        $('.input-group-text').removeClass('bg-light');
        $('.input-group-text').addClass('text-light');
        $('.input-group-text').removeClass('text-dark');
        $('#modeSwitchText').addClass('text-light');
        $('#modeSwitchText').removeClass('text-dark');
        $('#modeIcon').addClass('text-light');
        $('#modeIcon').removeClass('text-dark');
        $('#modeIcon').addClass('bi-moon-stars-fill');
        $('#modeIcon').removeClass('bi-brightness-high-fill');
        $('#textModeSwitchText').addClass('text-light');
        $('#textModeSwitchText').removeClass('text-dark');
        $('#textModeIcon').addClass('text-light');
        $('#textModeIcon').removeClass('text-dark');
        $('#copyRight').addClass('text-light');
        $('#copyRight').removeClass('text-dark');
        $('#secretbtn').removeClass('text-light');
        $('#secretbtn').addClass('text-dark');
        $('#secretbtn').removeClass('btn-light');
        $('#secretbtn').addClass('btn-dark');
    }

    $("#modeSwitch").on("click", () => {
        if ($("#modeSwitch").prop("checked")) {
            activateLightMode();
            localStorage.setItem("lightmode", "enabled");
            $('#modeSwitchText').text('Light Mode');
        } else {
            deactivateLightMode();
            localStorage.setItem("lightmode", "disabled");
            $('#modeSwitchText').text('Dark Mode');
        }
      });
      
      let mode;
      mode = localStorage.getItem("lightmode");
      
      if (mode == "enabled") {
        activateLightMode();
        $("#modeSwitch").prop("checked", true);
        $('#modeSwitchText').text('Light Mode');
      } else {
        deactivateLightMode();
        $("#modeSwitch").prop("checked", false);
        $('#modeSwitchText').text('Dark Mode');
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
        case "/index.php":
        case "/":
            $(".nav-link").eq(0).addClass("active");
            console.log("Active added to " + pathname);
            break;
        case "/helpful":
        case "/helpful.php":
            $(".nav-link").eq(1).addClass("active");
            console.log("Active added to " + pathname);
            break;
        case "/timetable":
        case "/timetable.php":
            $(".nav-link").eq(2).addClass("active");
            console.log("Active added to " + pathname);
            break;
        case "/planing":
        case "/planing.php":
            $(".nav-link").eq(3).addClass("active");
            console.log("Active added to " + pathname);
            break;
        case "/contact":
        case "/contact.php":
            $(".nav-link").eq(4).addClass("active");
            console.log("Active added to " + pathname);
            break;
        case "/secret":
        case "/secret.php":
            $("#secretbtn").eq(0).removeClass("btn-light");
            $("#secretbtn").eq(0).removeClass("btn-dark");
            $("#secretbtn").eq(0).removeClass("text-light");
            $("#secretbtn").eq(0).removeClass("text-dark");
            $("#secretbtn").eq(0).addClass("btn-secondary");
            console.log("Active added to " + pathname);
            break;
        case "/login":
        case "/login.php":
            $(".loginToggle").eq(0).addClass("btn-primary");
            $(".loginToggle").eq(0).removeClass("btn-outline-primary");
            console.log("Active added to " + pathname);
            break;
        case "/register":
        case "/register.php":
            $(".loginToggle").eq(1).addClass("btn-info");
            $(".loginToggle").eq(1).removeClass("btn-outline-info");
            console.log("Active added to " + pathname);
            break;
        case "/account":
        case "/account.php":
            $(".shadow-secondary .dropdown-item").eq(1).addClass("active");
            console.log("Active added to " + pathname);
            break;
        case "/admin/dashboard":
        case "/admin/dashboard.php":
            $(".nav-link").eq(1).addClass("active");
            $(".shadow-secondary .dropdown-item").eq(0).addClass("active");
            console.log("Active added to " + pathname);
            break;
        case  "/admin/perms":
        case  "/admin/perms.php":
            $(".nav-link").eq(2).addClass("active");
            console.log("Active added to " + pathname);
            break;
        default:
            console.log("Active added to nothing");
            break;
    }
});  
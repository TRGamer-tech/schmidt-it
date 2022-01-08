// JavaScript Document

/* <----------------------------- Navigation ----------------------------> */
window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
}) 
/* <----------------------------- Navigation ----------------------------> */

/* <---------------------------- Menu Button ----------------------------> */

/* only execute this script when the document is ready */
$(document).ready(function(){
	/* function called when you click of the button */
	$("button").click(function(){

		/* this if else to change the text in the button */
    
    if($("button").text() == "☰"){
			$("button").text("×");
		} else if($("button").text() == "×"){
			$("button").text("☰");
		}

		/* this function toggle the visibility of our "li" elements */
		$(".navli").toggle("slow");
	});
});

/* <---------------------------- Menu Button ----------------------------> */

/* <----------------------------- Preloader -----------------------------> */
$(document).ready(function() {
   window.setTimeout("fadeMyDiv();", 2000); //call fade in 2 seconds
 }
)

function fadeMyDiv() {
   $(".loader").fadeOut('slow');
}
/* <----------------------------- Preloader -----------------------------> */

/* <------------------------- Random Nav Colors -------------------------> */
var randomLinks = $('.navlink');
var original = randomLinks.css("color");
var colors = ['#A86931', '#444B75', '#BF8BDE'];

$(".navlink").hover(
	function () { //mouseover
		var col2 = Math.floor(Math.random() * colors.length);
		var newcolor = colors[col2];
		$(this).css('color', newcolor);
	}, 
	function () { //mouseout
		$('a.navlink').css('color', '');
	}
);
/* <------------------------- Random Nav Colors -------------------------> */

/* <------------------------ Random Links Colors ------------------------> */
var rdmlinks = $('.rdmcolorlink');
var orig = rdmlinks.css('color');
var clr = ['#A86931', '#444B75', '#BF8BDE'];

rdmlinks.hover(function () { //mouseover
    var clr2 = Math.floor(Math.random() * clr.length);
    var newclr = clr[clr2];
    $(this).css('color', newclr);
}, 
function () { //mouseout
    $('.rdmcolorlink').css('color', '');
});
/* <------------------------ Random Links Colors ------------------------> */

/* <-------------------------- H1 Text rotator --------------------------> */
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 150 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
		/*
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
		*/
    };
/* <-------------------------- H1 Text rotator --------------------------> */

/* <---------------------- Custom Right-Click Menu ----------------------> */
// Trigger action when the contexmenu is about to be shown
$(document).bind("contextmenu", function (event) {
    
    // Avoid the real one
    event.preventDefault();
    
    // Show contextmenu
    $(".custom-menu").finish().toggle(100).
    
    // In the right position (the mouse)
    css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });
});


// If the document is clicked somewhere
$(document).bind("mousedown", function (e) {
    
    // If the clicked element is not the menu
    if (!$(e.target).parents(".custom-menu").length > 0) {
        
        // Hide it
        $(".custom-menu").hide(100);
    }
});


// If the menu element is clicked
$(".custom-menu li").click(function(){
    
    // This is the triggered action name
    switch($(this).attr("data-action")) {
        
        // A case for each action. Your actions here
        case "first": console.log("Zu Hauptseite gewechselt"); break;
        case "second": console.log("Zur vorherigen Seite gewechselt"); break;
        case "third": console.log("Zur letzten Seite gewechselt"); break;
    }
	
	
  
    // Hide it AFTER the action was triggered
    $(".custom-menu").hide(100);
  });
/* <---------------------- Custom Right-Click Menu ----------------------> */

/* <-------------------------- Scroll indicator -------------------------> */
$(function(){
  $('#progress').progress();
});
/* <-------------------------- Scroll indicator -------------------------> */

/* <------------------------------ Dark Mode ----------------------------> */
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#darkmodebtn');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});

if (darkMode !== 'enabled'){
  $(".hovercards").hover(function(){
    $(this).toggleClass("blackhover");
  });
} else if (darkMode == 'enabled') {
  $(".hovercards").hover(function(){
    $(this).toggleClass("whitehover");
  });
}

/* <------------------------------ Dark Mode ----------------------------> */

/* <------------------------------ reCaptcha ----------------------------> */
var width = $('.g-recaptcha').parent().width();
if (width < 300) {
	var scale = width / 300;
	$('.g-recaptcha').css('transform', 'scale(' + scale + ')');
	$('.g-recaptcha').css('-webkit-transform', 'scale(' + scale + ')');
	$('.g-recaptcha').css('transform-origin', '0 0');
	$('.g-recaptcha').css('-webkit-transform-origin', '0 0');
}
/* <------------------------------ reCaptcha ----------------------------> */
$(window).load(function() {
		$("body").addClass("will-fadein");;
	});

$(document).ready(function($){
    $('body').addClass('fadein');
    //Datepicker.initDatepicker();
    dropdown();
});


// slider
var triggers = $('ul.triggers li');
var images = $('div.sliders .slide');
var lastElem = triggers.length-1;
var target;

triggers.first().addClass('active');
//images.css({ 'position': 'absolute','z-index':2 }).first().css({ 'position': 'absolute','z-index':3 });
images.removeClass('active').first().addClass('active');

function sliderResponse(target) {
    //images.fadeOut(300).eq(target).fadeIn(300);
    images.css({ 'position': 'absolute','z-index':2 }).eq(target).css({ 'position': 'absolute','z-index':3 });
    images.removeClass('active').eq(target).addClass('active');
    triggers.removeClass('active').eq(target).addClass('active');
}

function sliderTiming() {
    target = $('ul.triggers li.active').index();
    target === lastElem ? target = 0 : target = target+1;
    sliderResponse(target);
}

var timingRun = setInterval(function() { sliderTiming(); },10000);
function resetTiming() {
    clearInterval(timingRun);
    timingRun = setInterval(function() { sliderTiming(); },10000);
}

// dropdown 

function dropdown() {
     $(".dropdown-toggle").click(function(e){
      e.preventDefault();
      $(this).parents(".dropdown").find('.dropdown-menu').toggleClass('show');
      //$(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    });
}


// theme change 

if (localStorage.getItem("admincurrntStylesheet") === null) {
            localStorage.setItem("admincurrntStylesheet", 'main-default');
            //alert(localStorage.currntStylesheet);
        }
    var Stylesheet = localStorage.getItem("admincurrntStylesheet");
    $('head').append('<link rel="stylesheet" href="assets/css/'+ Stylesheet +'.css" type="text/css" />');

$(".theme-dd li a").click(function(e){
                e.preventDefault()  
                var style = $(this).attr('rel');
                localStorage.setItem("admincurrntStylesheet", style);
                var Stylesheet = localStorage.getItem("admincurrntStylesheet");
                $("#main-stylesheet").remove();
                $('head').append('<link rel="stylesheet" id="main-stylesheet" href="assets/css/'+ Stylesheet +'.css" type="text/css" />');
    
$(this).parents(".dropdown").find('.dropdown-menu').toggleClass('show');
    document.location.reload(); 
            });


// scroll animation

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


// grid system one after other

var colCount = 0;
var colWidth = 0;
var margin = 20;
var windowWidth = 0;
var blocks = [];

$(function(){
	$(window).resize(setupBlocks);
});

function setupBlocks() {
	windowWidth = $(window).width();
	colWidth = $('.grid-item').outerWidth();
	blocks = [];
	console.log(blocks);
	colCount = Math.floor(windowWidth/(colWidth+margin*2));
	for(var i=0;i<colCount;i++){
		blocks.push(margin);
	}
	positionBlocks();
}

function positionBlocks() {
	$('.grid-item').each(function(){
		var min = Array.min(blocks);
		var index = $.inArray(min, blocks);
		var leftPos = margin+(index*(colWidth+margin));
		$(this).css({
			'left':leftPos+'px',
			'top':min+'px'
		});
		blocks[index] = min+$(this).outerHeight()+margin;
	});	
}

Array.min = function(array) {
    return Math.min.apply(Math, array);
};
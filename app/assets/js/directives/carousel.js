
angular.module( 'moduleCarousel', [] )

.directive( 'carouselDirective', function () {
  // ...
    
   // $('.accord1 li p').click(function(){
 // $(this).next(".accord-content").slideToggle();
 // $(this).closest("li").siblings().find('.accord-content').slideUp();
 //});
    return {
  
    
    link: function(scope, element, attrs) {
     
        
    $('.app-carousel').each(function() {
        
        
        
                
        var myimg = $(this).find('.carousel-wraper').width();
//$('ul.slides li img').css({"min-width": imgwidth});
$(this).find('ul.slides li img').attr("width",myimg);
$(this).find('ul.slides li .carousel-item').css({"width": myimg});
       var triggers = $(this).find('ul.triggers li');
var images = $(this).find('ul.slides li');
var lastElem = triggers.length-1;
var wrapper = $(this).find('.carousel-wraper ul.slides');
var imgWidth = images.width();
var target;
   

triggers.first().addClass('selected');
wrapper.css('width', imgWidth*(lastElem+1) +'px');
//alert(imgWidth);
function sliderResponse(target) {
    wrapper.stop(true,false).animate({'left':'-'+ imgWidth*target +'px'},300);
    triggers.removeClass('selected').eq(target).addClass('selected');
    
    console.log(target); 
}

triggers.click(function() {
    if ( !$(this).hasClass('selected') ) {
        target = $(this).index();
        sliderResponse(target);
        resetTiming();
    }
});
$('.cnext').click(function() {
    target = $('ul.triggers li.selected').index();
    target === lastElem ? target = 0 : target = target+1;
    sliderResponse(target);
    resetTiming();
});
$('.cprev').click(function() {
    target = $('ul.triggers li.selected').index();
    lastElem = triggers.length-1;
    target === 0 ? target = lastElem : target = target-1;
    sliderResponse(target);
    resetTiming();
});
function sliderTiming() {
   
    target = $('ul.triggers li.selected').index();
    target === lastElem ? target = 0 : target = target+1;
    sliderResponse(target);
   
}
var timingRun = setInterval(function() { sliderTiming(); },5000);
function resetTiming() {
    clearInterval(timingRun);
    timingRun = setInterval(function() { sliderTiming(); },5000);
}
   
        
        
        
    });    
        
        
     
        
   
}
        
        
  };
});




angular.module( 'moduleWizard', [] )

.directive( 'wizardDirective', function () {
  // ...
    
   // $('.accord1 li p').click(function(){
 // $(this).next(".accord-content").slideToggle();
 // $(this).closest("li").siblings().find('.accord-content').slideUp();
 //});
    return {
  
    
    link: function(scope, element, attrs) {
     
        
    $('.app-carousel').each(function() {
        
        
    
var current;
var navstep;
$(function () {
   current = $('.wizard-wrapper').find('.current');
  navstep=$('.nav-step').find('.active');
  $('.wizard-wrapper div').not(current).hide();
}(jQuery));

 
$('#next').on('click', function() {
  if (current.next().length==0) return
  current.next().addClass('current').show();
  current.removeClass('current').hide();
  
    navstep.next().addClass('active');
  navstep.removeClass('active');
  
 current = current.next();
  navstep=navstep.next();
});

$('#prev').on('click', function() {
  if (current.prev().length==0) return
  current.prev().addClass('current').show();
  current.removeClass('current').hide();
  
    navstep.prev().addClass('active');
  navstep.removeClass('active');
  
 current = current.prev();
  navstep=navstep.prev();
});
        
        
    });    
        
        
     
        
   
}
        
        
  };
});



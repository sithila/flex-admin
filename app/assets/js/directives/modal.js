
angular.module( 'moduleA', [] )

.directive( 'modalDirective', function () {
  // ...
    return {
  
    
    link: function(scope, element, attrs) {
        
        scope.toggleModal = function(e) {
            var att1 = $(e.target).data('id');
            //alert(att1);
           ShowDialog(true, att1);
        };
        
        scope.closeModal = function(e) {
             HideDialog();
        };
        
        // model Dialog 
   function ShowDialog(modal, att1) {
      //alert(modal);
      var scrollval = $(window).scrollTop();
      $(".model_dialog .dialog").css("position", "relative").css("top", scrollval);
	  $('<div id="overlay" class="overlay"></div>').appendTo('body');
       
       $('html').css({
            'overflow': 'hidden',
            'height': '100%'
        });
	  //$("body").css("overflow", "hidden");
      $("#overlay").show();
      $("." + att1).fadeIn(300);
       $("." + att1).find('.dialog').addClass('show');
   }
   function HideDialog(modal, att1)
   {
      $("#overlay").hide();
      $(".model_dialog").each(function() {
          $(this).find('.dialog').removeClass('show');
         $(this).fadeOut(300);
      });
	   $('html').css({
            'overflow': 'auto',
            'height': '100%'
        });
      //$("#dialog").fadeOut(300);
   }
        
        
        //
      
    }
  };
});





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
       
      
	  //$("body").css("overflow", "hidden");
      $("#overlay").show();
      $("." + att1).fadeIn(300);
   }
   function HideDialog(modal, att1)
   {
      $("#overlay").hide();
      $(".model_dialog").each(function() {
         $(this).fadeOut(300);
      });
	  $("body").css("overflow", "auto");
      //$("#dialog").fadeOut(300);
   }
        
        
        //
      
    }
  };
});




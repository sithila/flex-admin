
angular.module( 'moduleDropdown', [] )

.directive( 'dropdownDirective', function () {
    
    
  // ...
    return {
  
        link: function(scope, element, attrs, event) {
            
            scope.toggleDropdown = function(e) {
            var toggledd = $(e.target).parents(".dropdown").find('.dropdown-menu').toggleClass('show');
            clearTimeout(debounce);
           //ShowDialog(true, att1);
        };
            
        scope.getDDitem = function(e) {
            e.preventDefault();
            var selectedItem = $(e.target).html();
            var setitem = $(e.target).parents(".dropdown").find('.btn label').text(selectedItem);
            closeMenu();
        };
        
    // $(".dropdown-toggle").click(function(e){
        
    //  e.preventDefault();
     // $(this).parents(".dropdown").find('.dropdown-menu').toggleClass('show');
      //$(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    //     clearTimeout(debounce);
   // });
    
  

$(".dropdown-menu").mouseleave (function() {
    debounce = setTimeout(closeMenu,400);
});

var debounce;
var closeMenu = function(){
    $('.dropdown-menu').removeClass('show');
    clearTimeout(debounce);
}


}
    
 
  };
});



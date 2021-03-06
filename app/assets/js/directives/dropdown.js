
angular.module( 'moduleDropdown', [] )

.directive( 'dropdownDirective', function ($compile) {
    return {
  
        link: function(scope, element, attrs, event) {
            
            scope.toggleDropdown = function(e) {
            var toggledd = $(e.target).parents(".dropdown").find('.dropdown-menu').toggleClass('show');
            if( $(e.target).parents(".dropdown").hasClass('multiselect') ) {

                
            }else{
                clearTimeout(debounce);
            }
        };
            
        scope.getDDitem = function(e) {
            e.preventDefault();
            if( $(e.target).parents(".dropdown").hasClass('multiselect') ) {
                var selectedarray = [];
                var selectedItem = $(e.target).closest('a').find('input[type=checkbox]');
                var selectedItem2 = $(e.target).closest('a').html();
                function checkchange(){
                    if($(selectedItem).is(":checked")) {
                    $(selectedItem).prop('checked', false);
                        var removeItem = selectedItem.val();   
                        console.log(removeItem);
                        var selector = "label.sel-items .sel-item:contains("+ removeItem +")";
                   $(selector).addClass("on");
                    $(selector).remove();    
                    var itemtoRemove = selectedItem.val();
                    }else{
                        selectedarray.push(selectedItem.val());
                        var setitem = $(e.target).parents(".dropdown").find('label.sel-items').append('<span class="sel-item">' + selectedarray + '<span class="icon-close" ng-click="removeItem($event)"><i class="fa fa-times" aria-hidden="true"></i></span></span>');
                        var html = '<div ng-click="removeItem($event)">{{text}}</div>';
                        $compile(setitem)(scope);
                        
                        $(selectedItem).prop('checked', true);
                    }
                    
                };
                
                checkchange();
                
                
                 $(".dropdown.multiselect .dropdown-menu li").each(function() {
                    if($(this).find('input[type=checkbox]').is(":checked")) {
                        selectedarray.push(selectedItem.val());
                    }
                });       
                
            }else{
                var selectedItem = $(e.target).html();
                var setitem = $(e.target).parents(".dropdown").find('.btn label').text(selectedItem);
                
                closeMenu();
            }
        
            
        };
            scope.removeItem = function(e) {
            e.preventDefault();
                var setitem = $(e.target).parents(".sel-item").text();
                var selector = "ul.dropdown-menu .text-center:contains("+ setitem +")";
                $(selector).addClass("on");
                $(selector).find('input[type=checkbox]').prop('checked', false);
             var removeitem = $(e.target).parents('.sel-item').remove();
                
            };
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



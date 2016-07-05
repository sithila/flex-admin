
angular.module( 'moduleDropdown', [] )

.directive( 'dropdownDirective', function ($compile) {
    
    
  // ...
    return {
  
        link: function(scope, element, attrs, event) {
            
            scope.toggleDropdown = function(e) {
            var toggledd = $(e.target).parents(".dropdown").find('.dropdown-menu').toggleClass('show');
            if( $(e.target).parents(".dropdown").hasClass('multiselect') ) {

                
            }else{
                clearTimeout(debounce);
            }
           //ShowDialog(true, att1);
        };
            
        scope.getDDitem = function(e) {
            e.preventDefault();
            //var selectedItem = $(e.target).html();
            //var setitem = $(e.target).parents(".dropdown").find('.btn label').text(selectedItem);
            if( $(e.target).parents(".dropdown").hasClass('multiselect') ) {
                var selectedarray = [];
                var selectedItem = $(e.target).closest('a').find('input[type=checkbox]');
                //var selectedItemcheck = $(e.target).closest('a').find('input[type=checkbox]').prop("checked", true);
                var selectedItem2 = $(e.target).closest('a').html();
                //alert($(e.target).closest('a').html());
                //$(selectedItem).change();
                //$(selectedItem).click()
               //$(e.target).closest('a').find('input[type=checkbox]').prop('checked', true);
                function checkchange(){
                    //alert('ssfsf');
                    if($(selectedItem).is(":checked")) {
                    $(selectedItem).prop('checked', false);
                    //selectedarray.remove(selectedItem.val());
                        var removeItem = selectedItem.val();   // item do array que deverÃ¡ ser removido
                        console.log(removeItem);
                        //var removeItem = 'Alexa'; 
                        //console.log($(selectedItem).parents('.dropdown').find('label.sel-items').html());
                        //var abc = $(".sel-item:contains(Alexa)").filter(function () {
    //return $(this).text('Alexa').length > 0;
//}).remove();
                        var selector = "label.sel-items .sel-item:contains("+ removeItem +")";
                   $(selector).addClass("on");
                    $(selector).remove();    

//var abc = $(".sel-item:contains('Alexa')").remove()


                        //var abc = $(selectedItem).parents('.dropdown').find('label.sel-items .sel-item').filter(":contains('" + removeItem + "')").text();
                        //console.log(abc);
                        //$("abc:contains('" + removeItem + "')").addClass("on");
                    var itemtoRemove = selectedItem.val();
	               //selectedarray.splice($.inArray(itemtoRemove, selectedarray),1);
                        //console.log(selectedarray.length);
                     //var setitem = $(e.target).parents(".dropdown").find('.btn label').remove(removeItem);   
                    //console.log('checked');
                    }else{
                        //
                        selectedarray.push(selectedItem.val());
                        //console.log(selectedarray);
                        var setitem = $(e.target).parents(".dropdown").find('label.sel-items').append('<span class="sel-item">' + selectedarray + '<span class="icon-close" ng-click="removeItem($event)"><i class="fa fa-times" aria-hidden="true"></i></span></span>');
                        var html = '<div ng-click="removeItem($event)">{{text}}</div>';
                        $compile(setitem)(scope);
                        
                        $(selectedItem).prop('checked', true);
                        //console.log('un');
                    }
                    
                };
                
                checkchange();
                
                
                 $(".dropdown.multiselect .dropdown-menu li").each(function() {
                    if($(this).find('input[type=checkbox]').is(":checked")) {
                        selectedarray.push(selectedItem.val());
                        //console.log(selectedarray.length);
                        //var setitem = $(e.target).parents(".dropdown").find('.btn label').append(selectedarray);
                    }
                });
                
                    //if($(selectedItem).is(":checked")) {
                        //alert( selectedItem.val() );
                        //selectedarray.push(selectedItem.val());
                        //var setitems = $(e.target).parents(".dropdown").find('.btn label').text('');
                        //var setitem = $(e.target).parents(".dropdown").find('.btn label').append(selectedItem.val() + ",");
                        //console.log(selectedarray.length);
                    //}
                 
                    //var setitem = $(e.target).parents(".dropdown").find('.btn label').text(','+ selectedItem);
               
                
                
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
                //$(selector).prop('checked', true);
                //console.log(selector.parent().html());
                $(selector).find('input[type=checkbox]').prop('checked', false);
             var removeitem = $(e.target).parents('.sel-item').remove();
                
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



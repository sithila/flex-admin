
angular.module( 'formSubmit', [] )

.directive( 'formsubmitDirective', function ($http) {
    
    
  // ...
    return {
  
        link: function(scope, element, attrs, event) {
            
            scope.formSubmit = function(e) {
            e.preventDefault();
            var thisform = $(e.target).parents("form").parent().html();
            var fmurl = $(thisform).attr('action');
            var fmmethod = $(thisform).attr('method');
            //$scope.formData = {};
            //var fmdata = $(thisform).formData;
            var fmdata = this.formData;
            console.log(this.formData);
           var request = $http({
                    method: fmmethod,
                    dataType: "json",
                    url: fmurl,
                    //transformRequest: transformRequestAsFormPost,
                    data: fmdata,
               
                });
                // Store the data-dump of the FORM scope.
                request.success(
                    function(data, status) {
                      console.log(data);
                            scope.status = status;
                            scope.data = data;
                            scope.result = data; 
                        //$scope.cfdump = html;
                    }
                );
                request.error(
                    function(data, status) {
                       
                       console.log(data);
                            scope.status = status;
                            scope.data = data;
                            scope.result = data; 
                        //$scope.cfdump = html;
                    }
                );
                
             
                
            
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



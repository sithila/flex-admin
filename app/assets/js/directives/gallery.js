
angular.module( 'moduleGallery', [] )

.directive( 'galleryDirective', function ($compile) {
    
    
  // ...
    return {
        
  
        link: function(scope, element, attrs, event) {
            
            scope.showGallery = function(e) {
                var imgarr = [];
                var srimg = $(e.target).parents(".gallery-items").find('img').each(function(){
                    imgarr.push($(this).attr('src'));
                    
                });
                var targetset = $(e.target).parents(".gallery-item").find('img').addClass('selected');
                var imgsrc = $(e.target).parents(".gallery-item").find('img').prop('src');
                var imgtitle = $(e.target).parents(".gallery-item").find('.title').html();
                var imgdis = $(e.target).parents(".gallery-item").find('.discript').html();
               //var imgsrc = $(e.target).find('img').prop('src');
            
           ShowGallery(true, imgsrc,imgtitle,imgdis,imgarr);
                //var div = angular.element('#btnClose');
               // div.bind("click",$scope.closeGallery());
        };
            
        scope.getDDitem = function(e) {
            e.preventDefault();
            var selectedItem = $(e.target).html();
            var setitem = $(e.target).parents(".dropdown").find('.btn label').text(selectedItem);
            //closeMenu();
        };
        scope.closeGallery = function(e) {
            alert('fsfsf');
            e.preventDefault();
             HideGallery();
        };
        
    // $(".dropdown-toggle").click(function(e){
        
    //  e.preventDefault();
     // $(this).parents(".dropdown").find('.dropdown-menu').toggleClass('show');
      //$(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    //     clearTimeout(debounce);
   // });
            
     function ShowGallery(modal,imgsrc,imgtitle,imgdis,imgarr) {
         console.log(imgarr);
       var scrollval = $(window).scrollTop();
	  $('<div id="overlay" class="overlay"></div>').appendTo('body');
      $('<div  class="gallery-dialog"><div class="gallery-dialog-wrapper"><a href=""  id="btnClose" class="close">X</a><div class="wrapper"><div class="content-wrapper"><p class="title">'+imgtitle+'</p><p class="discription">'+imgtitle+'</p></div><span class="slide next"><i class="fa fa-angle-right" aria-hidden="true"></i></span><span class="slide prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span><img src="'+ imgsrc +'" ></div></div></div>').appendTo('body');
        
       
      $(".gallery-dialog .gallery-dialog-wrapper").css("position", "relative").css("top", scrollval);
         
         $('html, body').css({
            'overflow': 'hidden',
            'height': '100%'
        });
       
      
	  //$("body").css("overflow", "hidden");
      $("#overlay").show();
      $(".gallery-dialog" ).fadeIn(300);
     $('.gallery-dialog').on('click', 'a.close', function(e){
          e.preventDefault();
         //alert('sdsd');
         $("#overlay").hide();
         $(".gallery-dialog").remove();
         $('html, body').css({
                'overflow': 'auto',
                'height': 'auto'
            });
      });
     $('.gallery-dialog').on('click', '.slide.next', function(e){
          e.preventDefault();
         var nextimg = $('.gallery-items').find('img.selected').closest('.gallery-item').next().find('img').attr('src');
         $('.slide.prev').css({
                    'background':'#ffffff'
                });
         //var resetselected = $('.gallery-items').find('img.selected').removeClass('selected');
         if (nextimg === undefined || nextimg === null) {
             $(this).css({
                    'background':'#cccccc'
                });
                 return false;
                
            }
         var setselected= $('.gallery-items').find('img.selected').removeClass('selected').closest('.gallery-item').next().find('img').addClass('selected');
         
        var setnext = $('.gallery-dialog .wrapper').find('img').attr('src',nextimg);
         
      });
    $('.gallery-dialog').on('click', '.slide.prev', function(e){
          e.preventDefault();
        var previmg = $('.gallery-items').find('img.selected').closest('.gallery-item').prev().find('img').attr('src');
        $('.slide.next').css({
                    'background':'#ffffff'
                });
        if (previmg === undefined || previmg === null) {
             $(this).css({
                    'background':'#cccccc'
                });
                 return false;
                
            }
        var setselected= $('.gallery-items').find('img.selected').removeClass('selected').closest('.gallery-item').prev().find('img').addClass('selected');
        var setprev = $('.gallery-dialog .wrapper').find('img').attr('src',previmg);
         //alert('prev');
         
      });
   }
function HideGallery(modal, imgsrc)
   {
     
      $('<div  class="gallery-dialog"></div>').remove('body');
      $("#overlay").hide(); 
	  $("body").css("overflow", "auto");
      //$("#dialog").fadeOut(300);
   }
    


var colCount = 0;
var colWidth = 0;
var margin = 20;
var windowWidth = 0;
var blocks = [];

$(function(){
	$(window).resize(setupBlocks);
});

function setupBlocks() {
    //alert($('.gallery-items').height());
	windowWidth = $(window).width();
	colWidth = $('.gallery-item').outerWidth();
	blocks = [];
	console.log(blocks);
	colCount = Math.floor(windowWidth/(colWidth+margin*2));
	for(var i=0;i<colCount;i++){
		blocks.push(margin);
	}
	positionBlocks();
    var heightblock = ($('.gallery-item:last-child').position().top + $('.gallery-item:last-child').height() ) - $('.gallery-item:first-child').position().top;
    //alert(heightblock);
    var setgalposition = $('.gallery-items').height(heightblock + 80 ).css({
			'margin-left':-20+'px'
        
		});;
}
            setupBlocks();

function positionBlocks() {
	$('.gallery-item').each(function(){
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


}
    
 
  };
});



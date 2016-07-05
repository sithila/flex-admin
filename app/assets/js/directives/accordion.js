
angular.module( 'moduleAccordion', [] )

.directive( 'accordionDirective', function () {
  // ...
    
   // $('.accord1 li p').click(function(){
 // $(this).next(".accord-content").slideToggle();
 // $(this).closest("li").siblings().find('.accord-content').slideUp();
 //});
    return {
  
    
    link: function(scope, element, attrs) {
        scope.showaccordion = function() {
            //event.preventDefault();
            
    var accordions = $('.accordion');
	$('.accordion').each(function(){
		var accordion = $(this),
			accordionItems = accordion.find('div.accordion-panel'),
            accordionlink = accordionItems.find('div.accordion-headding'),
			accordionContentWrapper = accordionItems.children('div.accordion-body');
			//tabNavigation = tab.find('nav');

        
		accordionlink.on('click', function(event){
			event.preventDefault();
            //alert('addadad');
            
            var selectedItem = $(this);
            
			if( !selectedItem.hasClass('open') ) {
				//var selectedTab = selectedItem.data('content'),
					//selectedContent = tabContentWrapper.find('li[data-content="'+selectedTab+'"]'),
					//slectedContentHeight = selectedContent.innerHeight();
				
				//tabItems.find('a.selected').removeClass('selected');
				//selectedItem.addClass('open');
                selectedItem.next(".accordion-body").slideToggle();
				selectedItem.addClass('open').parent().siblings().find('div.accordion-headding').removeClass('open');
				//animate tabContentWrapper height when content changes 
				
                selectedItem.closest("div.accordion-panel").siblings().find('.accordion-body').slideUp();
			}
            
            
		});

		
		
	});
          
        };
   
	
	$(window).on('resize', function(){
		tabs.each(function(){
			var tab = $(this);
			checkScrolling(tab.find('nav'));
			tab.find('.tabs-content').css('height', 'auto');
		});
	});

	function checkScrolling(tabs){
		var totalTabWidth = parseInt(tabs.children('.tabs-navigation').width()),
		 	tabsViewport = parseInt(tabs.width());
		if( tabs.scrollLeft() >= totalTabWidth - tabsViewport) {
			tabs.parent('.cd-tabs').addClass('is-ended');
		} else {
			tabs.parent('.cd-tabs').removeClass('is-ended');
		}
	}
   
}
  };
});



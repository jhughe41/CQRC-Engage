$( document ).ready(function() {
	
	var isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6
	
	var advanceSlide = function() {
		
		var $module = $('.module-featured-engagements').eq(0),
			$active = $module.eq(0).find('.pager li.active'),
			$next = $active.next().length ?
					$active.next() :
					$active.siblings().first();

		if($module.data('interacting')!=='true'){
			$next.click();
		} 
		setTimeout(advanceSlide, 6000);
	};
	
	setTimeout(advanceSlide,6000);
	
	$('.module-featured-engagements').eq(0).hover(function(){
		$(this).data('interacting','true');
	},function(){
		if($(this).data('clicked')!=='true'){			
			$(this).data('interacting','out');
		}
	}).click(function(){
		$(this).data('interacting','true');
		//keep track of if it was clicked so mouseout doesnt reset
		$(this).data('clicked','true');
		var $this = $(this);
		setTimeout((function(){
			$this.data('interacting','done');
			$(this).data('clicked','false');
		}), 12000);
	});
	
	//function that fires on resize of the viewport to collapse menu
	$( window ).resize(function() {
		if (($('html').has('.map')) && (isIE)){
			$('.geomap').each(function(){
				var thisWidth = $(this).parent('.map').width();
				var thisHeight = (thisWidth * 0.5875);
				$(this).height(thisHeight);
				$(this).parent('.map').height(thisHeight);
			});
		}
		
		if ($('html').has('.map')){
			$('.geomap').each(function(){
				var thisContainer = $(this).closest('.map-panel');
				var thisContainerWidth = thisContainer.width();
				
				if (thisContainerWidth <= 400){
					thisContainer.removeClass('size-400 size-600 size-800');
					thisContainer.addClass('size-400');
				}else if ((thisContainerWidth > 400) && (thisContainerWidth <= 600)){
					thisContainer.removeClass('size-400 size-600 size-800');
					thisContainer.addClass('size-600');
				}else{
					thisContainer.removeClass('size-400 size-600 size-800');
					thisContainer.addClass('size-800');
				}
			});
		}
		
	});
	
	if (($('html').has('.map')) && (isIE)){
		$('.geomap').each(function(){
			var thisWidth = $(this).parent('.map').width();
			var thisHeight = (thisWidth * 0.5875);
			$(this).height(thisHeight);
			$(this).parent('.map').height(thisHeight);
		});
	}
	
	if ($('html').has('.map')){
		$('.geomap').each(function(){
			var thisContainer = $(this).closest('.map-panel');
			var thisContainerWidth = thisContainer.width();
			
			if (thisContainerWidth <= 400){
				thisContainer.removeClass('size-400 size-600 size-800');
				thisContainer.addClass('size-400');
			}else if ((thisContainerWidth > 400) && (thisContainerWidth <= 600)){
				thisContainer.removeClass('size-400 size-600 size-800');
				thisContainer.addClass('size-600');
			}else{
				thisContainer.removeClass('size-400 size-600 size-800');
				thisContainer.addClass('size-800');
			}
		});
	}
	
});
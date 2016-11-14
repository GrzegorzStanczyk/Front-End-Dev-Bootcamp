(function($) {


	// Zadanie 2
	$.fn.bgc = function() {
		return this.addClass('bgc')
	}

	$.fn.color = function() {
		return this.addClass('color')
	}


	$('.grid.grid-12').bgc()
	$('.nav a[href^=http]').bgc()
	$('input:radio, input:checkbox').not(':checked').parent().color()
	$('#text p:empty:first').remove()
	$('.pagination-item').not('span').color()


	// Zadanie 3
	var $hamburger = $('.hamburger')
  	$hamburger.click(function() {

    	var $this = $(this)
   		$this.toggleClass('toggle')
  	})

})(jQuery)
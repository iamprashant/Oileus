/**
 * Oileus documentation js
 * @author Ritesh Shrivastav<ritesh@codingdash.com>
 */

//Hoping that jQuery is loaded already
$(document).ready(function(){

	// Smooth scroll to anchor
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	//Bootstrap affix
	$('.side-list').affix({
		offset: {
			top: 10,
			bottom: function () {
				return (this.bottom = $('footer').outerHeight(true))
			}
		}
	});
	$(function() {
		var $affixElement = $('div.side-list');
		$affixElement.width($affixElement.parent().width());
	});
});
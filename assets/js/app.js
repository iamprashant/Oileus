/**
 * Oileus documentation js
 * @author Ritesh Shrivastav<ritesh@codingdash.com>
 */

//Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-50833602-3', 'auto');
ga('send', 'pageview');

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

	// Check if a new cache is available on page load.
	window.addEventListener('load', function(e) {
		window.applicationCache.addEventListener('updateready', function(e) {
			if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
				// Browser downloaded a new app cache.
				// Swap it in and reload the page to get the new hotness.
				window.applicationCache.swapCache();
				if (confirm('A new version of this site is available. Load it?')) {
					window.location.reload();
				}
			}
		}, false);
	}, false);
});
$(document).ready(function() {

	var $loadSvg = $("#loading_svg");
	var $triangle = $("#triangle");
	var $sky1 = $("#sky1");
	var $sky2 = $("#sky2");
	var $sky3 = $("#sky3");
	var $sun = $("#sun");
	var $fence = $("#fence");
	var $ground = $("#ground");
	var $shadow = $("#shadow");
	var $house = $("#house");
	var $text = $("#text");

	//console.log(triangle);

	var loadTl = new TimelineMax({
		onComplete: function() {
			$(".loader-wrapper").fadeOut(850);
		}
	});
	//console.log(loadTl);

	loadTl.from($ground, 0.7, {y:-25, opacity: 0, ease: Sine.easeIn})
		  .from($house, 0.75, {y:-25, opacity: 0, ease: Sine.easeIn})
		  .from($fence, 0.6, {y:-25, opacity: 0, ease: Sine.easeIn})
		  .from($triangle, 0.2, {opacity: 0, ease: Sine.easeIn})
		  .from($sky1, 0.7, {y:25, opacity: 0, ease: Sine.easeIn})
		  .from($sky2, 0.7, {y:25, opacity: 0, ease: Sine.easeIn})
		  .from($sky3, 0.7, {y:25, opacity: 0, ease: Sine.easeIn})
		  .from($sun, 0.7, {y:25, opacity: 0, ease: Sine.easeIn})
		  .add("sun")
		  .from($shadow, 0.7, {opacity: 0, ease:Sine.easeIn}, "sun-=0.5")
		  .from($text, 0.7, {y:-25, opacity: 0, ease: Sine.easeIn})




});
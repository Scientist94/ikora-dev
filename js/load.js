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
			$(".loader-wrapper").fadeOut(550);
		}
	});
	//console.log(loadTl);

	// var loadTl = new TimelineMax();

	loadTl.to($loadSvg, 0.1, {opacity: 1})
		  .fromTo($ground, 0.5, {y:-25}, {y:0, opacity: 1, ease: Sine.easeIn})
		  .fromTo($house, 0.65, {y:-25}, {y:0, opacity: 1, ease: Sine.easeIn})
		  .fromTo($fence, 0.4, {y:-25}, {y:0, opacity: 1, ease: Sine.easeIn})
		  .to($triangle, 0.2, {opacity: 1, ease: Sine.easeIn})
		  .fromTo($sky1, 0.55, {y:25}, {y:0, opacity: 1, ease: Sine.easeIn})
		  .fromTo($sky2, 0.55, {y:25}, {y:0, opacity: 1, ease: Sine.easeIn})
		  .fromTo($sky3, 0.55, {y:25}, {y:0, opacity: 1, ease: Sine.easeIn})
		  .fromTo($sun, 0.45, {y:25}, {y:0, opacity: 1, ease: Sine.easeIn})
		  .add("sun")
		  .to($shadow, 0.45, {opacity: 1, ease:Sine.easeIn}, "sun-=0.5")
		  .fromTo($text, 0.65, {y:-25}, {y:0, opacity: 1, ease: Sine.easeIn})

	// loadTl.play();


});
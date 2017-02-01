$(document).ready(function() {


	var ctrl = new ScrollMagic.Controller();
	var introText = new TweenMax.fromTo("#intro-text", 1.5, {
		y: 100,
		opacity: 0
	}, {
		y : 0,
		opacity: 1,
		ease: Power2.easeInOut
	});

	var aboutDetail = new TweenMax.fromTo("#detail-wrap", 1.5 ,{
		y: 60,
		opacity: 0
	}, {
		y: 0,
		opacity: 1,
		ease: Power2.easeInOut
	});

	var $svg = $("#crew-svg");
	var $textLeft = $("#team-text-code");
	var $textMid = $("#team-text-content");
	var $textRight = $("#team-text-design");

	var teamTl = new TimelineMax();
	teamTl.from($svg, 1.5, {
		opacity: 0,
		ease: Power2.easeInOut
	})
	.from($textLeft , 0.6, {
		x: -50,
		opacity: 0,
		ease: Sine.easeOut
	})
	.from($textMid , 0.6, {
		y: -50,
		opacity: 0,
		ease: Sine.easeOut
	})
	.from($textRight, 0.6, {
		x: 50,
		opacity: 0,
		ease: Sine.easeOut
	});


	var introScene = new ScrollMagic.Scene({
		triggerElement : "#about-intro",
		reverse: true
	})
	.setTween(introText)
	.addIndicators()
	.addTo(ctrl);

	var detailScene = new ScrollMagic.Scene({
		triggerElement: "#about-detail",
		triggerHook: 0.76
	})
	.setTween(aboutDetail)
	.addIndicators()
	.addTo(ctrl);

	var teamScene = new ScrollMagic.Scene({
		triggerElement: ".about-team",
		triggerHook: 0.6
	})
	.setTween(teamTl)
	.addIndicators()
	.addTo(ctrl);

});
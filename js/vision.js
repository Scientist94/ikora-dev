
 // if($(window).width() > 1024) {
	(function() {

	var ctrl = new ScrollMagic.Controller({container:"#vision-container", vertical: false});
	
	//headers
	// var $disc_head = $("#disc_head");
	// var $brain_head = $("#brain_head");
	// var $proto_head = $("#proto_head");
	// var $content_head = $("#content_head");
	// var $art_head = $("#art_head");
	// var $code_head = $("#code_head");
	// var $test_head = $("#test_head");
	// var $del_head = $("del_head");

	// //descriptions
	// var $disc_text = $("#disc_text");
	// var $brain_text = $("#brain_text");
	// var $proto_text = $("#proto_text");
	// var $content_text = $("#content_text");
	// var $art_text = $("#art_text");
	// var $code_text = $("#code_text");
	// var $test_text = $("#test_text");
	// var $del_text = $("del_text");



	//console.log(ctrl);
	//intro scene 

	var introSc = new ScrollMagic.Scene({
		
		triggerElement: ".vision-intro-text h1",
		triggerHook: "onEnter",
		reverse: false
	});

	var introTl = new TimelineMax();
	var introTween = TweenMax.to(".vision-intro-text h1", 2.2, {
		
		opacity: 1,
		ease: Sine.easeInOut
	});
	var scrollTween = TweenMax.from(".scroll-container", 0.45, {
		x: 45,
		opacity: 0,
		ease: Sine.easeOut
	});

	introTl.add(introTween);
	introTl.add(scrollTween, "+=0.8");

	// introSc.setTween(introTl)
	// 	    .addTo(ctrl)
	// 	    .addIndicators();


	//scene 1

	var scene_1 = new ScrollMagic.Scene({
		triggerElement: ("#disc_head"),
		triggerHook: 0.6

	});

	var scene_1Tl = new TimelineMax();
	scene_1Tl.add(TweenMax.from("#disc_head", 1, {y: 50, opacity: 0, ease: Sine.easeIn}))
			 .add(TweenMax.from("#disc_text", 1, {y: 50, opacity: 0, ease: Sine.easeIn}), "-=0.7");

	scene_1.setTween(scene_1Tl)
			.addTo(ctrl)
			.addIndicators();

	//scene 2

	var scene_2 = new ScrollMagic.Scene({
		triggerElement: ("#brain_head"),
		triggerHook: 0.6

	});

	var scene_2Tl = new TimelineMax();
	scene_2Tl.add(TweenMax.from("#brain_head", 1, {y: 50, opacity: 0, ease: Sine.easeIn}))
			 .add(TweenMax.from("#brain_text", 1, {y: 50, opacity: 0, ease: Sine.easeIn}), "-=0.7");

	scene_2.setTween(scene_2Tl)
			.addTo(ctrl)
			.addIndicators();

	//scene 3

	var scene_3 = new ScrollMagic.Scene({
		triggerElement: ("#proto_head"),
		triggerHook: 0.6

	});

	var scene_3Tl = new TimelineMax();
	scene_3Tl.add(TweenMax.from("#proto_head", 1, {y: 50, opacity: 0, ease: Sine.easeIn}))
			 .add(TweenMax.from("#proto_text", 1, {y: 50, opacity: 0, ease: Sine.easeIn}), "-=0.7");

	scene_3.setTween(scene_3Tl)
			.addTo(ctrl)
			.addIndicators();

	//scene 4
	var scene_4 = new ScrollMagic.Scene({
		triggerElement: ("#content_head"),
		triggerHook: 0.6

	});

	var scene_4Tl = new TimelineMax();
	scene_4Tl.add(TweenMax.from("#content_head", 1, {y: 50, opacity: 0, ease: Sine.easeIn}))
			 .add(TweenMax.from("#content_text", 1, {y: 50, opacity: 0, ease: Sine.easeIn}), "-=0.7");

	scene_4.setTween(scene_4Tl)
			.addTo(ctrl)
			.addIndicators();

	//scene 5

	var scene_5 = new ScrollMagic.Scene({
		triggerElement: ("#art_head"),
		triggerHook: 0.6

	});

	var scene_5Tl = new TimelineMax();
	scene_5Tl.add(TweenMax.from("#art_head", 1, {y: 50, opacity: 0, ease: Sine.easeIn}))
			 .add(TweenMax.from("#art_text", 1, {y: 50, opacity: 0, ease: Sine.easeIn}), "-=0.7");

	scene_5.setTween(scene_5Tl)
			.addTo(ctrl)
			.addIndicators();

	//scene 6

	var scene_6 = new ScrollMagic.Scene({
		triggerElement: ("#code_head"),
		triggerHook: 0.6

	});

	var scene_6Tl = new TimelineMax();
	scene_6Tl.add(TweenMax.from("#code_head", 1, {y: 50, opacity: 0, ease: Sine.easeIn}))
			 .add(TweenMax.from("#code_text", 1, {y: 50, opacity: 0, ease: Sine.easeIn}), "-=0.7")
			 .add(TweenMax.to("#plane", 1, { bezier:{
				    type: "soft",
				    values:[{x:10, y:30}, {x:-30, y:20}, {x:-40, y:10}, {x:30, y:20}, {x:10, y:30}],
				    repeat: -1
  					}
			}));
			 

	scene_6.setTween(scene_6Tl)
			.addTo(ctrl)
			.addIndicators();



	//scene 7

	var scene_7 = new ScrollMagic.Scene({
		triggerElement: ("#test_head"),
		triggerHook: 0.6

	});

	var scene_7Tl = new TimelineMax();
	scene_7Tl.add(TweenMax.from("#test_head", 1, {y: 50, opacity: 0, ease: Sine.easeIn}))
			 .add(TweenMax.from("#test_text", 1, {y: 50, opacity: 0, ease: Sine.easeIn}), "-=0.7")
			 .add(TweenMax.to("#plane", 2, { bezier:{
				    type: "soft",
				    values:[{x:1000, y:30}, {x: 1020, y: 30}],
				    repeat: -1
				  }
				}))
			 .add(TweenMax.fromTo("#test_fire", 3.5, {
				  opacity: 1,
				  y: 2000 ,
				  ease: Sine.easeInOut
				  },
				  {opacity: 1,
				  y: -3900    }
			));

	scene_7.setTween(scene_7Tl)
			.addTo(ctrl)
			.addIndicators();

	//scene 8

	var scene_8 = new ScrollMagic.Scene({
		triggerElement: ("#del_head"),
		triggerHook: 0.6

	});

	var scene_8Tl = new TimelineMax();
	scene_8Tl.add(TweenMax.from("#del_head", 1, {y: 50, opacity: 0, ease: Sine.easeIn}))
			 .add(TweenMax.from("#del_text", 1, {y: 50, opacity: 0, ease: Sine.easeIn}), "-=0.7")
			 .add(TweenMax.to("#plane", 1, { bezier:{
				    type: "soft",
				    values:[{x:1020, y:30}, {x: 1400, y: 30}],
				    repeat: -1
				  }
				}))
			 .add(TweenMax.to("#plane", 1, { bezier:{
				    type: "soft",
				    values:[{x:1400, y:30}, {x: 1600, y: 50}, {x: 1800, y: 30}],
				    repeat: -1
				  }
				}));

	scene_8.setTween(scene_8Tl)
			.addTo(ctrl)
			.addIndicators();

})();
// }

// else {

// 	(function() {

// 	var ctrl = new ScrollMagic.Controller({container:"body"});
	
// 	//headers
// 	// var $disc_head = $("#disc_head");
// 	// var $brain_head = $("#brain_head");
// 	// var $proto_head = $("#proto_head");
// 	// var $content_head = $("#content_head");
// 	// var $art_head = $("#art_head");
// 	// var $code_head = $("#code_head");
// 	// var $test_head = $("#test_head");
// 	// var $del_head = $("del_head");

// 	// //descriptions
// 	// var $disc_text = $("#disc_text");
// 	// var $brain_text = $("#brain_text");
// 	// var $proto_text = $("#proto_text");
// 	// var $content_text = $("#content_text");
// 	// var $art_text = $("#art_text");
// 	// var $code_text = $("#code_text");
// 	// var $test_text = $("#test_text");
// 	// var $del_text = $("del_text");



// 	//console.log(ctrl);
// 	//intro scene 

// 	var introSc = new ScrollMagic.Scene({
		
// 		triggerElement: ".vision-intro-text h1",
// 		triggerHook: "onEnter",
// 		reverse: false
// 	});

// 	var introTl = new TimelineMax();
// 	var introTween = TweenMax.from(".vision-intro-text h1", 1.2, {
// 		y: 125,
// 		opacity: 0,
// 		ease: Sine.easeInOut
// 	});
// 	var scrollTween = TweenMax.from(".scroll-container", 0.45, {
// 		x: 45,
// 		opacity: 0,
// 		ease: Sine.easeOut
// 	});

// 	introTl.add(introTween);
// 	introTl.add(scrollTween, "+=0.8");

// 	// introSc.setTween(introTl)
// 	// 	    .addTo(ctrl)
// 	// 	    .addIndicators();


// 	//scene 1

// 	var scene_1 = new ScrollMagic.Scene({
// 		triggerElement: ("#disc_head"),
// 		triggerHook: 0.35

// 	});

// 	var scene_1Tl = new TimelineMax();
// 	scene_1Tl.add(TweenMax.from("#disc_head", 1, {y: 50, opacity: 0, ease: Sine.easeIn}))
// 			 .add(TweenMax.from("#disc_text", 1, {y: 50, opacity: 0, ease: Sine.easeIn}), "-=0.7");

// 	scene_1.setTween(scene_1Tl)
// 			.addTo(ctrl)
// 			.addIndicators();

// 	//scene 2

// 	var scene_2 = new ScrollMagic.Scene({
// 		triggerElement: ("#brain_head"),
// 		triggerHook: 0.35

// 	});

// 	var scene_2Tl = new TimelineMax();
// 	scene_2Tl.add(TweenMax.from("#brain_head", 1, {y: 50, opacity: 0, ease: Sine.easeIn}))
// 			 .add(TweenMax.from("#brain_text", 1, {y: 50, opacity: 0, ease: Sine.easeIn}), "-=0.7");

// 	scene_2.setTween(scene_2Tl)
// 			.addTo(ctrl)
// 			.addIndicators();

// 	//scene 3

// 	var scene_3 = new ScrollMagic.Scene({
// 		triggerElement: ("#proto_head"),
// 		triggerHook: 0.35

// 	});

// 	var scene_3Tl = new TimelineMax();
// 	scene_3Tl.add(TweenMax.from("#proto_head", 1, {y: 50, opacity: 0, ease: Sine.easeIn}))
// 			 .add(TweenMax.from("#proto_text", 1, {y: 50, opacity: 0, ease: Sine.easeIn}), "-=0.7");

// 	scene_3.setTween(scene_3Tl)
// 			.addTo(ctrl)
// 			.addIndicators();

// 	//scene 4
// 	var scene_4 = new ScrollMagic.Scene({
// 		triggerElement: ("#content_head"),
// 		triggerHook: 0.35

// 	});

// 	var scene_4Tl = new TimelineMax();
// 	scene_4Tl.add(TweenMax.from("#content_head", 1, {y: 50, opacity: 0, ease: Sine.easeIn}))
// 			 .add(TweenMax.from("#content_text", 1, {y: 50, opacity: 0, ease: Sine.easeIn}), "-=0.7");

// 	scene_4.setTween(scene_4Tl)
// 			.addTo(ctrl)
// 			.addIndicators();

// 	//scene 5

// 	var scene_5 = new ScrollMagic.Scene({
// 		triggerElement: ("#art_head"),
// 		triggerHook: 0.35

// 	});

// 	var scene_5Tl = new TimelineMax();
// 	scene_5Tl.add(TweenMax.from("#art_head", 1, {y: 50, opacity: 0, ease: Sine.easeIn}))
// 			 .add(TweenMax.from("#art_text", 1, {y: 50, opacity: 0, ease: Sine.easeIn}), "-=0.7");

// 	scene_5.setTween(scene_5Tl)
// 			.addTo(ctrl)
// 			.addIndicators();

// 	//scene 6

// 	var scene_6 = new ScrollMagic.Scene({
// 		triggerElement: ("#code_head"),
// 		triggerHook: 0.35

// 	});

// 	var scene_6Tl = new TimelineMax();
// 	scene_6Tl.add(TweenMax.from("#code_head", 1, {y: 50, opacity: 0, ease: Sine.easeIn}))
// 			 .add(TweenMax.from("#code_text", 1, {y: 50, opacity: 0, ease: Sine.easeIn}), "-=0.7")
// 			 .add(TweenMax.to("#plane", 1, { bezier:{
// 				    type: "soft",
// 				    values:[{x:10, y:30}, {x:-30, y:20}, {x:-40, y:10}, {x:30, y:20}, {x:10, y:30}],
// 				    repeat: -1
//   					}
// 			}));
			 

// 	scene_6.setTween(scene_6Tl)
// 			.addTo(ctrl)
// 			.addIndicators();



// 	//scene 7

// 	var scene_7 = new ScrollMagic.Scene({
// 		triggerElement: ("#test_head"),
// 		triggerHook: 0.35

// 	});

// 	var scene_7Tl = new TimelineMax();
// 	scene_7Tl.add(TweenMax.from("#test_head", 1, {y: 50, opacity: 0, ease: Sine.easeIn}))
// 			 .add(TweenMax.from("#test_text", 1, {y: 50, opacity: 0, ease: Sine.easeIn}), "-=0.7")
// 			 .add(TweenMax.to("#plane", 2, { bezier:{
// 				    type: "soft",
// 				    values:[{x:1000, y:30}, {x: 1020, y: 30}],
// 				    repeat: -1
// 				  }
// 				}))
// 			 .add(TweenMax.fromTo("#test_fire", 3.5, {
// 				  opacity: 1,
// 				  y: 2000 ,
// 				  ease: Sine.easeInOut
// 				  },
// 				  {opacity: 1,
// 				  y: -3900    }
// 			));

// 	scene_7.setTween(scene_7Tl)
// 			.addTo(ctrl)
// 			.addIndicators();

// 	//scene 8

// 	var scene_8 = new ScrollMagic.Scene({
// 		triggerElement: ("#del_head"),
// 		triggerHook: 0.35

// 	});

// 	var scene_8Tl = new TimelineMax();
// 	scene_8Tl.add(TweenMax.from("#del_head", 1, {y: 50, opacity: 0, ease: Sine.easeIn}))
// 			 .add(TweenMax.from("#del_text", 1, {y: 50, opacity: 0, ease: Sine.easeIn}), "-=0.7")
// 			 .add(TweenMax.to("#plane", 1, { bezier:{
// 				    type: "soft",
// 				    values:[{x:1020, y:30}, {x: 1400, y: 30}],
// 				    repeat: -1
// 				  }
// 				}))
// 			 .add(TweenMax.to("#plane", 1, { bezier:{
// 				    type: "soft",
// 				    values:[{x:1400, y:30}, {x: 1600, y: 50}, {x: 1800, y: 30}],
// 				    repeat: -1
// 				  }
// 				}));

// 	scene_8.setTween(scene_8Tl)
// 			.addTo(ctrl)
// 			.addIndicators();

// })();
// }


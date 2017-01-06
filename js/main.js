/**
 * Globals.
 */
var tl;

/**
 * Init.
 */
function init() {
	tl = new TimelineMax({onComplete:restart});

	// Specifications
	var time = 0.5;
	var between = 0.5;
	var wait = 2;

//- Frame 1 ----------------------------------------------------------->

	tl.to("#bg", 8, {x: "+180"});
    tl.from("#txt01", time, {autoAlpha:0}, "-=8");
	tl.from("#txt01b", time, {autoAlpha:0},"-=8");
    tl.from("#txtbg1", time, {autoAlpha:0, width:0},"-=7");

	tl.to("#txt01", time, {autoAlpha:0}, "-=5");
	tl.to("#txt01b", time, {autoAlpha:0}, "-=5");
    tl.to("#txtbg1", time, {autoAlpha:0}, "-=5");
    
    
    tl.from("#txt02", time, {autoAlpha:0}, "-=4");
	tl.from("#txt02b", time, {autoAlpha:0},"-=4");
    tl.from("#txtbg2", time, {autoAlpha:0, width:0},"-=3");
    
    
    
    
    
//    tl.to("#txt02", time, {autoAlpha:0}, "-="+between);
//	  tl.to("#txt02b", time, {autoAlpha:0}, "-="+between);
//    tl.to("#txtbg2", time, {autoAlpha:0}, "-=0.5");

//- Frame 2 ----------------------------------------------------------->

//    tl.to("#txtbg3", "-9", {scale:0.5, opacity:0, x: "+180", ease:Back.easeOut, delay:0.4});
    
    
    
    tl.from("#txtbg3", time, {scale:0.5, autoAlpha:0});    
    tl.from("#txt03", time, {autoAlpha:0}, "-=0");
	tl.from("#yes", time, {width:"0px", delay:time, autoAlpha:0},"-=0");
    
    tl.from("#yes", 1, {clip:"rect(0px, 0px, 60px, 0px)"});
    
	tl.to("#txt03", time, {delay:wait,autoAlpha:0}, "-=0");
	tl.to("#yes", time, {autoAlpha:0}, "-=0.5");
    
//- Frame 3 ----------------------------------------------------------->
    
	tl.from("#txt04", time, {autoAlpha:0});
    tl.from("#logo", time, {y:"+36", autoAlpha:0});
    tl.from("#cta", time, {x:"-210", delay:0.25, autoAlpha:0});
    

	tl.to("#txt04", 0, {delay:wait, autoAlpha:0});
    tl.to("#logo", 0, {autoAlpha:0});
    tl.to("#cta", 0, {autoAlpha:0});
    
	
}

/**
 * Show the current frame and all its elements without animation. Use to position assets quickly.
 */
function showFrame(num) {
	if (tl) tl.pause();
	var elements = e("frame-"+num).children;
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.visibility = "visible";
	}
}

/**
 * Start over all the animations as part of a TimelineMax object.
 */

function restart() {
	tl.restart();
}

/**
 * For animating assets at the start of each frame.
 */
function appear(name,time,specs,label) {
	specs.onStart = show;
	specs.onStartParams = [name];

	tl.from("#"+name, time, specs, label);
}

/**
 * For animating assets at the end of each frame.
 */
function disappear(name,time,specs,label,hideOnComplete) {
	hideOnComplete = (hideOnComplete == undefined) ? true : hideOnComplete;
	if (hideOnComplete) {
		specs.onComplete = hide;
		specs.onCompleteParams = [name];
	}

	tl.to("#"+name, time, specs, label);
}

/**
 * Show/hide an element with display block.
 */
function show(name) { e(name).style.display = "block"; }
function hide(name) { e(name).style.display = "none"; }

/**
 * Shorthand to grab an element.
 */
var e = getElement = function(name) {
	return document.getElementById(name);
};
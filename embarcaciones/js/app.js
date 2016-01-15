$(function(){ //shorcut of $(document).ready(function(){})
	
	$("body").addClass('container');
	$("ul").addClass('list');
	$("nav li").addClass('navlist shadow');
	$('section').addClass('clearfix');
	$('section ul').addClass('photolist');
	$("section li").addClass('seclist');
	$("article").addClass('miniature shadow');
	$("img").addClass('photo');
	$("h2").addClass('visible');
	$("figcaption").addClass('visible');
	$("figure").addClass('photo_container');
	

	$('.navlist').hover(function() {
		$(this).css({
			backgroundColor: '#1D4F73',
		});
	}, function() {
		$(this).css({
			backgroundColor: '#1C1E29',
		});
	});
	$('.navlist').on('click', function(event) {
	
		$(this).animate({
			borderTopWidth: "70px",
			paddingTop: "0.5%"
			},
			500, function() {
			/* stuff to do after animation is complete */
			$(this).animate({
			borderTopWidth: "10px",
			paddingTop: "6%"
			},
			500)
		});
		event.preventDefault();
	});

	$('.photolist :first').css({
		width: '100%'
	});
	$('.seclist :first').css({
		width: '74%'
	});
	$('.photo').eq(0).css({
		width: '100%',
		position: "relative",
		top: "-160px"
	}).addClass('flip');
	$('.photo').eq(3).addClass('flip');
	$('.photo').eq(4).addClass('flip');


});
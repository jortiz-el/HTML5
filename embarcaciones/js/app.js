$(function(){ //shorcut of $(document).ready(function(){})
	
	$("body").addClass('container');
	$("ul").addClass('list');
	$("nav li").addClass('navlist shadow');
	$('section').addClass('clearfix');
	$('section ul').addClass('photolist');
	$('footer').addClass('footerlist');
	$("section li").addClass('seclist');
	$("article").addClass('miniature shadow');
	$("img").addClass('photo');
	$("h1").addClass('title');
	$("h2").addClass('visible');
	$("figcaption").addClass('visible');
	$("figure").addClass('photo_container');
	$("video").addClass('video');
	$("form").addClass('budget');
	$("input").addClass('text_inp');


	$('.navlist').hover(function() {
		$(this).css({
			backgroundColor: '#1D4F73'
		});
	}, function() {
		$(this).css({
			backgroundColor: '#1C1E29'
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
	$(".list").eq(0).css('height', '220px');

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

	var total = $('.photo_container img').length;
	$('.photo_container img').each(function(index, el) {
		var str = $(this).siblings('figcaption').text();
		var str_alt = "Embarcacion "+(index + 1)+" de "+total+" ("+str+")";
		$(this).attr('alt', str_alt);
	});

	$(".title").after('<p class="decoration"></p>');
	$(".title").before('<p class="decoration"></p>');
	
	$(".footerlist ul").remove();
	$(".footerlist").append($("<dl>").append($('<dt>', {
		text: "Who are we?"}),$("<dd>",{
		text: "some text here"	
	}),$('<dt>', {
		text: "Offices"}),$("<dd>",{
		text: "some text here"	
	}),$('<dt>', {
		text: "Terms and conditions"}),$("<dd>",{
		text: "some text here"	
	})));

	$("dt").css({
		borderBottomColor: '#9f9d9e',
		borderBottomStyle: 'solid',
		height: '40px',
		fontSize: '25px',
		cursor: 'pointer'
	});
	$("dd").css({
		color: '#1D4F73',
		padding: '30px'
		});

	$("dd").hide();
	$("dt").click(function(event){
         var desplegable = $(this).next();
         $('dd').not(desplegable).slideUp('fast');
          desplegable.slideToggle('fast');
          event.preventDefault();
          })

	$(".budget label:first-child").css({
		color: '#FFFFFF',
		fontSize: '25px'
	});
	$(".text_inp").addClass('shadow')
	$(".text_inp").focus(function(event) {
		$(this).css({
			width: '150px',
			borderColor: '#1D4F73'
		});
	});
	$(".text_inp").focusout(function(event) {
		$(this).css({
			width: '20px',
			borderColor: '#343C45'
		});
	});
	$(".text_inp").on('input', function(event) {
		var text = $(this).val();
		if (!isNaN(text) && text !== '') {
			$(".budget span").remove();
			$(".budget").append('<span class="price">Initial Price: ' + (text*12345) + ' €</span>')
		}else {
			$(".budget span").remove();
		}
		event.preventDefault();
	});

	$("head").append("<link href=\"http://vjs.zencdn.net/5.4.6/video-js.css\" rel=\"stylesheet\">");

    $("video").attr({
        id: "my-video",
        preload: "auto"
    }).addClass("video-js vjs-default-skin").attr('data-setup', '{}');

    $("section:last").append("<script src=\"http://vjs.zencdn.net/5.4.6/video.js\"></script>");
	
});
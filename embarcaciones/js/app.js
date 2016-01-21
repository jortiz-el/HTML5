$(function(){ //shorcut of $(document).ready(function(){})
	
	$("body").addClass('container');
	$("ul").addClass('list');
	$("nav li").addClass('navlist shadow');
	$('section').addClass('clearfix');
	$('section ul').addClass('photolist');
	$('footer').addClass('footerlist');
	$('dd span').addClass('microdata');
	$("section li").addClass('seclist');
	$("article").addClass('miniature shadow');
	$("img").addClass('photo');
	$("h1").addClass('title');
	$("h2").addClass('curtain');
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
	$(".list:first").css('height', '220px');

	$('.photolist :first').css({
		width: '100%'
	});


	$('.curtain:first').css('width', '670px');
	$('.curtain').hover(function() {
		$(this).animate({
			opacity: "0.7"
			}, 500);
		var name = $(this).siblings('figure').children('figcaption').text(),
			data_price = $(this).parent("article").data('price'),
			full_name = name + "<br>" + data_price + "€";
		$(this).html(full_name);
	}, function() {
		$(this).animate({
			opacity: "0"
			}, 500);
		$(this).html("");
	});
	/*
	$(".curtain").on('click', function(event) {
		event.preventDefault();
		$("this").parent(".miniature").css('borderColor', '#1D4F73');
	});
*/

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
		text: "The quality of our people is the cornerstone of our ability to " +
		"serve our clients. For this reason, we invest tremendous resources in" +
		" identifying exceptional people, developing their skills, and creating" +
		" an environment that fosters their growth as leaders."	
	}),$('<dt>', {
		text: "Offices"}),$("<dd>",{
		text: "Austria Klagenfurt Lakeside B06 A-9020 Klagenfurt Austria Phone:" + 
		" +43 463 50645 0 Fax: +43 463 50677 // "	+
		"Belgium Diegem Pegasuslaan 5 1831 Diegem Belgium Phone: +32 2 709 2000 // " + 
		"Czech Republic Prague Na Poříčí 1040/10 110 00 Prague 1 Czech Republic" + 
		" Phone: +420 221 899 141/142 Fax: +420 221 899 106"
	}),$('<dt>', {
		text: "Terms and conditions"}),$("<dd>",{
		text: "We control the copyright in this template, and you may only use" +
		" this template in accordance with the licensing provisions in our" +
		" terms and conditions. Those licensing provisions include an obligation" +
		" to retain the SEQ Legal credit incorporated into the template."	
	}),$('<dt>', {
		text: "Web Developer"}),$("<dd>")));


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
		event.preventDefault();
	});
	$(".text_inp").focusout(function(event) {
		$(this).css({
			width: '20px',
			borderColor: '#343C45'
		});
		event.preventDefault();
	});
	$(".text_inp").on('input', function(event) {
		var text = $(this).val().trim();
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
	
	/*--------microdata---------*/
	function appendMicrodata(element, tag, attribute, value) {
        $("<" + tag + ">" + value + "</" + tag + ">").appendTo(element).attr({
            itemprop: attribute
        }).addClass("microdata");
    };
    $("footer dt:last").attr({
        itemscope: '',
        itemtype: 'https://schema.org/Person'
    })
    appendMicrodata($("footer dd:last"),"span","name"," Joao Ortiz Alegre ");
    appendMicrodata($("footer dd:last"),"span","email"," ojoao_funkyman@hotmail.com ");
    appendMicrodata($("footer dd:last"),"span","telephone"," 629009238 ");
    appendMicrodata($("footer dd:last"),"span","address"," Madrid - Spain ");

    $("footer dt:first").attr({
        itemscope: '',
        itemtype: 'https://schema.org/Person'
    })
    appendMicrodata($("footer dd:first"),"span","location"," Spain - Madrid ");
    appendMicrodata($("footer dd:first"),"span","address"," Paseo de la habana 8030 ");
    appendMicrodata($("footer dd:first"),"span","telephone"," Phone: +34 917 66 00 92 ");
    appendMicrodata($("footer dd:first"),"span","faxNumber"," Fax: +34 917 66 00 91 ");
            
});
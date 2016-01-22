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
	$("input").addClass('text_inp');

	/*--------------nav list---------------------*/
	$('.navlist').hover(function() {
		$(this).addClass('changecolor');
	}, function() {
		$(this).removeClass('changecolor');
	});
	$('.navlist').on('click', function(event) {
		event.preventDefault();
		$(this).animate({
			borderTopWidth: "70px",
			paddingTop: "0.5%"
			},
			500, function() {
			$(this).animate({
			borderTopWidth: "10px",
			paddingTop: "6%"
			},
			500);
		});
	});
	/*--------photo miniature--------*/
	$(".list:first").addClass('navul');
	$('.photolist :first').addClass('secul');
	$('.curtain:first').addClass('ftitle');
	function namePrice(selector) {
		var name = selector.siblings('figure').children('figcaption').text(),
			data_price = selector.parent("article").data('price'),
			full_name = name + "<br>" + data_price + "€";
		return full_name;	
	}
	$('.curtain').hover(function() {
		$(this).animate({
			opacity: "0.7"
			}, 500);
		$(this).html(namePrice($(this)));
	}, function() {
		$(this).animate({
			opacity: "0"
			}, 500);
		$(this).html("");
	});
	$('.photo:eq(0)').addClass('flip photofirst');
	$('.photo:eq(3)').addClass('flip');
	$('.photo:eq(4)').addClass('flip');
	$('.seclist :first').addClass('fsec');
	

	/*--------modal window click foto--------*/
	$("body").append($("<section>").addClass('modalmask').append(
		$("<figure>").addClass('modalbox resize').append($("<a>",{text: "X"}).attr({
			href: '#close',
			title: 'Close'
		}).addClass('close'))));
	$(".curtain").on('click', function(event) {
		event.preventDefault();
		$(".resize").addClass('modalboxresize');
		$(".modalmask").addClass('modalmaskshow');
		var img = $(this).siblings("figure").children('img').clone();
		$(".modalbox").append($(img[0]).removeClass('photo').addClass('photosize'));
	});
	$(".close").on('click', function(event) {
		event.preventDefault();
		$(".resize").removeClass('modalboxresize');
		$(".modalmask").removeClass('modalmaskshow');
		$(".photosize").remove();
	});
	$(".close").hover(function() {
		$(this).addClass('closechange');
	}, function() {
		$(this).removeClass('closechange');
	});

	/*--------alt information--------*/
	var total = $('.photo_container img').length;
	$('.photo_container img').each(function(index, el) {
		var str = $(this).siblings('figcaption').text();
		var str_alt = "Embarcacion "+(index + 1)+" de "+total+" ("+str+")";
		$(this).attr('alt', str_alt);
	});

	/*--------title underline decoration--------*/
	$(".title").after('<p class="decoration"></p>');
	$(".title").before('<p class="decoration"></p>');
	
	/*--------footer list--------*/
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

	$("dt").addClass('definitionlistdl');
	$("dd").addClass('definitionlistdd');

	$("dd").hide();
	$("dt").click(function(event){
		var desplegable = $(this).next();
		$('dd').not(desplegable).slideUp('fast');
		desplegable.slideToggle('fast');
		event.preventDefault();
    })

	/*--------form action--------*/
	$("form label:first-child").addClass('lengthprice');
	$(".text_inp").addClass('shadow');
	$(".text_inp").focus(function(event) {
		event.preventDefault();
		$(this).addClass('text_inp_large');
	});
	$(".text_inp").focusout(function(event) {
		event.preventDefault();
		$(this).removeClass('text_inp_large');
	});
	$(".text_inp").on('input', function(event) {
		event.preventDefault();
		var text = $(this).val().trim();
		if (!isNaN(text) && text !== '') {
			$("form span").remove();
			$("form").append('<span class="price">Initial Price: ' + (text*12345) + ' €</span>')
		}else {
			$("form span").remove();
		}
	});

	/*--------video---------*/
	$("head").append("<link href=\"http://vjs.zencdn.net/5.4.6/video-js.css\" rel=\"stylesheet\">");
    $("video").attr({
        id: "my-video",
        preload: "auto"
    }).addClass("video-js vjs-default-skin").attr('data-setup', '{}');
    $("section:eq(1)").append("<script src=\"http://vjs.zencdn.net/5.4.6/video.js\"></script>");
	
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
    appendMicrodata($("footer dd:last"),"span","telephone"," +34 629 00 92 38 ");
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
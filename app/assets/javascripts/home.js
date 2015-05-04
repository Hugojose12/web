$(document).on('ready page:load', function(arguments){
	var i = 1;
	var text1 = '<li id="text-1">HOY ES EL DIA EN QUE TUS IDEAS SE VUELVAN REALIDAD</li>'
	var text2 = '<li id="text-2">EXPANDE TU EMPRESA O MARCA EN INTERNET</li>'
	var text3 = '<li id="text-3">LAS ULTIMAS TECNOLOGIAS EN DISEÑO WEB</li>'
	var array = [text1, text2, text3]

	$(function scrollable () {
		$("#text-"+i).animate({
			"margin-top":"-=20",
		}, 100, function() {
			$("#text-"+i).remove();
			$(".scrollable").append(array[i-1])
			i++;
			if(i>3) i=1;
		});
		setTimeout(scrollable, 5000);
	});


	function timedCount(i) {
		if (i > 3) { i = 1; }
		actual = i;
		if (i == 3) { next = 1 } else { next = i+1; }
		$("#div-"+actual).removeClass('active');
		$("#div-"+next).addClass('active');
		setTimeout(function(){ i++; timedCount(i); }, 10000);
	}

	timedCount(1);

	$( window ).load(function() {
		$('.load-fixed').remove();
		$('body').css('overflow-y', 'auto');
		$('#front-navbar').css('display', 'block');
		$('.button-shared').css('display', 'block');
		$('.responsive-container').css("display", "block")
	});

	$(".button-shared").click(function() {
		$('html').css('overflow', 'hidden')
		$("#red-socials").css("display", "block")
		$("#red-socials").animate({
	    opacity: 1
	  }, 300, function() {
	    // Animation complete.
	  });
  })

  $("#close-shared").click(function() {
  	$('html').css('overflow', 'auto')
		$(".socials").animate({
	    opacity: 0,
	  }, 300, function() {
	    $(".socials").css("display", "none")
	  });
  })

  $(".close-modal").click(function() {
		$('.modal').modal('hide');
  });

  $('.modal').on('show.bs.modal', function (e) {
	  $('body').css('overflow', 'hidden')
	});

	 $('.modal').on('hidden.bs.modal', function (e) {
	  $('body').css('overflow', 'auto')
	})

  function scrollToAnchor(id){
		var aTag = $("#"+id);
		$('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}
	
	$(".scroll-down").on('click', function() {
		scrollToAnchor("services");
	});

});
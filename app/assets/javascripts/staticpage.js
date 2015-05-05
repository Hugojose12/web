function removeHash () { 
  history.pushState("", document.title, window.location.pathname + window.location.search);
}

$( document ).ready(function() {

	$('.top-nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 500,
    scrollThreshold: 0.5,
    filter: ':not(.external)',
    easing: 'swing',
    begin: function() {
      removeHash();

    },
    end: function() {
      $('#front-navbar-2').removeClass('in');



       //java de servicios

        if ($('.top-nav .current').find('a').attr('href') == "#services") {

        $('.image_boostrap').animate({
          opacity: 1,
          left: "+=700"
        }, 900, function() {
          $("#boostrap").removeClass("image_boostrap")
        });
      
        $('.image_boostrap2').animate({
          opacity: 1,
          right: "+=500"
        }, 900, function() {
          $("#boostrap2").removeClass("image_boostrap2")
        });

        $('.image_boostrap3').animate({
          opacity: 1,
          right: "+=700"
        }, 900, function() {
          $("#boostrap3").removeClass("image_boostrap3")
        });

        $('.image_boostrap3').animate({
          opacity: 1,
          right: "+=700"
        }, 900, function() {
          $("#boostrap3").removeClass("image_boostrap3")
        });
      }

             //java de nosotros

        if ($('.top-nav .current').find('a').attr('href') == "#nosotros") {

        $('.text-icon').animate({
          opacity: 1
        }, 1500, function() {
          $("text-id").removeClass("text-icon")
        });

        $('.mover').animate({
          left: "+=450"
        }, 1200, function() {
          $("#img-imagenosotros").removeClass("mover")
        });

        $('.mover2').animate({
          left: "+=450"
        }, 1200, function() {
          $("#img-imagenosotros2").removeClass("mover2")
        });

        $('.mover3').animate({
          right: "+=450"
        }, 1200, function() {
          $("#img-imagenosotros3").removeClass("mover3")
        });

        $('.mover4').animate({
          bottom: "+=600"
        }, 1200, function() {
          $("#icon-trabajamos").removeClass("mover4")
        });

        $('.mover5').animate({
          bottom: "+=600"
        }, 1200, function() {
          $("#icon-trabajamos2").removeClass("mover5")
        });

        $('.mover6').animate({
          bottom: "+=600"
        }, 1200, function() {
          $("#icon-trabajamos3").removeClass("mover6")
        });
        $('.mover7').animate({
          bottom: "+=600"
        }, 1200, function() {
          $("#icon-trabajamos4").removeClass("mover7")
        });
      }


      

    },
    scrollChange: function($currentListItem) {



        if ($('.top-nav .current').find('a').attr('href') == "#services") {
        $('.image_boostrap').animate({
          opacity: 1,
          left: "+=700"
        }, 900, function() {
          $("#boostrap").removeClass("image_boostrap")
        });
      

        $('.image_boostrap2').animate({
          opacity: 1,
          right: "+=500"
        }, 900, function() {
          $("#boostrap2").removeClass("image_boostrap2")
        });

        $('.image_boostrap3').animate({
          opacity: 1,
          left: "+=700"
        }, 900, function() {
          $("#boostrap3").removeClass("image_boostrap3")
        });
      }


      if ($('.top-nav .current').find('a').attr('href') == "#nosotros") {
      $('.text-icon').animate({
        opacity: 1
      }, 1500, function() {
        $("text-id").removeClass("text-icon")
      });

      $('.mover').animate({
        left: "+=450"
      }, 1200, function() {
        $("#img-imagenosotros").removeClass("mover")
      });

      $('.mover2').animate({
        left: "+=450"
      }, 1200, function() {
        $("#img-imagenosotros2").removeClass("mover2")
      });

      $('.mover3').animate({
        right: "+=450"
      }, 1200, function() {
        $("#img-imagenosotros3").removeClass("mover3")
      });

      $('.mover4').animate({
        bottom: "+=600"
      }, 1200, function() {
        $("#icon-trabajamos").removeClass("mover4")
      });

      $('.mover5').animate({
        bottom: "+=600"
      }, 1200, function() {
        $("#icon-trabajamos2").removeClass("mover5")
      });

      $('.mover6').animate({
        bottom: "+=600"
      }, 1200, function() {
        $("#icon-trabajamos3").removeClass("mover6")
      });
      $('.mover7').animate({
        bottom: "+=600"
      }, 1200, function() {
        $("#icon-trabajamos4").removeClass("mover7")
      });
    }

      var num = parseInt($('#home').css('height').split("px")[0]);

        $(window).bind('scroll', function () {
            if ($(window).scrollTop() >= num) {
              $('#front-navbar').css({"background":"white"});
              $('.li_color').css({"color":"#006DCC"});
              $('#front-navbar').css({"box-shadow":"5px 5px 5px rgba(0, 109, 204, 0.36)"});
            } else {
                $('#front-navbar').css({"background":"rgba(77, 77, 77, 0.3)"});
                $('.li_color').css({"color":"white"});
                $('#front-navbar').css({"box-shadow":"none"});
            }
        });
    }

  });
});










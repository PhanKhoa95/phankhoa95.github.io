(function($) {
    "use strict";
	/*----------------------------
    START - Menubar scroll animation
    ------------------------------ */
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 40) {
			$('#menu .navbar').addClass("sticky");
		} else {
			$('#menu .navbar').removeClass("sticky");
		}
	});
	
	/*----------------------------
    START - Smooth scroll animation
    ------------------------------ */
	$('.menu-top li a, .navbar-brand, .page-scroll').on('click', function () {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
		  var $target = $(this.hash);
		  $target = $target.length && $target
		  || $('[name=' + this.hash.slice(1) +']');
		  if ($target.length) {
			var targetOffset = $target.offset().top;
			$('html,body')
			.animate({scrollTop: targetOffset}, 2000);
		   return false;
		  }
		}
	});
	
	/*----------------------------
    START - Menu collapse
    ------------------------------ */
	$('.menu-top li a').on('click', function () {
		$('.collapse').removeClass('in');
	});
	
	/*----------------------------
    START - Slider activation
    ------------------------------ */
	$('.about-slider').owlCarousel({
		loop:true,
		stagePadding: 95,
		nav:true,
		mouseDrag: false,
		autoplay: true,
		autoplayTimeout:4000,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			540:{
				items:2
			},
			900:{
				items:3
			},
			1200:{
				items:4
			},
			1900:{
				items:4
			}
		}
	});
	
	$('.collapse.in').prev('.panel-heading').addClass('active');
	$('#accordion, #bs-collapse')
	.on('show.bs.collapse', function(a) {
		$(a.target).prev('.panel-heading').addClass('active');
	})
	.on('hide.bs.collapse', function(a) {
		$(a.target).prev('.panel-heading').removeClass('active');
	});
	
	$('.client-bottom').owlCarousel({
		loop:true,
		autoplay: true,
		autoplayTimeout:4000,
		responsive:{
			0:{
				items:1
			},
			400:{
				items:2
			},
			800:{
				items:3
			},
			920:{
				items:4
			},
			1200:{
				items:5
			}
		}
	}); 
	
	$('.screen-bottom').owlCarousel({
		loop:true,
		margin:30,
		slideBy: 4,
		autoplay: true,
		autoplayTimeout:4000,
		responsive:{
			0:{
				items:1
			},
			400:{
				items:2
			},
			900:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});
	$('.home-bg-slide').owlCarousel({
		items:1,
		animateIn: 'fadeIn',
		animateOut: 'zoomOut',
		loop:true,
		autoplay: true,
		autoplayTimeout:4000
	});
	
	/*----------------------------
    START - Lightbox effect animation
    ------------------------------ */
	$('.lb-outerContainer').css({
		'width':'auto'
	});
	
	/*----------------------------
    START - Scroll to Top
    ------------------------------ */
    $(window).on('scroll', function() {
		if ($(this).scrollTop() > 600) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').on('click', function () {
		$('html, body').animate({scrollTop : 0},2000);
		return false;
	});
	
	/*----------------------------
    START - Preloader
    ------------------------------ */
	$(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });
	
	/*----------------------------
    START - WOW JS animation
    ------------------------------ */
	new WOW().init();

    /*----------------------------
    START - jQuery Tubular activation
    ------------------------------ */
    if ($.fn.YTPlayer) {
            $('#home').addClass(
                'big-background-default-image');
        if (!device.tablet() && !device.mobile()) {
            $('#home').addClass(
                'big-background-default-image');
            $(".tubular").YTPlayer();
        } else {
            //jQuery will add the default background to the preferred class 
            $('#home').addClass(
                'big-background-default-image');
        }
    }

    /* =================================
    ===  CONTACT FORM          ====
    =================================== */
    $("#contact-form").on('submit', function(e) {
        e.preventDefault();
        var name = $("#name").val() + " (" + $("#phone_number").val() + ")";
        var email = $("#email_address").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };

        if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
            $.ajax({
                type: "POST",
                url: "php/sendmail.php",
                data: dataString,
                success: function() {
                    $('.success').fadeIn(1000);
                    $('.error').fadeOut(500);
                    $("#contact-form")[0].reset();
                }
            });
        } else {
            $('.error').fadeIn(1000);
            $('.success').fadeOut(500);
        }

        return false;
    });

})(jQuery);
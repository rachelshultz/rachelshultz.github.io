$(window).load(function() {	
	
	//PRELOADER
 $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	
		
	
	$('#wrapper').bind('easytabs:after', function() {
				
		// PORTFOLIO ISOTOPE 
		$(".portfolio_items").isotope({
			itemSelector: '.single_item',
			layoutMode: 'fitRows',
			columnWidth: '.col-sm-3'
		});
		
		// isotope click function
		
		$('.portfolio_filter ul li').click(function(){
			$(".portfolio_filter ul li").removeClass("select-cat");
			$(this).addClass("select-cat");
	 
			var selector = $(this).attr('data-filter');
			$(".portfolio_items").isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false,
				}
		});
			return false;
		});
		
		
		
		
		// MAGNIFIC POPUP FOR PORTFOLIO PAGE
		$('.image-link').magnificPopup({
			type:'image'
		});
		
		
	});


});


$(document).ready( function() {		
		
		// SWITCHER OPEN
		$('.color-switcher .open').click(function() {
			$('.color-switcher').toggleClass("open-switcher");
		});    
	
});


// SIDEBAR SCROLL
			$(function(){
			 $('.widget-out').perfectScrollbar({
				wheelSpeed:50
		});
		});	
		
			//SLIDE MENU
		   (function($){
                $(".right-menu").on('click', function(){
                    $("body").hasClass("slidemenu-opened") ? k() : T()
                });
            })(jQuery);
            function T() {
                $("body").addClass("slidemenu-opened")
            }

            function k() {
                $("body").removeClass("slidemenu-opened")
            }
			
			// RESPONSIVE MENU
		$('.responsive-menu').click(function(){
				$('.top-menu li').slideToggle();
			});
            

/* Contact Form JS*/
(function($){
   'use strict'; 
   
   $(".contact-form").on('submit', function(e){
        e.preventDefault();
        
        var uri = $(this).attr('action');
        $("#con_submit").val('Wait...');
        var con_name = $("#con_name").val();
        var con_email = $("#con_email").val();
        var con_message = $("#con_message").val();
        
        var submission_data = {
                	 name:con_name,
	                _replyto:con_email,
	                 email:con_email,
	                comments:con_message,
	                _subject:'Website Contact Form'
                };

        var required = 0;
        $(".requie", this).each(function() {
            if ($(this).val() == '')
            {
                $(this).addClass('reqError');
                required += 1;
            }
            else
            {
                if ($(this).hasClass('reqError'))
                {
                    $(this).removeClass('reqError');
                    if (required > 0)
                    {
                        required -= 1;
                    }
                }
            }
        });
        if (required === 0)
        {
            $.ajax({
                type: "POST",
                method: "POST",
                url: 'https://formspree.io/rachel.shultz@yahoo.com',
                data: submission_data,
                dataType: 'json',
                beforeSend: function() {
                	//console.log(submission_data);
                	$("#con_submit").val('Sending...');
                },
                success: function(data)
                {
                    $(".contact-form input, .contact-form textarea").val('');
                    $("#con_submit").val('Sent!');
					$("#con_submit").addClass("ok");
                },
                error: function(data) 
                {
                	$("#con_submit").val('Failed!');
                }
            });
        }
        else
        {
            $("#con_submit").val('Failed!');
        }
   });
   $(".requie").on('keyup', function() {
        $(this).removeClass('reqError');
    });
   
})(jQuery);
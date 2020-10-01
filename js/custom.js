$(window).on('load', function(){

	"use strict";
 
	/* ========================================================== */
	/*   Hide Responsive Navigation On-Click                      */
	/* ========================================================== */
	
	  $(".navbar-nav li a").on('click', function(event) {
	    $(".navbar-collapse").collapse('hide');
	  });

	/* ========================================================== */
	/*   Newsletter                                               */
	/* ========================================================== */
	
	$('.newsletter-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'email':$('input[name="nf_email"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p.newsletter_success_box').show();
					});
				});
				e.preventDefault();
			}
		});
	});

	 /*-------------------------------------
    Countdown activation code
    -------------------------------------*/
    $(function () {        
        var eventCounter = $("#countdown");
        if (eventCounter.length) {
            eventCounter.countdown("2020/8/01", function (e) {
                $(this).html(
                    e.strftime(
                        "<li><span class='days'>%D</span> <p class='timeRefDays'>Day%!D</p></li><li><span class='hours'>%H</span><p class='timeRefHours'>Hour%!H</p></li><li><span class='minutes'>%M</span> <p class='timeRefMinutes'>Minutes</p></li><li><span class='seconds'>%S</span> <p class='timeRefSeconds'>Second</p></li>"
                    )
                );
            });
        }
    });
	
	
});
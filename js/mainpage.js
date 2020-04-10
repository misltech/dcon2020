// $('body').awesomeCursor('magic',{
//     size: 32,
//     color: '#1A45A0'
// });



$(document).ready(function () {

    document.cookie = 'cross-site-cookie =bar; SameSite=Strict; Secure';

    var isFirefox = typeof InstallTrigger !== 'undefined';

    if(isFirefox){
        $(".nav-item").css({
            "-webkit-text-stroke": "20px",
            "-webkit-text-stroke-width": "20px",
            "-webkit-text-stroke-color": "currentcolor",
            "-webkit-text-stroke-width": "2px",
            "font-weight": "unset",
            "text-shadow": "unset"

        });

        $(".countdown-header").css({
            "-webkit-text-stroke": "20px",
            "-webkit-text-stroke-width": "20px",
            "-webkit-text-stroke-color": "currentcolor",
            "-webkit-text-stroke-width": "2px",
            "font-weight": "unset",
            "text-shadow": "unset"
        })
    }
    else{
        $(".nav-item").css({
    "-webkit-text-stroke": "thick",
      "letter-spacing": "1.5px"
        });

        $(".countdown-header").css({
    "font-family": "PfefferMediaeval",
    "-webkit-text-stroke": "thick",
    "letter-spacing": "3.2px",
    "font-size": "25px"
        })
    }
    
    
    
    $("#dconinfo-section, #home-section, #gallery-section, #elections-section, #register-section, #awards-section, #involvement-section, #location-section, #contact-section, #elections-section").hide();

    $(".gallery-link").click(function () {
        $("#countdown-section, #dconinfo-section, #register-section, #awards-section, #involvement-section, #location-section, #contact-section, #elections-section").hide();
        $('#gallery-section').show();
    });

    $('.home-link').click(function () {
        $("#dconinfo-section, #gallery-section, #register-section, #awards-section, #involvement-section, #location-section, #contact-section, #elections-section").hide();
        $("#countdown-section").show();
    })

    $(".register-link").click(function () {
        $("#gallery-section, #dconinfo-section, #countdown-section, #awards-section, #involvement-section, #location-section, #contact-section, #elections-section").hide();
        $("#register-section").show();
    });

    $(".awards-link").click(function () {
        $("#gallery-section, #dconinfo-section, #countdown-section, #register-section, #involvement-section, #location-section, #contact-section, #elections-section").hide();
        $("#awards-section").show();
    });

    $(".involvement-link").click(function () {
        $("#gallery-section, #countdown-section, #dconinfo-section, #register-section, #awards-section, #location-section, #contact-section, #elections-section").hide();
        $("#involvement-section").show();
    });
    $(".location-link").click(function () {
        $("#gallery-section, #countdown-section, #dconinfo-section, #register-section, #awards-section, #involvement-section, #contact-section, #elections-section").hide();
        $("#location-section").show();
    });
    $(".contact-link").click(function () {
        $("#gallery-section, #countdown-section, #dconinfo-section, #register-section, #awards-section, #involvement-section, #location-section, #elections-section").hide();
        $("#contact-section").show();
    });
    $(".elections-link").click(function(){
        $("#gallery-section, #countdown-section, #dconinfo-section, #register-section, #awards-section, #involvement-section, #location-section, #contact-section").hide();
        $('#elections-section').show();
    })
    
    $('.down-arrow').click(function(){
        $('#countdown-section').hide();
        $('#dconinfo-section').show();
    })
//Sourced from https://github.com/epiksel/countdown
    var now = new Date();
	var day = 6;//now.getDate();
	var month = 3; //now.getMonth() + 1;
	var year = 2030;//now.getFullYear() + 1;

		var nextyear = month + '/' + day + '/' + year + ' 16:00:00';

		$('#example').countdown({
			date: nextyear, // TODO Date format: 07/27/2017 17:00:00
			offset: -5, // TODO Your Timezone Offset
			day: 'Day',
			days: 'Days'
		}, function () {
            $('.countdown-header-static').show();
            $('#location-section').show();
            $('#countdown-section').hide();
        });
        
       
});

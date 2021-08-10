
	//прогрессбары
    $(function() {
        $('.chart').easyPieChart({
            easing: 'easeOutElastic',
			delay: 3000,
			size:200,
			barColor: '#3ec7c2',
			trackColor: '#fff',
			scaleColor: false,
			lineWidth: 25,
			trackWidth: 4,
			lineCap: 'butt',
        });
    });

    //слайдер
    $('.your-class').slick({
	  infinite: true,
	  speed: 500,
	  arrows: true,
	  prevArrow:"<img class='prev slick-prev' src='images/angle-left-solid.svg'>",
	  nextArrow:"<img class='next slick-next' src='images/angle-right-solid.svg'>",
   	  autoplay: true,
	  autoplaySpeed: 3000,
	  
	});

    //верхнее меню
      $(window).scroll(function(){
    if($(this).scrollTop()>300){
      $('.topmenu').addClass('navfix');
     // $('.topmenu').css('top','-100%');//top:-100%; navfix
      //$('.topmenu').animate({top:0},500);
      console.log('появилась');
    }else{
      $('.topmenu').removeClass('navfix');
      //$('.topmenu').animate({top:'-100%'},1000);
      console.log('пропала');
    }
 	 }); 

      //форма обратной связи
      $('.workingbtn').click(function(event){
      	event.preventDefault();	
    	$('.connectionform').addClass('connectionformshow');
      	$('body').css('overflow','hidden');
  }); 
      $('.closingbtn').click(function(event){
      	 event.preventDefault();
      	$('.connectionform').removeClass('connectionformshow');
      	$('body').css('overflow','scroll');
  }); 


	//projects
	$('.story-images .img__link1').mouseenter(function(){
	     $(this).append('<div class="socials"><h2><strong>SOME RANDOM TEXT</strong></h2></div>');//<i class="fab fa-instagram"></i></a><a href="#" class="btn"><i class="fab fa-twitter"></i></a><a href="#" class="btn"><i class="fab fa-facebook-f"></i></a><a href="#" class="btn">
	  	console.log('im working');
	  });
	  $('.img__link').mouseleave(function(){
	    $(this).children('.socials').remove();
	});

	//burger
	var a =0;
	$('.myheader-burger').click(function(){
		$('.topmenu').toggleClass('active');
		if(a == 0){
			$('body').css('overflow','hidden');
			a = 1;
		}else{
			$('body').css('overflow','scroll');
			a = 0;
		}
	});
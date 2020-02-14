$(window).on('load', function(){
	setTimeout(function(){
		$('.scene').addClass('is-txt-hidden');
	}, 1300);
	setTimeout(function(){
		$('body').addClass('is-loaded');
	}, 1500);	
	setTimeout(function(){
		$('.preload').css({'display':'none'});
	}, 2000);	
	setTimeout(effects, 2300);	

	if($('.item-service').length > 0){
		setTimeout(function(){
			$('.item-service').each(function(i, el){							
				setTimeout(function(){					
					$(el).addClass('is-visible');					
				},300 + (i * 300));														
			});
		}, 2300);			
	}

	if($('.element-item').length > 0){
		setTimeout(function(){
			$('.element-item').each(function(i, el){							
				setTimeout(function(){					
					$(el).addClass('is-visible');					
				},300 + (i * 300));														
			});	
		}, 2300);		
	}	
});
$(document).ready(function(){

	if($('.slider-backs').length > 0){
	    $('.slider-backs').slick({
	      	arrows:false,
	      	dots:true,
			slidesToScroll: 1,
			autoplay: false,
			speed: 500,
			autoplaySpeed: 5000,        		
			pauseOnHover: false,
			draggable:false,
			pauseOnFocus:false
	    }); 

		const slider = $(".slider-backs");

		slider.on('wheel', (function(e) {
		  e.preventDefault();

		  if (e.originalEvent.deltaY < 0) {
		    $(this).slick('slickPrev');
		  } else {
		    $(this).slick('slickNext');
		  }
		}));

		$('.slider-backs').on('beforeChange', function(event, slick, currentSlide){
			var wVent = $(window).width();
			if(wVent >= 768){
				reeffect();	
				setTimeout(effects, 600);					
			}		  	
		});			    	

	    $('.slider-backs .slick-dots').append('<span class="mouse-div flaticon-mouse"></span>');
	}

	if($('.slider-backs-into').length > 0){
	    $('.slider-backs-into').slick({
	      	arrows:false,
	      	dots:false,
			slidesToScroll: 1,
			autoplay: false,
			speed: 500,
			autoplaySpeed: 5000,        		
			pauseOnHover: false,
			draggable:false,
			pauseOnFocus:false
	    }); 

		const slider = $(".slider-backs-into");

		slider.on('wheel', (function(e) {
		  e.preventDefault();

		  if (e.originalEvent.deltaY < 0) {
		    $(this).slick('slickPrev');
		  } else {
		    $(this).slick('slickNext');
		  }
		}));

		$('.slider-backs-into').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			var wVent = $(window).width();
			if(wVent <= 768){
				var hd = $(slick.$slides.get(nextSlide)).attr('data-hd');
				$('header').css({'background-color':hd});	
			}
			if(wVent >= 768){
				reeffect();	
				setTimeout(effects, 600);					
			}						  	
		});			    	
	}

	if($('.slider-noso').length > 0){
	    $('.slider-noso').slick({
	      	arrows:true,
	      	dots:false,
	      	slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			speed: 500,
			autoplaySpeed: 3000,        		
			pauseOnHover: false,
			pauseOnFocus:false,
			prevArrow: $('.prev-slidos'),
			nextArrow: $('.next-slidos'),
			responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,	        
		      }
		    }
		  	]				
	    }); 	    	
	}

	if($('.slide-client-rsp').length > 0){
	    $('.slide-client-rsp').slick({
	      	arrows:true,
	      	dots:true,
			slidesToScroll: 1,
			autoplay: false,
			speed: 500,
			autoplaySpeed: 3000,        		
			pauseOnHover: false,
			pauseOnFocus:false,
			prevArrow: $('.prev-bt'),
			nextArrow: $('.next-bt')				
	    }); 	    	
	}	

	if($('.slide-descr-txt').length > 0){
	    $('.slide-descr-txt').slick({
	      	arrows:false,
	      	dots:true,
			slidesToScroll: 1,
			autoplay: false,
			speed: 500,
			autoplaySpeed: 5000,        		
			pauseOnHover: false,
			pauseOnFocus:false,				
	    }); 		
	}

	if($('.slider-insta-tam').length > 0){
	    $('.slider-insta-tam').slick({
	      	arrows:true,
	      	dots:false,
			slidesToScroll: 1,
			autoplay: false,
			speed: 500,
			autoplaySpeed: 5000,        		
			pauseOnHover: false,
			pauseOnFocus:false,	
			prevArrow: $('.prev-sliuno'),
			nextArrow: $('.next-sliuno')			
	    }); 		
	}

	if($('.slid-uniqdos').length > 0){
	    $('.slid-uniqdos').slick({
	      	arrows:true,
	      	dots:false,
			slidesToScroll: 1,
			autoplay: false,
			speed: 500,
			autoplaySpeed: 5000,        		
			pauseOnHover: false,
			pauseOnFocus:false,	
			prevArrow: $('.prev-slidos'),
			nextArrow: $('.next-slidos')			
	    }); 		
	}

	if($('.slid-uniquno').length > 0){
	    $('.slid-uniquno').slick({
	      	arrows:false,
	      	dots:true,
			slidesToScroll: 1,
			autoplay: false,
			speed: 500,
			autoplaySpeed: 5000,        		
			pauseOnHover: false,
			pauseOnFocus:false,	
			prevArrow: $('.prev-sliuno'),
			nextArrow: $('.next-sliuno')			
	    }); 		
	}

	if($('.bloq-slid-img-only-arruno').length > 0){
	    $('.bloq-slid-img-only-arruno').slick({
	      	arrows:true,
	      	dots:false,
			slidesToScroll: 1,
			slidesToShow: 1,
			autoplay: false,
			speed: 500,
			autoplaySpeed: 5000,        		
			pauseOnHover: false,
			pauseOnFocus:false,	
			prevArrow: $('.prev-arruno'),
			nextArrow: $('.next-arruno')			
	    }); 		
	}	

	if($('.bloq-slid-img-only-arrdos').length > 0){
	    $('.bloq-slid-img-only-arrdos').slick({
	      	arrows:true,
	      	dots:false,
			slidesToScroll: 1,
			slidesToShow: 2,
			autoplay: false,
			speed: 500,
			autoplaySpeed: 5000,        		
			pauseOnHover: false,
			pauseOnFocus:false,	
			prevArrow: $('.prev-arrdos'),
			nextArrow: $('.next-arrdos'),
			responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,	        
		      }
		    }
		  	]			
	    }); 		
	}			

	if($('.bloq-slide-images').length > 0){
	    $('.bloq-slide-images').slick({
	      	arrows:false,
	      	dots:true,
			slidesToScroll: 1,
			autoplay: false,
			speed: 500,
			autoplaySpeed: 5000,        		
			pauseOnHover: false,
			pauseOnFocus:false,				
	    }); 		
	}

	if($('.slide-show3').length > 0){
	    $('.slide-show3').slick({
	      	arrows:false,
	      	dots:true,
	      	slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: false,
			speed: 500,
			autoplaySpeed: 4000,        		
			pauseOnHover: false,
			pauseOnFocus:false,
			responsive: [
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1
		      }
		    }
		  	]				
	    }); 		
	}

	if($('.bloq-slide-images-cap-lam').length > 0){
	    $('.bloq-slide-images-cap-lam').slick({
	      	arrows:false,
	      	dots:true,
		  	centerMode: true,
		  	centerPadding: '300px',
		  	slidesToShow: 1,	      	
			slidesToScroll: 1,
			autoplay: false,
			speed: 500,
			autoplaySpeed: 5000,        		
			pauseOnHover: false,
			pauseOnFocus:false,
			responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        centerMode: true,
		        centerPadding: '100px'
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        centerMode: true,
		        centerPadding: '40px'
		      }
		    }
		  	]				
	    }); 		
	}		

	if($('.slide-team-rsp').length > 0){
	    $('.slide-team-rsp').slick({
	      	arrows:false,
	      	dots:true,
			slidesToScroll: 1,
			autoplay: false,
			speed: 500,
			autoplaySpeed: 5000,        		
			pauseOnHover: false,
			pauseOnFocus:false,				
	    }); 		
	}	

	if($('.list-resp-noso').length > 0){
	    $('.list-resp-noso').slick({
	      	arrows:true,
	      	dots:false,
			slidesToScroll: 1,
			autoplay: false,
			speed: 500,
			autoplaySpeed: 3000,        		
			pauseOnHover: false,
			pauseOnFocus:false,	
			prevArrow: $('.prev-bt'),
			nextArrow: $('.next-bt')						
	    }); 		
	}			

	$('.more-team').click(function(){
  		var body = $("html, body");
  		var altop = $("#eteam").offset().top;		
  		body.stop().animate({scrollTop:altop}, 500, 'swing', function() {});		
	});

	var contador = 0;
	$('.mainmenu').click(function(){
		if(contador == 0){
			$('body').addClass('is-open-menu');
			contador = 1;
		}else{
			$('body').removeClass('is-open-menu');		
			contador = 0;
		}
	});

	$('.cap-enl').click(function(){	
		$(this).parents('.item-service').addClass('item-expanded');		
		var logo = $(this).attr('data-logo');
		if(logo == 'blue'){
			$('.logo a img').attr('src',URLdomain+'/images/logo/chicha_blue.png');
		}else{
			$('.logo a img').attr('src',URLdomain+'/images/logo/chicha.png');
		}		

		$('.list-services').addClass('area-expanded');
		setTimeout(function(){
			$('.item-expanded').children('.into-service').children('.cont-item-service').children('.bloq-textual-service').css({'opacity': '1'});
		}, 500);
		setTimeout(function(){
			$('.item-expanded').children('.into-service').children('.cont-item-service').children('.mench-serv').css({'opacity': '1'});
		}, 200);
	});

	$('.back-link a').click(function(e){
		$('.item-service').removeClass('item-expanded');
		$('.list-services').removeClass('area-expanded');	
		$('.bloq-textual-service, .mench-serv').css({'opacity': '0'});
		$('.logo a img').attr('src',URLdomain+'/images/logo/chicha.png');
	});

	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.element-item',
	  layoutMode: 'fitRows'
	});
	// bind filter button click
	$('.filters-button-group').on( 'click', 'button', function() {
	  var filterValue = $( this ).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'button', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});

	$('.itService').change(function(){
		var vl = $(this).val();
		var inSel = $(".itService")[0].selectedIndex;
		$grid.isotope({ filter: vl });		
	});

	scrollea();
	$(window).scroll(function(){
		scrollea();

	});

	$('.btn-floating a, .btn-contact-float a').click(function(e){
		e.preventDefault();
		$('.form-floating').addClass('active');
	});

	$('.close-frm-flt').click(function(){
		$('.form-floating').removeClass('active');
	});

});

function effects(){
	$('.effupdown').addClass('slideUpToDown');
	$('.effdownup').addClass('slideDownToUp');
	$('.effleftright').addClass('slideLeftToRight');
	$('.effrightleft').addClass('slideRightToLeft');
}

function reeffect(){
	$('.effupdown').removeClass('slideUpToDown');
	$('.effdownup').removeClass('slideDownToUp');
	$('.effleftright').removeClass('slideLeftToRight');	
	$('.effrightleft').removeClass('slideRightToLeft');
}

function scrollea(){
	var scrrollto = $(window).scrollTop();
	var wVentana = $(window).width();
	var hVentana = $(window).height();

	if(wVentana >= 768){
		if($('.item-team').length > 0){
			var lo = 0;	
			$('.item-team').not('.is-visible').each(function(i, el){				
				var offteam = $(el).offset().top;			
				if((scrrollto + hVentana - 100) > offteam){				
					lo++;
					setTimeout(function(){					
						$(el).addClass('is-visible');					
					},300 + ( lo * 300 ));														
				}
			});
		}

		if($('.appear').length > 0){
			$('.appear').each(function(i, el){				
				var offapp = $(el).offset().top;			
				if((scrrollto + hVentana - 100) > offapp){								
					$(el).addClass('is-visible');																			
				}
			});		
		}
	}
}
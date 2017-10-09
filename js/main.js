$('document').ready(function(){
	$('#message').click(function(){
		$(".header__box").toggle();
	});
	$('#inbox-list').click(function(){
		$(".inbox__list").toggle();
	});
	$('#edit').click(function(){
		$(".modal-edit").toggle();
	});
	$('.modal-edit__close, .modal-edit__close-text').click(function(){
		$(".modal-edit").toggle();
	});
	$('.owl-carousel').owlCarousel({
	    nav:true,
	    navText: ["<img src='img/prev.png'>","<img src='img/next.png'>"],
	    center:false,
	    loop:true,
		smartSpeed: 1000,
		fluidSpeed: true,
	    responsive: {
	    	0 : {
	    	  items:1
	    	},
	    	768 : {
	    	  items:3
	    	},
	    	1024 : {
	    		items:3
	    	}
	    }
	});
var swiper = new Swiper('.popup .swiper-container', {
    pagination: '.popup .swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true
    }
});
$('.popup .close_window, .overlay').click(function (){
    $('.popup, .overlay').css({'opacity':'0', 'visibility':'hidden'});
  });
  
  $(this).keydown(function(eventObject){
    if (eventObject.which == 27){
      $('.popup, .overlay').css({'opacity':'0', 'visibility':'hidden'});
    }
  });

  $('a.open_window').click(function (e){
    $('.popup, .overlay').css({'opacity':'1', 'visibility':'visible'});
    // e.preventDefault();
  });
	
});
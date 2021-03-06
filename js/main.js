$(document).ready(function() {
    
	$('.article__link').magnificPopup({
		type:'inline',
		closeBtnInside:true,
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	  });
	
	$('.gallery__img').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		
        gallery: {
            closeOnContentClick: true,
          },
        
        image: {
			verticalFit: true,
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.article__slider').slick({
		dots: true,
	  });

	$('.feedback__slider').slick({
		dots: true,
	  });

	// Propery-display block switch -------------------------------------------

	var mixer = mixitup('.property-display__body');

	$('.property-display__menu-item').on('click', event=>{
		$(event.currentTarget).siblings().removeClass('property-display__menu-item-active');
		$(event.currentTarget).addClass('property-display__menu-item-active')
	});
	
	// Questions dropdown list -----------------------------------------------

	$('.questions__item-button').on('click', event=>{
		$(event.currentTarget).next().slideToggle();
		var $buttonImg = $(event.currentTarget).children();
		if ($buttonImg.hasClass("questions__item-img--plus")) {
			$buttonImg.replaceWith('<img src="./images/button-sign-minus.svg" alt="">')
		} else {
			$buttonImg.replaceWith('<img class="questions__item-img--plus" src="./images/button-sign-plus.svg" alt="">')
		};

		$(event.currentTarget).parent().siblings().children('.questions__item-ansver-container').css('display', 'none');
		$(event.currentTarget).parent().siblings().children('.questions__item-button').children().replaceWith('<img class="questions__item-img--plus" src="./images/button-sign-plus.svg" alt="">');
		$(event.currentTarget).parent().siblings().removeClass('questions__item--active');

		$(event.currentTarget).parent().toggleClass('questions__item--active');
	});

	// Menu hiddern on scroll -------------------------------------------------

	var prevScrollPos = window.scrollY;
	$(window).scroll(function(){
		var carrentScrollPos = window.scrollY;
		if (carrentScrollPos > 80) {
			$('.header__menu-area').addClass('header__menu-area--white-bg');
			$('.header__menu-wrapper').addClass('header__menu-wrapper--fade');
			if (prevScrollPos > carrentScrollPos) {
				$('.header__menu-wrapper').removeClass('header__menu-wrapper--fade')
			} else {
				$('.header__menu-wrapper').addClass('header__menu-wrapper--fade')
			};
			prevScrollPos = carrentScrollPos
		} else {
			$('.header__menu-area').removeClass('header__menu-area--white-bg');
			$('.header__menu-wrapper').removeClass('header__menu-wrapper--fade')
		};
	})


	// Burger menu ------------------------------------------------------------

	$('.header__menu-burger').on('click', () => {
		
		$('.header__menu').toggleClass('header__menu--active');
		$('.header__menu-burger').toggleClass('header__menu-burger--active')
		$('body').toggleClass('lock');
	})

	// Dropdown menu ----------------------------------------------------------

	$('.footer__block').on('click', event=>{
		if(window.matchMedia('(max-width: 464px)').matches) {

			var hasClass = $(event.currentTarget).siblings('.footer__block').hasClass('footer__block--invis');

			if (hasClass) {
				$('.footer__block').removeClass('footer__block--invis');
				$('.footer__blocks-list').removeClass('footer__blocks-list--active');
				$('.footer__blocks-title').removeClass('footer__blocks-title--rotate');
			} else {
				$(event.currentTarget).siblings('.footer__block').addClass('footer__block--invis');
				$(event.currentTarget).children('.footer__blocks-list').addClass('footer__blocks-list--active');
				$(event.currentTarget).children('.footer__blocks-title').addClass('footer__blocks-title--rotate');
			};

		};

	})

  });
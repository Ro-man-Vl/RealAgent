$(document).ready(function() {
    
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

	$('.feedback__slider').slick({
		dots: true,
	  });

	// Propery-display block switch -------------------------------------------

	$('.property-display__menu-item').on('click', event=>{
		$(event.currentTarget).siblings().removeClass('property-display__menu-item-active');
		$(event.currentTarget).addClass('property-display__menu-item-active')
	});
	
	$('#house').on('click', ()=>{
		$('.property-display__block--apartment').css('display', 'none');
		$('.property-display__block--house').css('display', 'flex');
		$('.property-display__block--land').css('display', 'none');
	});
	
	$('#apartment').on('click', ()=>{
		$('.property-display__block--apartment').css('display', 'flex');
		$('.property-display__block--house').css('display', 'none');
		$('.property-display__block--land').css('display', 'none');
	});

	$('#land').on('click', ()=>{
		$('.property-display__block--apartment').css('display', 'none');
		$('.property-display__block--house').css('display', 'none');
		$('.property-display__block--land').css('display', 'flex');
	});

	$('#all').on('click', ()=>{
		$('.property-display__block--apartment').css('display', 'flex');
		$('.property-display__block--house').css('display', 'flex');
		$('.property-display__block--land').css('display', 'flex');
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
		
		$(event.currentTarget).parent().toggleClass('questions__item--active');
	});

	// Burger menu ------------------------------------------------------------

	$('.header__menu-burger').on('click', () => {
		
		$('.header__menu').slideToggle();

		$('.header__menu-burger').toggleClass('header__menu-burger--active')
	})

	// Dropdown menu ----------------------------------------------------------

	$('.footer__block').on('click', event=>{
		$(event.currentTarget).children('.footer__blocks-list').toggleClass('footer__blocks-list--active',);
		$(event.currentTarget).siblings('.footer__block').slideToggle();
		$(event.currentTarget).toggleClass('footer__block--active');
	})

  });
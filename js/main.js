$(document).ready(function() {
    
    $('.gallery__popup-gallery').magnificPopup({
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

  });
$(".menu").click(function(){
	$("body").toggleClass("nactive");
});
$(document).ready(function(){
			$('.slide').slick(
			{
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				dots: true,
				responsive:[
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{	
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots:true
					}
				},
				]
			});
		});
		$(document).ready(function(){
			$('.blogslide').slick(
			{
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				dots:true,
				responsive:[
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots:true
					}
				}
				]
			});
		});
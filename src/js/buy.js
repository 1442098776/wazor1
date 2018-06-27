$(function(){
	var n=0,time1;
	var arr=['./src/images/buy/219_image_1_US_hero.jpg','./src/images/buy/219_Image_2_Hero.jpg','./src/images/buy/219_Image_3_Hero.jpg','./src/images/buy/219_Image_4_Hero.jpg','./src/images/buy/219_image_5_US_hero.jpg'];
	clearInterval(time1);
	show();
	showTime();
	$('.topPanel>.ul>li').click(function() {
		var index=$(this).index();
		$(this).stop().addClass('active').siblings().stop().removeClass('active');
		n=index;
		show();
	});

	function show(){
		n=n>=4?0:++n;
		$('.count .buyImg').stop().attr('src',arr[n]);
		$('.topPanel>.ul>li').eq(n-1).stop().addClass('active').siblings().stop().removeClass('active');
	}
	function showTime(){
		time1=setInterval(show,3000);
	}

});

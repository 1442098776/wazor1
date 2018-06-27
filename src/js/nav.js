$(function(){
	var n=1,
	    l=$('.nav .ulCount .img>ul>li').length,    //获取li的个数
	    w=$('.nav .ulCount .img>ul>li').outerWidth(true)*l,  //获取每个li自身的长度（包括外边距）
	    w1=$('.nav .ulCount .img>ul>li').outerWidth(true)*6;  //获取中间div初始显示的长度
	    // 设置中间放图片的外层div的长度
	    $('.nav .ulCount .img>ul').css('width',w);  //设置总长度

	    // 导航中点击左右箭头按扭的效果
	    $('.nav .btn1,.nav .btn2').click(function(){
	    	if ($(this).hasClass('btn1')) {
	    		$(this).siblings('.img').children('ul').stop().animate({left:0},500);
	    		$(this).css('color','#989d9c').siblings('.btn2').css('color','#fff');
	    	}
	    	if ($(this).hasClass('btn2')) {
	    		$(this).siblings('.img').children('ul').stop().animate({left:-w1},500);
	    		$(this).css('color','#989d9c').siblings('.btn1').css('color','#fff');
	    	}
	    });

        // 导航左边鼠标经时显隐效果
	    $('.header .nav>.ul1>li').mouseover(function() {
	    	$(this).addClass('active').siblings('li').removeClass('active');
	    	$(this).children('ul').children('li').mouseover(function(){
	    		$(this).children('div').stop().fadeIn(0).parent('li').siblings('li').children('div').stop().fadeOut(0);
	    		//设置高度
	    		var h=$(this).parent('ul').height()+$(this).children('div').innerHeight()+$(this).parents('.ul1').innerHeight()-10;
	    		$(this).parents('.nav').css('height',h);
	    	}).mouseout(function() {
	    		$(this).children('div').stop().fadeOut(0);
	    		$(this).parents('.nav').css('height','');
	    	});
	    }).mouseout(function() {
	    	$('.header .nav>.ul1>li').eq(0).stop().addClass('active').siblings().stop().removeClass('active');
	    });

	   // 导航右边鼠标经过时显隐效果
	   $('.header .nav>.ul2>li').mouseover(function(){
	   	$(this).stop().addClass('active').siblings().stop().removeClass('active').end().children('div').stop().fadeIn();
	   }).mouseout(function() {
	   	$(this).removeClass('active').children('div').stop().fadeOut();
	   });
});
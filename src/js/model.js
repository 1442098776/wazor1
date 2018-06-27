$(function(){
	//点击图片中的播放图片，出现视频弹窗、点击分享后出现分享的div
	var arr=['./src/video/movie01.mp4','./src/video/Wazor-248-1.mp4'];
	$('.videoPupop,.videoPupop1,.pupopVideo .shareFont,.share .shareClose,.pupopVideo .videoClose,.pupopVideo .video,.sortCount .sendHint,.pupop1,.pupop1 .pupopClose').click(function(){
		// 视频出现，设置视频径
		if ($(this).hasClass('videoPupop')) {
		$('.pupopVideo').fadeIn('slow').find('video').attr('src',arr[0]).parent().siblings('.img').fadeIn('slow');	
		}
		if ($(this).hasClass('videoPupop1')) {
		$('.pupopVideo').fadeIn('slow').find('video').attr('src',arr[1]).parent().siblings('.img').fadeIn('slow');	
		}
		// 分享区域出现
		if ($(this).hasClass('shareFont')) {
			$(this).siblings('.share').stop().fadeIn('slow');
		}
		// 关闭分享区域
		if ($(this).hasClass('shareClose')) {
			$(this).parent('.share').stop().fadeOut('slow')
		}
		// 关闭弹窗
		if ($(this).hasClass('videoClose')) {
			$(this).parents('.pupopVideo').fadeOut();
		}
		// 播放图标的显隐
		if ($(this).hasClass('video')) {
			$(this).toggleClass('hasvideo');
			if ($(this).hasClass('hasvideo')) {
				$(this).siblings('.img').stop().fadeOut()
				$(this).children('video').stop().trigger('play')
			}else {
				$(this).siblings('.img').stop().fadeIn();
				$(this).children('video').stop().trigger('pause')
			}
		}
		// 点击出现弹窗
		if ($(this).hasClass('sendHint')) {
			var imgSrc=$(this).parent().siblings('.img').find('img').attr('src');    //获取图片路径
			$('.pupop1').stop().fadeIn().find('.lightboxImg').attr('src',imgSrc);
		}
		// 点击关团弹窗
		if ($(this).hasClass('pupopClose')) {
			$(this).parents('.pupop1').stop().fadeOut();
		}
	});
});
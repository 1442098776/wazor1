$(function(){
	fun();	
	$('.product-list .product-select,.contenCount1 .video').click(function() {
		if ($(this).hasClass('product-select')) {
			fun();
		}
		if ($(this).hasClass('video')) {
			$(this).toggleClass('hasvideo');
			if ($(this).hasClass('hasvideo')) {
				$(this).stop().trigger('play')
			}else {
				$(this).stop().trigger('pause')
			}
		}
	});
	$('.shopLook .p2>span').click(function(){
			var i=$(this).index(),
			    h=$('.shopLook .contenCount').eq(i).offset().top;
			    $('html').stop().animate({"scrollTop":h},500);

		});
	function fun(){
		var n=$('.product-list').find('input:checked').length,
		    num=0;
			$('.shopLook .p4 .num').text(n);
			$('.product-list>.add-product').each(function(){
				var n2=parseFloat($(this).find('input:checked').parent().siblings().children('span').text().substr(1));
				if (isNaN(n2)) {
					n2=0;
				}
				num+=n2;
			});
			$('.shopLook .p4 .total').text('$'+num);
	}
});
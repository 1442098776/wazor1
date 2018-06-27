$(function(){
	// 验证不通过，出现提示
	function fun(n,t){
		$(n).css('borderColor','red').siblings('p').stop().fadeIn().text(t).siblings('i').stop().fadeIn().html('&#xe641;').css('color','red');
	}
	// 验证通过
	function fun1(n){  
		$(n).css('borderColor','').siblings('p').stop().fadeOut().siblings('i').stop().fadeIn().html('&#xe637;').css('color','green');
	}
	$('.email,.firstName,.lastName,.pwd,.pwd1,.birth,.pwd2').blur(function() {
		var t;
		if ($(this).hasClass('email')) {
			if (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test($(this).val())== false) {
				t='Please enter the correct email address!';
				fun(this,t);
			}else {
				fun1(this);
			}
		}
		if ($(this).hasClass('firstName') || $(this).hasClass('lastName') || $(this).hasClass('birth')) {
			if (/(^\s)/.test($(this).val())==true || $(this).val()==='') {
				t='No Spaces at the beginning,The input cannot be empty!';
				console.log('a')
				fun(this,t);
			}
			if (/(^\s)/.test($(this).val())==false && $(this).val()!==''){
				fun1(this);
				console.log('b')
			}
		}
		if ($(this).hasClass('pwd')) {
			if (/(?!.*\s)(?!^[\u4E00-\u9FA5]+$)(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^\u4E00-\u9FA5a-zA-Z\d]+$)^.{6,16}$/.test($(this).val())== false) {
				t='No Spaces, 6-16 characters long, must contain at least two varters, Numbers, and symbols.';
				fun(this,t);
			}else {
				fun1(this);
			}
			if ($('.pwd1').val()!=$(this).val()) {
				$('.pwd1').css('borderColor','red').siblings('p').stop().fadeIn().text('Password inconsistent, please re-enter!').siblings('i').stop().fadeIn().html('&#xe641;').css('color','red');
			}else {
				$('.pwd1').css('borderColor','').siblings('p').stop().fadeOut().siblings('i').stop().fadeIn().html('&#xe637;').css('color','green');
			}
		}
		if ($(this).hasClass('pwd1')) {
			if ($(this).val()!=$('.pwd').val()) {
				t='Password inconsistent, please re-enter!'
				fun(this,t);
			}else {
				fun1(this);
			}
		}
         
        // 验证登录密码
		if ($(this).hasClass('pwd2')) {
			if (/(?!.*\s)(?!^[\u4E00-\u9FA5]+$)(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^\u4E00-\u9FA5a-zA-Z\d]+$)^.{6,16}$/.test($(this).val())== false) {
				t='No Spaces, 6-16 characters long, must contain at least two varters, Numbers, and symbols.';
				fun(this,t);
			}else {
				fun1(this);
			}
		}
	}).focus(function() {
		$(this).css('border','').siblings('p').stop().fadeOut(0).siblings('i').stop().fadeOut(0);
	});

	// 点击.uPopup出现弹窗
	$('.uPopup,.termsPupop .pupopClose,.pupopCount .one,.pupopCount .two,.pupopCount .three,.pupopCount .foru,.pupopCount .five').click(function(){
		if ($(this).hasClass('uPopup')) {
			$('.termsPupop').stop().fadeIn('slow');
		}
		if ($(this).hasClass('pupopClose')) {
			$(this).parents('.termsPupop').stop().fadeOut();
		}
		var n;
		if ($(this).hasClass('one')) {
			n=$('.oneCount');
			fun(n,this);

		}
		if ($(this).hasClass('two')) {
			n=$('.twoCount');
			fun(n,this);

		}
		if ($(this).hasClass('three')) {
			n=$('.threeCount');
			fun(n,this);

		}
		if ($(this).hasClass('foru')) {
			n=$('.foruCount');
			fun(n,this);

		}
		if ($(this).hasClass('five')) {
			n=$('.fiveCount');
			fun(n,this);

		}
		function fun(n,t){
			$(t).stop().addClass('active').siblings().stop().removeClass('active');
			n.stop().fadeIn().siblings().stop().fadeOut();
		}

	});


	//forgotpwd页面 点击按扭跳转重置密码
	$('.forgotpwd .requestBtn').click(function(){
		$(this).parents('.form').stop().fadeOut(0).siblings('.form1').stop().fadeIn('slow').siblings('.p1').text('Change Password');
	});
});
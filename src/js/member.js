$(function(){
	var h=$('.centerRight').height(),
		    h1=$('.centerRight1').height(),
		    h2=$('.centerRight2').height(),
		    h3=$('.centerRight4').height(),
		    h4=$('.centerRight6').height(),
		    h5=$('.centerRight8').outerHeight();
	// 点击>图片时的跳转
	function hide(n){
		$(n).parents('.centerRight').fadeOut(0);
	}
	$('.srcImg,.srcImg1,.srcImg2').click(function(){
		if ($(this).hasClass('srcImg')) {
			hide(this);
	    	$('.centerLeft').css("height",h2);
	    	$('.centerLeft>ul>li:eq(2)').css('background','#cda118');
	    	$('.centerRight2').fadeIn('slow');
		}
		if ($(this).hasClass('srcImg1')) {
			hide(this);
			$('.centerLeft').css("height",h4);
			$('.centerLeft>ul>li:eq(4)').css('background','#cda118');
	    	$('.centerRight6').fadeIn('slow');
		}
		if ($(this).hasClass('srcImg2')) {
			hide(this);
			$('.centerLeft').css("height",h5);
			$('.centerLeft>ul>li:eq(5)').css('background','#cda118');
	    	$('.centerRight8').fadeIn('slow');
		}
	});

	// 以下是点击Personal Details这项右边显示的表单
	function input(n){
		$(n).css('border','1px solid red');
	}
	function input1(n){
		$(n).css('border','').siblings('p').fadeOut('slow');
	}
	$('.firstName,.lastName,.emailAddress,.comfirmEmail,.date,.currentPwd,.pwd,.confirmPwd').blur(function(){
		var regular=/(?!.*\s)(?!^[\u4E00-\u9FA5]+$)(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^\u4E00-\u9FA5a-zA-Z\d]+$)^.{3,16}$/.test($(this).val())== false,
		    regular1=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test($(this).val())== false,
		    regular2=/(?!.*\s)(?!^[\u4E00-\u9FA5]+$)(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^\u4E00-\u9FA5a-zA-Z\d]+$)^.{6,16}$/.test($(this).val())== false;
		if ($(this).hasClass('firstName') || $(this).hasClass('lastName')) {
			if (/(^\s*)/.test($(this).val())==true || $(this).val()=='') {
				input(this);
				$(this).siblings('p').text('The input box cannot be empty.').fadeIn('slow');
			}
			if (/(^\s*)/.test($(this).val())==false && $(this).val()!=''){
				input1(this);
			}
		}

		if ($(this).hasClass('emailAddress')) {
			if (regular1) {
				input(this);
				$(this).siblings('p').text('The email address you entered is not legal.').fadeIn('slow');
			}else {
				input1(this);
			}
		}

		if ($(this).hasClass('comfirmEmail')) {
			if ($(this).val()!=$('.emailAddress').val()) {
				input(this);
				$(this).siblings('p').text('Email inconsistency').fadeIn('slow');
			}else {
				input1(this);
			}
		}

		if ($(this).hasClass('date')) {
			if ($(this).val()==='') {
				input(this);
				$(this).siblings('p').text('Please select date.').fadeIn('slow');
			}else {
				input1(this);
			}
		}
		// 判断当前密码
		if ($(this).hasClass('currentPwd')) {
			if (regular2) {
				input(this);
				$(this).siblings('p').text('Please enter the current password.').fadeIn('slow');
			}else {
				input1(this);
			}
		}

		if ($(this).hasClass('pwd')) {
			if (regular2) {
				input(this);
				$(this).siblings('p').text('No Spaces, 6-16 characters long, must contain at least two varters, Numbers, and symbols.').fadeIn('slow');
			}else {
				input1(this);
			}
		}

		if ($(this).hasClass('confirmPwd')) {
			if ($(this).val()!=$('#pwd2').val() || regular2) {
				input(this);
				$(this).siblings('p').text('No Spaces, 6-16 characters long, must contain at least two varters, Numbers, and symbols.').fadeIn('slow');
			}else {
				input1(this);
			}
		} 
	}).focus(function() {
		
		if ($(this).hasClass('firstName')) {
			input1(this);
		}
		if ($(this).hasClass('lastName')) {
			input1(this);
		}
		if ($(this).hasClass('emailAddress')) {
			input1(this);
		}
		if ($(this).hasClass('comfirmEmail')) {
			input1(this);
		}
		if ($(this).hasClass('date')) {
			input1(this);
		}
		if ($(this).hasClass('currentPwd')) {
			input1(this);
		}
		if ($(this).hasClass('pwd')) {
			input1(this);
		}
		if ($(this).hasClass('confirmPwd')) {
			input1(this);
		}
	});;
	    
	// 点击删除产品
	function order(){
		if ($('.centerRight2 .product').length<=0) {
			$('.centerRight2').fadeOut(0);
			$('.centerRight3').fadeIn(1000);
		}
	}
	function address(){
		if ($('.addressBook').length<=0) {
			$('.centerRight4').fadeOut(0);
			$('.centerRight5').fadeIn(1000);
		}
	}
	function cart(){
		if ($('.secure').length<=0) {
				$('.centerRight6').fadeOut(0);
				$('.centerRight7').fadeIn(1000);
			}
	}
	function wishList(){
		if ($('.wishList').length<=0) {
				$('.centerRight8').fadeOut(0);
				$('.centerRight9').fadeIn(1000);
			}
	}
	$('.remove,.remove1,.remove2,.remove3,.popupClose1').click(function(){
		if ($(this).hasClass('remove')) {
			$(this).parents('.product').remove();
			order()
		}
		if ($(this).hasClass('remove1')) {
			$(this).parents('.addressBook').remove();
			address();
			
		}
		if ($(this).hasClass('remove2')) {
			$(this).parents('.secure').remove();
			cart();
			
		}
		if ($(this).hasClass('remove3')) {
			$(this).parents('.wishList').remove();
			wishList();
			
		}
		if ($(this).hasClass('popupClose1')) {
			$(this).parents('.popup').fadeOut();
		}
	});




	// 以下是点击加减按扭时，数量的自加自减
	$('.text').val('1');
	$('.minus,.plus').click(function(){
		if($(this).hasClass('minus')){
			if ($(this).siblings('.text').val()<=1) {
				$(this).css({'disabled':'disabled','border':'1px solid #cccccc','color':'#cccccc'});
			}else if($(this).siblings('.text').val()>1) {
				var text=$(this).siblings('.text').val();
				$(this).css({'disabled':'enabled','border':'1px solid #666666','color':'#000000'});
				 $(this).siblings('.text').val(--text);
			}
		}
		if($(this).hasClass('plus')){
			var text=$(this).siblings('.text').val();
			 $(this).siblings('.text').val(++text);
			 $(this).siblings('.minus').css({'border':'1px solid #666666','color':'#000000'});
		}
	});


    // 以下是点击.centerLeft下li后右边显示相对应的内容
			

	    if($('div').hasClass('centerRight')){
	    	$('.centerLeft').css("height",h);
	    }
	    // if($('div').hasClass('centerRight1')){

	    // 	$('.centerLeft').attr("height",h1);
	    // }
	    // if($('div').hasClass('centerRight2')){
	    // 	$('.centerLeft').attr("height",h2);
	    // }
	    $('.centerLeft ul li').not('.centerLeft ul li:first-child').click(function(){
	    	$(this).css('background-color','#cda118').siblings('li').css('background-color','');
	    });
	    // $('.centerLeft ul li:nth-child(1)').click(function(){
	    // 	$(this).siblings('li').css('background','');
	    // 	$(this).parents('.centerLeft').siblings('div').not('.centerRight1').fadeOut(0);
	    // 	$('.centerLeft').css("height",h1);
	    // 	$('.centerRight').fadeIn('slow');
	    // });
	    // 
	    function order1(){
	    	if ($('.centerRight2 .product').length<=0) {
	    		$('.centerRight2').fadeOut(0);
	    		$('.centerRight3').fadeIn(1000);
	    	}else {
	    		$('.centerRight2').fadeIn('slow');
	    	}
	    }
	    function address1(){
	    	if ($('.addressBook').length<=0) {
	    		$('.centerRight4').fadeOut(0);
	    		$('.centerRight5').fadeIn(1000);
	    	}else {
	    		$('.centerRight4').fadeIn('slow');
	    	}
	    }
	    function cart1(){
	    	if ($('.secure').length<=0) {
	    			$('.centerRight6').fadeOut(0);
	    			$('.centerRight7').fadeIn(1000);
	    		}else {
	    			$('.centerRight6').fadeIn('slow');
	    		}
	    }
	    function wishList1(){
	    	if ($('.wishList').length<=0) {
	    			$('.centerRight8').fadeOut(0);
	    			$('.centerRight9').fadeIn(1000);
	    		}else {
	    			$('.centerRight8').fadeIn('slow');
	    		}
	    }
	    $('.centerLeft ul li:nth-child(2)').click(function(){
	    	$(this).parents('.centerLeft').siblings('div').not('.centerRight1').fadeOut(0);
	    	$('.centerLeft').css("height",h1);
	    	$('.centerRight1').fadeIn('slow');
	    });
	    $('.centerLeft ul li:nth-child(3)').click(function(){
	    	$(this).parents('.centerLeft').siblings('div').not('.centerRight2').fadeOut(0);
	    	$('.centerLeft').css("height",h2);
	    	
	    	order1();
	    	
	    });
	    $('.centerLeft ul li:nth-child(4)').click(function(){
	    	$(this).parents('.centerLeft').siblings('div').not('.centerRight4').fadeOut(0);
	    	$('.centerLeft').css("height",h3);
	    	
	    	address1();
	    });
	     $('.centerLeft ul li:nth-child(5)').click(function(){
	     	$(this).parents('.centerLeft').siblings('div').not('.centerRight6').fadeOut(0);
	     	$('.centerLeft').css("height",h4);
	    	
	    	cart1();
	    });
	    $('.centerLeft ul li:nth-child(6)').click(function(){
	     	$(this).parents('.centerLeft').siblings('div').not('.centerRight8').fadeOut(0);
	     	$('.centerLeft').css("height",h5);
	    	
	    	wishList1()
	    });
	     $('.centerLeft ul li:last-child').click(function(){
	     	$(this).parents('.centerLeft').siblings('div').not('.centerRight10').fadeOut(0);
	    	$('.centerRight10').fadeIn('slow');
	    });
	    


        // MY PREFERENCES页面
	    var array=['English'];
	    $.each(array,function(index,i){
	    	$('#select').get(0).selectedIndex=0;
	    	$('#select').append('<option value='+i+'>'+i+'</option>');
	    });
	    

	    // 弹窗出现
	    
	    $('.popupClose').hover(function() {
	    	$(this).children('img').attr('src','src/images/member/delete_normal1.png');
	    }, function() {
	    	$(this).children('img').attr('src','src/images/member/delete_normal.png');
	    });
	    $('.returns,.edit,.compvared,.add').click(function() {
	    	function popup(){
	    		var h0=$(document.body).height()
	    		$('.popup').css('height',h0);
	    		$('.popup').fadeIn();
	    	}
	    	function fun(n){
	    		n.fadeIn().siblings('div').fadeOut(0);
	    	}
	    	if ($(this).hasClass('returns')) {
	    		popup();
	    		var n=$('.shipmentDetails');
	    		fun(n);
	    	}
	    	if ($(this).hasClass('edit')) {
	    		popup();
	    		$('.addressHeader').text('DEIT ADDRESS');
	    		var n=$('.editAddress');
	    		fun(n);
	    	}
	    	if ($(this).hasClass('compvared')) {
	    		popup();
	    		var n=$('.ordersCompvared');
	    		fun(n);
	    	}
	    	if ($(this).hasClass('add')) {
	    		popup();
	    		$('.addressHeader').text('ADD NEW ADDRESS');
	    		var n=$('.editAddress');
	    		fun(n);
	    	}
	    });

	        $('.popup').click(function(ev){
	        if(ev.target!=this){
	            return;
	        }else{
	            $('.popup').css("display","none");
	        }
	        });

	        var a=['American'];
	        var b=['Albama','Alaska','American Samoa','Arizona','Arkansas','Armed Forces Americas','Armed Forces Europe,Middle East,& Canada','Armed Forces Pacific','California',
    'Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois', 'Indiana','Iowa',
    'Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada',
    'New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania',
    'Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Islands','Virginia','Washington','West Virginia','Wisconsin','Wyoming'
	];
	        $.each(a,function(index,i){
			 $('#Country').get(0).selectedIndex=0;
			 $('#Country').append('<option value='+i+'>'+i+'</option>');
		        });

	        $.each(b,function(index,i){
	        		 $('#State').get(0).selectedIndex=0;
	        		 $('#State').append('<option value='+i+'>'+i+'</option>');
	        	});
});

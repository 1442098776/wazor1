$(function(){
	var a=['United States'],
	 b=['Albama','Alaska','American Samoa','Arizona','Arkansas','Armed Forces Americas','Armed Forces Europe,Middle East,& Canada','Armed Forces Pacific','California',
    'Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois', 'Indiana','Iowa',
    'Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada',
    'New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania',
    'Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Islands','Virginia','Washington','West Virginia','Wisconsin','Wyoming'
	],
	c=['Please select'],
	d=['New address'];
	$.each(a,function(index,i){
			 $('#Country').get(0).selectedIndex=0;
			 $('#Country').append('<option value='+i+'>'+i+'</option>');
		});
	$.each(b,function(index,i){
			 $('#State').get(0).selectedIndex=0;
			 $('#State').append('<option value='+i+'>'+i+'</option>');
		});
	$.each(c,function(index,i){
			 $('#Card').get(0).selectedIndex=0;
			 $('#Card').append('<option value='+i+'>'+i+'</option>');
		});
	$.each(d,function(index,i){
			 $('#use').get(0).selectedIndex=0;
			 $('#use').append('<option value='+i+'>'+i+'</option>');
		});
	// var val=$('.radio-Card input:checked').val();
	// if (val==null) {
	// 	$('.radio-Card').parents('.form-group3').nextAll('.form-group3').show();
	// 	return false;
	// }
	// else{
	// 	$('.radio-Card').parents('.form-group3').nextAll('.form-group3').hide();
	// }



});
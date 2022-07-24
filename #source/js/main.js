//@prepros-append test.js

$(document).ready(function () {
	$('.sliderblock__inner').slick({
		"arrows":false,
		"dots":true
	});
});


$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
})



$(document).ready(function(){
	$('.donate__donate-type-btn').click(function(event){
		$('.donate__donate-type-btn,.donate__donate-type-list').toggleClass('active');
	
	})
	$('.donate__donate-server-btn').click(function(event){
		$('.donate__donate-server-btn,.donate__donate-server-list').toggleClass('active');
	
	})
})




// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.pickr',
    theme: 'monolith', // or 'monolith', or 'nano'

    components: {

        // Main components
        default: '#000',
        preview: true,
        opacity: false,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

$(document).ready(function(){
	$('.donate__donate-server-list-item-radio').click(function(){
    if ($(this).is(':checked'))
    {	 var id = this.id;
    	$('.donate__donate-type-list-item').removeClass('display');
      if(id=="radio_vanila"){
      	$('.donate__donate-type-list-item.vanila').addClass('display');
      }
      else if(id=="radio_s2"){
      	
      	$('.donate__donate-type-list-item.server2').addClass('display');
      }
    }
  })
})

$(document).ready(function(){
	$('.donate__donate-type-list-item').click(function(event){
		$('.donate__donate-type-list-item').removeClass('active');
		$(this).toggleClass('active');
		if($(this).hasClass('nickcolor')){
			$('.donate__colorpicker').addClass('active');
			$('body').addClass('lock');
			$('.pickr').show();
		}
		if($(this).hasClass('prefix')){
			$('.donate__colopicker-prefix').addClass('active');
			$('.donate__colorpicker').addClass('active');
			$('body').addClass('lock');
			$('.pickr').show();
		}
		
	})
	$('.donate__colorpicker-btn').click(function(event){
		$('.donate__colopicker-prefix').removeClass('active');
		$('.donate__colorpicker').removeClass('active');
		$('body').removeClass('lock');
		$('.donate__donate-type-list-item.active').removeClass('active');
	})
})



$(document).ready(function(){
	$('.donate__radios-radio').click(function(event){
		$('.donate__radios-radio').attr('checked',false);
		$(this).attr('checked',true);
		if($(this).is("#radio__withnick")){
			//если по нику
			$('.inputnick').addClass('active');
			$('.donate__alert-radios').addClass('active');
			
		}
		else{
			$('.inputnick').removeClass('active');
			$('.donate__alert-radios').removeClass('active');
			//если выбран вариант оплаты с аккаунтом
		}
	})
	 
})


$(document).ready(function(){

	pickr.on('save', (color) => {
		$('.donate__donate-type-list-item.active').children(
			'.donate__donate-type-list-item-curr').css(
			{"backgroundColor":color.toHEXA().toString(3)});
	 
	 	});

})	


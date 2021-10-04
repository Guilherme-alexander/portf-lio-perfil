//JQUERY
$(function(){

const menuMobile = $('.menu-mobile')

//menu Responsivo mobile
$('.fa-bars').on('click',function(){
    $(menuMobile).find('ul').slideToggle();
})

//effect menu scroll top
$('nav a').click(function(){
    var href = $(this).attr('href');
    var offSetTop = $(href).offset().top;

    $('html,body').animate({'scrollTop':offSetTop,})

    return false;
})

//menu filtro portifólio
$(document).on('click','.menu-portfolio p',function(){
    $(this).addClass('selected').siblings().removeClass('selected')
    // console.log(this)
    // console.log(this.id)
    if(this.id == 'frontEnd'){
        $('.box-works-single [value=frontEnd]').css('opacity','1')
        $('.box-works-single [value=designer]').css('opacity','0')
        $('.box-works-single [value=designer]').css('display','none')
        $('.box-works-single [value=frontEnd]').css('display','block')
    }
    if(this.id == 'designer'){
        $('.box-works-single [value=designer]').css('opacity','1')
        $('.box-works-single [value=frontEnd]').css('opacity','0')
        $('.box-works-single [value=designer]').css('display','block')
        $('.box-works-single [value=frontEnd]').css('display','none')
    }
    if(this.id == 'aii'){
        $('.box-works-single [value=designer]').css('opacity','1')
        $('.box-works-single [value=frontEnd]').css('opacity','1')
        $('.box-works-single [value=designer]').css('display','block')
        $('.box-works-single [value=frontEnd]').css('display','block')
        
    }
    if(this.id == 'code'){

    }    
})

})
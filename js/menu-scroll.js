//JQUERY
$(function(){

//effect menu scroll top
$('nav a').click(function(){
    var href = $(this).attr('href');
    var offSetTop = $(href).offset().top;

    $('html,body').animate({'scrollTop':offSetTop,})

    return false;
})

//menu Responsivo mobile
$('.fa-bars').click(function(){
    $('.menu-mobile').find('ul').slideToggle();
})


//menu filtro portifólio
$(document).on('click','.menu-portfolio p',function(){
    $(this).addClass('selected').siblings().removeClass('selected')
    // console.log(this)
    // console.log(this.id)
    if(this.id == 'frontEnd'){
        $('.box-works-single [value=frontEnd]').css('display','block')
        $('.box-works-single [value=designer]').css('display','none')
    }
    if(this.id == 'designer'){
        $('.box-works-single [value=designer]').css('display','block')
        $('.box-works-single [value=frontEnd]').css('display','none')
    }
    if(this.id == 'aii'){
        $('.box-works-single [value=designer]').css('display','block')
        $('.box-works-single [value=frontEnd]').css('display','block')
        
    }
    if(this.id == 'code'){
        // console.log('ok')
    }    
})



})
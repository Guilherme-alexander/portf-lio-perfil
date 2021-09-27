//JQUERY

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


// JAVASCRIPT

// Slider works
var lastIndex = 0;

    var imagem = document.querySelectorAll('.box-work')
    var bullets = document.querySelectorAll('.bullets-single')

    imagem.forEach((item,index)=>{
        bullets[index].addEventListener('click',()=>{
            let lastImage = imagem[lastIndex]
            let actualImage = imagem[index]

            bullets[lastIndex].classList.remove('active-bullets')
            bullets[index].classList.add('active-bullets')

            lastImage.style.opacity = 0;
            actualImage.style.opacity = 1;
            lastIndex = index;
        })
      
});


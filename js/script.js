// JAVASCRIPT

//menu Responsivo mobile
const menuMobile = document.querySelector('.menu-mobile ul');
const btnMobile = document.querySelector('.fa-bars');

btnMobile.addEventListener('click',function(){ 
    if(menuMobile.classList.contains('active')){
        menuMobile.classList.remove('active');
    }else{
        menuMobile.classList.add('active');
    }
})

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

            lastImage.classList.remove('opacity')
            actualImage.classList.add('opacity')
            lastIndex = index;
            
        })
});

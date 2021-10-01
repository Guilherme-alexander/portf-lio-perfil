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

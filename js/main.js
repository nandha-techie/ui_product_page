const mobile__menu = document.querySelector('.mobile__menu');
const icon__toggle = document.querySelector('.icon__toggle');
const menu__bar = document.querySelector('.icon__toggle');
const close = document.querySelector('.close');

icon__toggle.addEventListener('click', function(e){
    mobile__menu.classList.toggle("open");
    menu__bar.classList.toggle("open");
    close.classList.toggle("open");
});
const thumbnails = document.querySelectorAll(".s_sneaker");
const s_slider = document.querySelector(".main__sneaker__slide");
for(let i=0; i<=3; i++){
    thumbnails[i].addEventListener('click', function(){
        s_slider.style.transform = 'translate('+i * -25+'%)';
    });
}

burger = document.querySelector('.burger')
menu = document.querySelector('.menu')
navlist = document.querySelector('.nav-list')


burger.addEventListener('click', ()=>{
    navlist.classList.toggle('v-class-resp')
    menu.classList.toggle('h-nav-resp')
    })
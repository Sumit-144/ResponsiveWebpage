const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const rightnav = document.querySelector('.rightnav');
const navList = document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})
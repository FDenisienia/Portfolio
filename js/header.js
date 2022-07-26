const burgerButton = document.querySelector('.hamburguesa')
const bar1 = document.getElementById('bar1')
const bar2 = document.getElementById('bar2')
const bar3 = document.getElementById('bar3')
const navbarUl = document.getElementById('navbar')



burgerButton.addEventListener("click", navbar = () => {
    bar1.classList.toggle('bar1')
    bar2.classList.toggle('bar2')
    bar3.classList.toggle('bar3')

    navbarUl.classList.toggle('navbar-show')
})
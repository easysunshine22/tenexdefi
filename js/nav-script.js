const hamburger = document.querySelector('.mobile-toggle');
const menuLinks = document.querySelectorAll('.top-nav ul li a')
const mobileNav = document.querySelector('.top-nav');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('show-mobile-nav');
})

menuLinks.forEach(link => {
    link.addEventListener('click', () =>{
        mobileNav.classList.remove('show-mobile-nav');
        hamburger.classList.remove('change');
    })
})

myCloseBar = (closeNav) => {
    closeNav.classList.toggle('change');
}
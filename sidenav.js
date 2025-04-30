// Les variables : -------------------------------------------

const sideNav = document.querySelector('#my-side-nav');
const openNavBtn = document.querySelector('#open-side-nav-btn');
const closeNavBtn = document.querySelector('#close-side-nav-btn');

// Les fonctions : -------------------------------------------

const openNav = () => {
    sideNav.classList.add('active');
}

const closeNav = () => {
    sideNav.classList.remove('active');
}

// Les event listeners : -------------------------------------

openNavBtn.addEventListener('click', () => {
    console.log('OPEN NAV');
    openNav();
})

closeNavBtn.addEventListener('click', () => {
    console.log('CLOSE NAV');
    closeNav();
})
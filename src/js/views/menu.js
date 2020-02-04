export const toggle = (e) => {
    const navbar =  document.querySelector('.navbar')
    const mainMenu = document.querySelector('.main-menu')
    navbar.classList.toggle('navbar--active')
    mainMenu.classList.toggle('main-menu--active')
}
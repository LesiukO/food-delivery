import '../scss/main.scss'

const mainPage = `
        <div class="slider">
            <div class="slide">
                <div class="slide__text">
                    <p class="slide__title">Дом обедов</p>
                    <p class="slide__sub-title">Нам 15 лет</p>
                </div>
                <img class="slide__img" src="/img/slider-bg.jpg" alt="slide">
            </div>
        </div>

        <div class="banners">
            <div class="banners__item banner">
                <img src="/img/banner-1.jpg" alt="" class="banner__img">
                <a href="#" class="banner__btn inline-btn">Перейти в меню &rarr;</a>
            </div>
            <div class="banners__item banner">
                <img src="/img/banner-2.jpg" alt="" class="banner__img">
                <a href="#" class="banner__btn inline-btn">Перейти в меню &rarr;</a>
            </div>
            <div class="banners__item banner">
                <img src="/img/banner-3.jpg" alt="" class="banner__img">
                <a href="#" class="banner__btn inline-btn">Перейти в меню &rarr;</a>
            </div>
            <div class="banners__item banner">
                <img src="/img/banner-4.jpg" alt="" class="banner__img">
                <a href="#" class="banner__btn inline-btn">Перейти в меню &rarr;</a>
            </div>
        </div>

        <div class="top-products page-section">
            <div class="wrapper">
                <ul class="tabs">
                    <li class="tabs__item tabs__item--active">Фуршетные наборы</li>
                    <li class="tabs__item">Топ продаж</li>
                    <li class="tabs__item">Лучшее</li>
                </ul>
                <div class="cards">
                    <div class="card-wrapper">
                        <div class="card">
                            <div class="card__photo">
                                <img class="card__img" src="/img/product-1.jpg" alt="product 1">
                            </div>
                            <div class="card__info">
                                <hr class="card__line">
                                <h3 class="card__title">card title</h3>
                                <hr class="card__line card__line--small">
                                <p class="card__price">2640.00$</p>
                                <div class="card__to-buy">
                                    <span class="card__minus card__to-buy-buttons">-</span>
                                    <span class="card__count">1</span>
                                    <span class="card__plus card__to-buy-buttons">+</span>
                                    <a href="#" class="card__btn-buy">Купить</a>
                                </div>
                            <hr class="card__line">
                            </div>
                        </div>
                    </div>
                    <div class="card-wrapper">
                        <div class="card">
                            <div class="card__photo">
                                <img class="card__img" src="/img/product-1.jpg" alt="product 1">
                            </div>
                            <div class="card__info">
                                <hr class="card__line">
                                <h3 class="card__title">card title</h3>
                                <hr class="card__line card__line--small">
                                <p class="card__price">2640.00$</p>
                                <div class="card__to-buy">
                                    <span class="card__minus card__to-buy-buttons">-</span>
                                    <span class="card__count">1</span>
                                    <span class="card__plus card__to-buy-buttons">+</span>
                                    <a href="#" class="card__btn-buy">Купить</a>
                                </div>
                            <hr class="card__line">
                            </div>
                        </div>
                    </div>
                    <div class="card-wrapper">
                        <div class="card">
                            <div class="card__photo">
                                <img class="card__img" src="/img/product-1.jpg" alt="product 1">
                            </div>
                            <div class="card__info">
                                <hr class="card__line">
                                <h3 class="card__title">card title</h3>
                                <hr class="card__line card__line--small">
                                <p class="card__price">2640.00$</p>
                                <div class="card__to-buy">
                                    <span class="card__minus card__to-buy-buttons">-</span>
                                    <span class="card__count">1</span>
                                    <span class="card__plus card__to-buy-buttons">+</span>
                                    <a href="#" class="card__btn-buy">Купить</a>
                                </div>
                            <hr class="card__line">
                            </div>
                        </div>
                    </div>
                    <div class="card-wrapper">
                        <div class="card">
                            <div class="card__photo">
                                <img class="card__img" src="/img/product-1.jpg" alt="product 1">
                            </div>
                            <div class="card__info">
                                <hr class="card__line">
                                <h3 class="card__title">card title</h3>
                                <hr class="card__line card__line--small">
                                <p class="card__price">2640.00$</p>
                                <div class="card__to-buy">
                                    <span class="card__minus card__to-buy-buttons">-</span>
                                    <span class="card__count">1</span>
                                    <span class="card__plus card__to-buy-buttons">+</span>
                                    <a href="#" class="card__btn-buy">Купить</a>
                                </div>
                            <hr class="card__line">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`

// const cartPage = `
//         <div class="page">
//             <div class="page__header">
//                 <div class="wrapper">
//                     <h2 class="page__title">Корзина покупок</h2>

//                     <div class="breadcrumbs">
//                         <ul class="breadcrumbs__list">
//                             <li class="breadcrumbs__item">
//                                 <a href="#" class="breadcrumbs__link">
//                                     <svg class="breadcrumbs__icon breadcrumbs__icon-home">
//                                         <use xlink:href="img/sprite.svg#icon-home"></use>
//                                     </svg>
//                                 </a>
//                             </li>
//                             <li class="breadcrumbs__item">
//                                 <a href="#" class="breadcrumbs__link">
//                                     Корзина покупок
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>

//                 </div>
//             </div>
//             <div class="wrapper">

//             </div>
//         </div>
// `

// const loginPage = `
//         <div class="page">
//             <div class="page__header">
//                 <div class="wrapper">
//                     <h2 class="page__title">Войти</h2>

//                     <div class="breadcrumbs">
//                         <ul class="breadcrumbs__list">
//                             <li class="breadcrumbs__item">
//                                 <a href="#" class="breadcrumbs__link">
//                                     <svg class="breadcrumbs__icon breadcrumbs__icon-home">
//                                         <use xlink:href="img/sprite.svg#icon-home"></use>
//                                     </svg>
//                                 </a>
//                             </li>
//                             <li class="breadcrumbs__item">
//                                 <a href="#" class="breadcrumbs__link">
//                                     Войти
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>

//                 </div>
//             </div>
//             <div class="wrapper">

//             </div>
//         </div>
// `

// const signInPage = `
//         <div class="page">
//             <div class="page__header">
//                 <div class="wrapper">
//                     <h2 class="page__title">Регистрация</h2>

//                     <div class="breadcrumbs">
//                         <ul class="breadcrumbs__list">
//                             <li class="breadcrumbs__item">
//                                 <a href="#" class="breadcrumbs__link">
//                                     <svg class="breadcrumbs__icon breadcrumbs__icon-home">
//                                         <use xlink:href="img/sprite.svg#icon-home"></use>
//                                     </svg>
//                                 </a>
//                             </li>
//                             <li class="breadcrumbs__item">
//                                 <a href="#" class="breadcrumbs__link">
//                                     Регистрация
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>

//                 </div>
//             </div>
//             <div class="wrapper">

//             </div>
//         </div>
// `

const page404 = `
        <div class="page">
            <div class="page__header">
                <div class="wrapper">
                    <h2 class="page__title">Страница не найдена</h2>

                    <div class="breadcrumbs">
                        <ul class="breadcrumbs__list">
                            <li class="breadcrumbs__item">
                                <a href="#" class="breadcrumbs__link">
                                    <svg class="breadcrumbs__icon breadcrumbs__icon-home">
                                        <use xlink:href="img/sprite.svg#icon-home"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="breadcrumbs__item">
                                <a href="#" class="breadcrumbs__link">
                                    
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div class="wrapper">
                <div class="cards">
                
                </div>
            </div>
        </div>
`

const elements = {
    cart : document.getElementById('cart'),
    logo : document.getElementById('logo'),
    login : document.getElementById('login'),
    signIn : document.getElementById('sign-in'),
    content : document.getElementById('content'),
    barSearch: document.querySelector('.bar__search'),
    searchInput: document.querySelector('.search__input'),
}

// Global state fo the app
// ***************************
const state = {}


// **********************************************************
// *********************    API calls    ********************
// **********************************************************







// // ***************************************************************
// Search view

const getInput = () => elements.searchInput.value

const clearInput = () => {
    elements.searchInput.value = ''
}

const clearContent = () => {

}

const renderRecipe = recipe => {
    const cards = document.querySelector('.cards ')
    const markup = `
                                <div class="card-wrapper">
                                    <div href="#${recipe.recipe_id}" class="card">
                                        <div class="card__photo">
                                            <img class="card__img" src="${recipe.image_url}" alt="${recipe.image_url}">
                                        </div>
                                        <div class="card__info">
                                            <hr class="card__line">
                                            <h3 class="card__title">${recipe.title}</h3>
                                            <hr class="card__line card__line--small">
                                            <p class="card__price">2640.00$</p>
                                            <div class="card__to-buy">
                                                <span class="card__minus card__to-buy-buttons">-</span>
                                                <span class="card__count">1</span>
                                                <span class="card__plus card__to-buy-buttons">+</span>
                                                <a href="#" class="card__btn-buy">Купить</a>
                                            </div>
                                        <hr class="card__line">
                                        </div>
                                    </div>
                                </div>
    `
    cards.insertAdjacentHTML('beforeend', markup)
}

const renderResults = recipes => {
    recipes.forEach(renderRecipe)
}
// ***************************************************************



// **************************
// Search model 

import axios from 'axios'
class Search {
    constructor(query) {
        this.query = query
    }

    async getResults(query) {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.result = res.data.recipes
        }
        catch (error) {
            alert(error)
        }
    }
}



// *************************************
// Search controller
const controlSearch = async (query) => {
    // 1) Define query
    // let query = 'pizza'
    if (!query) {
        const query = getInput()
    }

    if (query) {

        // 2) New search object and add to state
        state.search = new Search(query)

        // 3) Prepare UI for results
        clearInput()


        // 4) Search for recipes
        await state.search.getResults()

        // 5) Render results on UI
        renderResults(state.search.result)
    }
}
// // **************************************


// elements.barSearch.addEventListener('submit', e => {
//     e.preventDefault()
//     controlSearch()
// })


// *********************    ROUTER    ***********************
const routes = [
    {
        path: '',
        title: 'Главная'
    },
    {
        path: 'login',
        title: 'Войти'
    },
    {
        path: 'sign-in',
        title: 'Регистрация'
    },
    {
        path: 'cart',
        title: 'Корзина'
    },
    {
        path: 'first-menu',
        title: 'Европейское меню'
    },
    {
        path: 'second-menu',
        title: 'Американское меню'
    },
    {
        path: 'delivery',
        title: 'Доставка обедов'
    },
    {
        path: 'coffe',
        title: 'Кофе брейк'
    },
    {
        path: 'contacts',
        title: 'Контакты'
    },
    {
        path: 'search',
        title: 'Поиск'
    },
]

class Router {
    constructor() {
        this.content = elements.content
        window.addEventListener("hashchange", e => this.onRouteChange(e))
    }

    onRouteChange(e) {
        this.updateContent()
        const hashLocation = window.location.hash.substring(1)
        const routeIndex = this.routes.findIndex(route => route.path === hashLocation)

        controlSearch(this.defineQuery())
    }

    getCurrentPage () {
        this.routes = routes
        const hashLocation = window.location.hash.substring(1)
        const routeIndex = this.routes.findIndex(route => route.path === hashLocation)

        if (routeIndex === -1) {
            return page404
        }

        const currentPage = `
            <div class="page">
                <div class="page__header">
                    <div class="wrapper">
                        <h2 class="page__title">${this.routes[routeIndex].title}</h2>

                        <div class="breadcrumbs">
                            <ul class="breadcrumbs__list">
                                <li class="breadcrumbs__item">
                                    <a href="#" class="breadcrumbs__link">
                                        <svg class="breadcrumbs__icon breadcrumbs__icon-home">
                                            <use xlink:href="img/sprite.svg#icon-home"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li class="breadcrumbs__item">
                                    <a href="#${this.routes[routeIndex].path}" class="breadcrumbs__link">
                                        ${this.routes[routeIndex].title}
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div class="wrapper">
                    <div class="cards">
                    
                    </div>
                </div>
            </div>
            `
            if (routeIndex === 0) {
                return mainPage
            }
            return currentPage
    }

    updateContent() {
        const currentContent = this.getCurrentPage()
        this.content.innerHTML = currentContent
    }

    defineQuery() {
        let query
        const hashLocation = window.location.hash.substring(1)
        const routeIndex = this.routes.findIndex(route => route.path === hashLocation)

        query = getInput()

        switch (this.routes[routeIndex].path) {
            case 'first-menu':  
                query = 'pizza'    
                break
        
            case 'second-menu':
                query = 'pasta'
                break
        
            default:
                query = getInput()
                break
        }
        return query

    }
}

new Router()


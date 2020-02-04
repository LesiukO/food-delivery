import '../scss/main.scss'

import Search from './models/Search'
import List from './models/List'

import * as searchView from './views/searchView'
import * as pageView from './views/pageView'
import * as cardView from './views/cardView'
import * as listView from './views/listView'
import * as modalView from './views/modalView'
import * as messageView from './views/messageView'
import * as tabs from './views/tabs'
import * as menu from './views/menu'

import { elements } from './views/base'



const state = {}


const controlSearch = async (query = searchView.getInput()) => {
    if (query) {
        state.search = new Search(query)

        searchView.clearInput()
        searchView.clearContent()

        await state.search.getResults()
    
        searchView.renderResults(state.search.result)
    }
}

elements.barSearch.addEventListener('submit', e => {
    e.preventDefault()
    window.location = `#${searchView.getInput()}`
})

document.addEventListener('click', e => {
    if (e.target.matches('.page__pagination-btn, .page__pagination-btn *')) {
        const btn = e.target.closest('.page__pagination-btn')
        if (btn) {
            const goToPage = parseInt(btn.dataset.goto, 10)
            searchView.clearContent()
            searchView.renderResults(state.search.result, goToPage)
        }
    }
})



document.addEventListener('click', e => {
    if (e.target.matches('.card__to-buy, .card__to-buy *')) {
        const cardId = cardView.getId(e)
        const card = cardView.getCardById(cardId)

        if (e.target.matches('.card__plus, .card__plus *')) {
            cardView.increaseCount(cardId)
        } 
        
        else if (e.target.matches('.card__minus, .card__minus *')) {
            cardView.decreaseCount(cardId)
        } 
        
        else if (e.target.matches('.card__btn-buy, .card__btn-buy *')) {
            if (!state.list) state.list = new List()
            e.preventDefault()

            if (state.list.items.findIndex( item => item.oldId === cardId) === -1) {
                state.list.addItem(card)
            } else {
                const repeatItem = state.list.items.find( item => item.oldId === cardId)
                state.list.updateCount(repeatItem.id, repeatItem.count + card.count)
            }
            state.list.calcTotalSum()
            listView.showTotalSum(state.list.totalSum)
            messageView.showMessage(e)
        }

    }
})

const handleShopingEvents = () => {
    if (document.querySelector('.shoping-list')) {
        const shoping = document.querySelector('.shoping-list')

        shoping.addEventListener('click', e => {

            if (e.target.matches('.shoping-list__item-count-btn, .shoping-list__item-count-btn *')) {
                const item = e.target.parentElement.parentElement.parentElement  
                const itemId = item.getAttribute('data-itemid')  
                e.preventDefault()

                if (e.target.matches('.card__btn-delete, .card__btn-delete *')) {
                    state.list.deleteItem(itemId)
                    listView.deleteItem(itemId)
                } else if (e.target.matches('.shoping-list__item-plus, .shoping-list__item-plus *')) {
                    state.list.increaseCount(itemId)
                    listView.increaseCount(itemId)
                } else if (e.target.matches('.shoping-list__item-minus, .shoping-list__item-minus *')) {
                    state.list.decreaseCount(itemId)
                    listView.decreaseCount(itemId)
                }
                state.list.calcTotalSum()
                listView.showTotalSum(state.list.totalSum)
            }

        })
    }
}

document.addEventListener('click', e => {
    if (e.target.matches('.card__img, .card__img *')) {
        modalView.showCardPopup(e)
    }

    if (e.target.matches('.modal__close, .modal__close *') || e.target.matches('.modal')) {
        modalView.hideCardPopup(e)
    }
})


document.addEventListener('click', e => {
    if (e.target.matches('.tabs__item, .tabs__item *')) {
        tabs.openContent(e)
        tabs.highlightTab(e)
    }
})

document.addEventListener('click', e => {
    if (e.target.matches('.search__btn--mobile, .search__btn--mobile *')) {
        menu.toggle()
    }
})


//*******TRY */
// const modal = new Modal()
    // state.modal = new Modal(messageView.getDataFromCard(e))
    // messageView.showMessage()






    // messageView.renderModal(function () {
    //     setTimeout(function () {
    //         messageView.openModal(function () {
    //             setTimeout(function () {
    //                 messageView.closeModal(function () {
    //                     setTimeout(function () {
    //                         messageView.deleteModal()
    //                     }, 300)
    //                 })
    //             }, 3000)
    //         })
    //     }, 300)
    // })

const routes = [
    {
        path: '',
        title: 'Главная',
        content: '',
        dish: false
    },
    {
        path: 'login',
        title: 'Войти',
        content: pageView.login,
        dish: false
    },
    {
        path: 'sign-in',
        title: 'Регистрация',
        content: pageView.singIn,
        dish: false
    },
    {
        path: 'cart',
        title: 'Корзина',
        content: pageView.cart,
        dish: false
    },
    {
        path: 'pizza',
        title: 'pizza',
        content: pageView.cards,
        dish: true
    },
    {
        path: 'pasta',
        title: 'pasta',
        content: pageView.cards,
        dish: true
    },
    {
        path: 'steak',
        title: 'steak',
        content: pageView.cards,
        dish: true
    },
    {
        path: 'hamburger',
        title: 'hamburger',
        content: pageView.cards,
        dish: true
    },
    {
        path: 'seafood',
        title: 'seafood',
        content: pageView.cards,
        dish: true
    },
    {
        path: 'chicken',
        title: 'chicken',
        content: pageView.cards,
        dish: true
    },
    {
        path: 'salad',
        title: 'salad',
        content: pageView.cards,
        dish: true
    },
    {
        path: 'search',
        title: 'search',
        content: pageView.cards,
        dish: false
    },
    {
        path: 'set-lunch',
        title: 'set-lunch',
        content: pageView.cards,
        dish: true
    },
]

class Router {
    constructor() {
        this.content = elements.content
        window.addEventListener("hashchange", e => this.onRouteChange(e))
    }

    onRouteChange(e) {
        const hashLocation = window.location.hash.substring(1)
        this.updatePage(this.getCurrentPage())
    }

    updatePage(page) {
        this.content.innerHTML = page
        this.showContent()
    }

    getCurrentPage () {
        this.routes = routes
        const hashLocation = window.location.hash.substring(1)
        const routeIndex = this.routes.findIndex(route => route.path === hashLocation)
        const currentRoute = this.routes[routeIndex]
        let currentPage

        if (this.routes[routeIndex]) {
            if (this.routes[routeIndex].path === '') {
                currentPage = pageView.mainPage
            } else {
                currentPage = pageView.renderTemplatePage(currentRoute.title, currentRoute.path, currentRoute.content)
            }
        } else {
            currentPage = pageView.renderTemplatePage('search', 'search', pageView.cards)
        }

        return currentPage
    }

    showContent() {
        const hashLocation = window.location.hash.substring(1)
        const routeIndex = this.routes.findIndex(route => route.path === hashLocation)
        const currentRoute = this.routes[routeIndex]

        if (currentRoute && currentRoute.dish) {
            controlSearch(currentRoute.path)
        } else if (currentRoute && currentRoute.path === 'cart') {
            handleShopingEvents()
            if (state.list) {
                listView.renderItems(state.list.items)
                listView.showTotalSum(state.list.totalSum)
            }
        } else {
            controlSearch()
        }

    }
}

new Router()
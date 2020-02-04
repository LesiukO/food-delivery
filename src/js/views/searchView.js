import { elements } from './base'

export const getInput = () => elements.searchInput.value

export const clearInput = () => {
    elements.searchInput.value = ''
}

export const clearContent = () => {
    const cards = document.querySelector('.cards')
    if (cards) {
        cards.innerHTML = ''
    }
}

const randomPrice = () => {
    const Prices = [
        150.00, 200.50, 220.10, 120.20, 340.40, 230.30, 430.20, 230.10, 120.40, 340.50, 432.40, 123.40, 987.40, 450.40, 453.20, 
        213.50, 234.50, 345.50, 120.50, 345.50, 324.00, 123.00, 345.00, 435.00, 123.00, 453.00, 234.00, 546.00, 345.70, 234.10,
    ]

    const random = () => {
        return Math.floor(Math.random() * 29)
    }
    return parseFloat(Prices[random()])
}





export const renderRecipe = recipe => {
    const cards = document.querySelector('.cards ')
    const markup = `
        <div class="card-wrapper">
            <div data-id="${recipe.recipe_id}" class="card">
                <div class="card__photo">
                    <img class="card__img" src="${recipe.image_url}" alt="${recipe.image_url}">
                </div>
                <div class="card__info">
                    <hr class="card__line">
                    <div class="card__title">${recipe.title}</div>
                    <hr class="card__line card__line--small">
                    <p class="card__price">${randomPrice()}$</p>
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



const createButton = (page, type) => {
    let button
    if (type === 'prev') {
        button = `
        <button class="btn-inline page__pagination-btn results__btn--${type}" data-goto=${page - 1}>
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-left"></use>
            </svg>
            <span>Page ${page - 1}</span>
        </button>
    `
    } else {
        button = `
        <button class="btn-inline page__pagination-btn results__btn--${type}" data-goto=${page + 1}>
            <span>Page ${page + 1}</span>
            <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-right"></use>
            </svg>
        </button>
    `
    }
    return button
}

const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage)
    const searchResPages = document.querySelector('.page__pagination')
    searchResPages.innerHTML = ''

    let button
    if (page === 1 && pages > 1) {
        button = createButton(page, 'next')

    } else if (page < pages) {
        button = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `
    } else if (page === pages && pages > 1) {
        button = createButton(page, 'prev')
    }

    searchResPages.insertAdjacentHTML('afterbegin', button)
}

export const renderResults = (recipes, page = 1, resPerPage = 8 ) => {
    const start = (page - 1) * resPerPage 
    const end = page * resPerPage 

    recipes.slice(start, end).forEach(renderRecipe)

    renderButtons(page, recipes.length, resPerPage)
}

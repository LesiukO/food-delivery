import { elements } from './base'

export const getInput = () => elements.searchInput.value

export const clearInput = () => {
    elements.searchInput.value = ''
}

export const clearContent = () => {
    const cards = document.getElementById('cards')
    if (cards) {
        cards.innerHTML = ''
    }
}

const randomPrice = () => {
    const Prices = [
        150.00, 200.50, 220.10, 120.25, 340.40, 230.30, 430.21, 230.10, 120.40, 340.50, 432.45, 123.45, 987.45, 450.45, 453.21, 
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
                    <h3 class="card__title">${recipe.title}</h3>
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

export const renderResults = recipes => {
    recipes.forEach(renderRecipe)
}
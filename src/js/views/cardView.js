import { elements } from './base'

export const increaseCount = id => {
    const card = document.querySelector(`[data-id="${id}"]`)
    const cardCount = card.querySelector('.card__count')
    let count = parseInt(cardCount.textContent)
    count++
    cardCount.textContent = count
}

export const decreaseCount = id => {
    const card = document.querySelector(`[data-id="${id}"]`)
    const cardCount = card.querySelector('.card__count')
    let count = parseInt(cardCount.textContent)
    if (count > 1) {
        count--
        cardCount.textContent = count
    }
}

export const getCardById = id => {
    const card = document.querySelector(`[data-id="${id}"]`)
    const cardCount = card.querySelector('.card__count')
    let count = parseInt(cardCount.textContent)
    const img = card.querySelector('.card__img').getAttribute('src')
    const title = card.querySelector('.card__title').textContent
    const price = parseInt(card.querySelector('.card__price').textContent)

    return {
        id,
        count,
        img,
        title,
        price,
    }
}

export const getId = e => e.target.parentElement.parentElement.parentElement.getAttribute('data-id')
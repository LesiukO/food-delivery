import { elements } from './base'

export const renderItem = item => {
    const markup = `
        <tr class="shoping-list__item" data-itemid="${item.id}">
            <td class="shoping-list__item-photo">
                <img class="shoping-list__item-img" src="${item.img}" alt="">
            </td>
            <td class="shoping-list__item-name">${item.title}</td>
            <td class="shoping-list__item-num">
                <div class="shoping-list__item-count-btn">
                    <span class="shoping-list__item-minus shoping-list__item-count-btn-buttons">-</span>
                    <span class="shoping-list__item-count">${item.count}</span>
                    <span class="shoping-list__item-plus shoping-list__item-count-btn-buttons">+</span>
                    <a href="#" class="card__btn-delete">X</a>
                </div>
            </td>
            <td class="shoping-list__item-price">${item.price}$</td>
            <td class="shoping-list__item-sum">${calcSum(item.count, item.price)}$</td>
        </tr>
    `
    const shoping = document.querySelector('.shoping-list')
    shoping.insertAdjacentHTML('beforeend', markup)
}

export const renderItems = items => {
    items.forEach( item => renderItem(item) )
}

export const calcTotalSum = () => {
    const items = document.querySelectorAll('.shoping-list__item')
    let totalSum = 0
    items.forEach( item => {
        let sum = parseFloat(item.querySelector('.shoping-list__item-sum').textContent)
        totalSum += sum
    })
    const total = document.querySelector('.shoping-list__total')
    const totalHeader = document.querySelector('.cart__text')
    total.textContent = `Total: ${totalSum}$`
    totalHeader.textContent = `(total sum: ${totalSum}$)`
}

export const calcSum = (count, price) => {
    return count * price
}
export const updateSum = (count, price) => {
    return count * price
}

export const deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`)
    item.parentElement.removeChild(item)
}

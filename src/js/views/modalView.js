

const modalCard = (img, title, price, count) => `
    <div class="modal__inner">
        <div class="wrapper">
            <div class="modal__content page-section">
                <span class="modal__close"></span>
                <div class="modal__photo">
                    <img class="modal__img" src="${img}" alt="sdfsd">
                </div>
                <div class="modal__info">
                    <h3 class="modal__title">${title}</h3>
                    <p class="modal__price">${price}$</p>
                    <hr>
                </div>
                <br>
            </div>
            <div class="modal__to-buy">
                <span class="modal__minus modal__to-buy-buttons">-</span>
                <span class="modal__count">${count}</span>
                <span class="modal__plus card__to-buy-buttons">+</span>
                <a href="#" class="modal__btn-buy">Add to Cart</a>
            </div>
        </div>
    </div>
`

export const showCardPopup = e => {
    const modal = document.createElement('div')

    createModal(modal, e)

    setTimeout(function () {
        openModal(modal)
    }, 500)
}

export const hideCardPopup = e => {
    const modal = e.target.closest('.modal')

    closeModal(modal)

    setTimeout(function () {
        deleteModal(modal)
    }, 500)
}


export const createModal = (modal, e) => {
    const card = e.target.closest('.card')
    const cardId = card.getAttribute('data-id')
    const cardTitle = card.querySelector('.card__title').textContent
    const cardImg = card.querySelector('.card__img').getAttribute('src')
    const cardCount = parseFloat(card.querySelector('.card__count').textContent)
    const cardPrice = parseFloat(card.querySelector('.card__price').textContent) * cardCount
    modal.classList.add('modal')
    document.querySelector('body').appendChild(modal)
    modal.innerHTML = modalCard(cardImg, cardTitle, cardPrice, cardCount)
}

export const openModal = (modal) => {
    modal.classList.add('modal--visible')
}

export const closeModal = (modal) => {
    modal.classList.remove('modal--visible')
}

export const deleteModal = (modal) => {
    modal.remove()
}


// // console.log(cardId, cardTitle, cardImg, cardPrice)

// if (type === 'typeMessage') {
//     closeModal(e)
// }



// export const showMessage = (e) => {
//     createModal('typeMessage', e)
// }


    //     modal.innerHTML = modalMessage(cardImg, cardTitle)
    //     modal.classList.add('modal--message')
const modalMessage = (img, title) => `
        <div class="modal__inner modal__inner--message">
            <div class="wrapper">
                <div class="modal__content page-section">
                    <span class="modal__close"></span>
                    <div class="modal__photo">
                        <img class="modal__img" src="${img}" alt="sdfsd">
                    </div>
                    <div class="modal__info">
                        <h3 class="modal__title">${title}</h3>
                        <p class="modal__description">${title} <br> <span class="modal__description--green">added to cart!</span></p>
                    </div>
                </div>
                <a href="#cart" class="modal__go-to-cart">Go to cart</a>
            </div>
        </div>
`

export const createModal = (e) => {
    const card = e.target.closest('.card')
    const cardId = card.getAttribute('data-id')
    const cardTitle = card.querySelector('.card__title').textContent
    const cardImg = card.querySelector('.card__img').getAttribute('src')
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.classList.add('modal--message')
    document.querySelector('body').appendChild(modal)
    modal.innerHTML = modalMessage(cardImg, cardTitle)
}

export const openModal = () => {
    const modal = document.querySelector('.modal')
    setTimeout(function () {
        modal.classList.add('modal--visible')
    }, 200)
}

export const closeModal = () => {
    const modal = document.querySelector('.modal')
    setTimeout(function () {
        modal.classList.remove('modal--visible')
    }, 3000) 
}

export const deleteModal = () => {
    setTimeout(function () {
        const modal = document.querySelector('.modal')
    modal.remove()
    }, 3100)
}

export const showMessage = async e => {
    await createModal(e)
    await openModal()
    await closeModal()
    deleteModal()
}
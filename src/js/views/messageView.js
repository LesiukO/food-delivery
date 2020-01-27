

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
// export default class Modal {
//     constructor (card) {
//         this.img = card.img
//         this.title = card.title
//         this.oldId = card.Id
//         this.id = uniqid()
//         this.count = card.count
//         this.price = card.price
//     }


//     addItem(card) {
//         const item = {
//             id: uniqid(),
//             oldId: card.id,
//             count: card.count,
//             img: card.img,
//             title: card.title,
//             price: card.price
//         }
//         this.items.push(item)
//         return item
//     }
// // -------------------------------------------------------

// export const getDataFromCard = (e) => {
//     const card = e.target.closest('.card')
//     const cardId = card.getAttribute('data-id')
//     const cardTitle = card.querySelector('.card__title').textContent
//     const cardImg = card.querySelector('.card__img').getAttribute('src')
//     const cardPrice = parseInt(card.querySelector('.card__price').textContent)
//     const cardCount = parseInt(card.querySelector('.card__count').textContent)

//     return {
//         id: cardId,
//         title: cardTitle,
//         img: cardImg,
//         price: cardPrice,
//         count: cardCount
//     }
// }

// const createModal = () => {
//     const modal = document.createElement('div')
//     modal.classList.add('modal')
// }

// export const renderModal = () => {
//     document.querySelector('body').appendChild(modal)
//     modal.innerHTML = modalMessage(cardImg, cardTitle)
// }

// export const openModal = () => {
//     setTimeout(function () {
//         modal.classList.add('modal--visible')
//     }, 200)
// }

// const timer = 5

// export const closeModal = () => {
//     timer--
//     console.log(timer)
//     setTimeout(function () {
//         if (timer >= 1 ) {
//             closeModal()
//         } else {
//             modal.classList.remove('modal--visible')
//         }
//     }, 1000)
//     // modal.classList.remove('modal--visible')
// }

// export const deleteModal = () => {
//     setTimeout(function () {
//         modal.remove()
//     }, 300)
// }

// export const async showMessage = () => {
//     this.createModal()
//     this.renderModal()
//     await this.openModal()
//     await this.closeModal()
//     await this.deleteModal()
// }

// // -------------------------------------------------------

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
    modal.classList.add('modal--visible')
    

}

export const closeModal = () => {
    const modal = document.querySelector('.modal')
    const timer = 5
    setTimeout(function () {
        modal.classList.remove('modal--visible')
        console.log(modal)
    }, 3000) 
}
const modal = document.querySelector('.modal')
let timer = 5

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
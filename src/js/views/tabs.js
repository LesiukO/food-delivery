const tabs = []

tabs[0] = `
<div class="card-wrapper">
                <div data-id="46956" class="card">
                    <div class="card__photo">
                        <img class="card__img" src="/img/product-1.jpg" alt="product 1">
                    </div>
                    <div class="card__info">
                        <hr class="card__line">
                        <a href="#pizza" class="card__title">Deep Dish Fruit Pizza</a>
                        <hr class="card__line card__line--small">
                    <hr class="card__line">
                    </div>
                </div>
            </div>
            <div class="card-wrapper">
                <div class="card">
                    <div class="card__photo">
                        <img class="card__img" src="/img/product-2.jpg" alt="product 1">
                    </div>
                    <div class="card__info">
                        <hr class="card__line">
                        <a href="#pasta" class="card__title">Lasagna Soup</a>
                        <hr class="card__line card__line--small">
                    <hr class="card__line">
                    </div>
                </div>
            </div>
            <div class="card-wrapper">
                <div class="card">
                    <div class="card__photo">
                        <img class="card__img" src="/img/product-3.jpg" alt="product 1">
                    </div>
                    <div class="card__info">
                        <hr class="card__line">
                        <a href="#steak" class="card__title">Beef with Snow Peas</a>
                        <hr class="card__line card__line--small">
                    <hr class="card__line">
                    </div>
                </div>
            </div>
            <div class="card-wrapper">
                <div class="card">
                    <div class="card__photo">
                        <img class="card__img" src="/img/product-4.jpg" alt="product 4">
                    </div>
                    <div class="card__info">
                        <hr class="card__line">
                        <a href="#hamburger" class="card__title">Cheddar Jalapeno Chicken Burgers with Guacamole</a>
                        <hr class="card__line card__line--small">
                    <hr class="card__line">
                    </div>
                </div>
            </div>
`

tabs[1] = `
<div class="card-wrapper">
                <div data-id="46956" class="card">
                    <div class="card__photo">
                        <img class="card__img" src="/img/top-1.jpg" alt="product 1">
                    </div>
                    <div class="card__info">
                        <hr class="card__line">
                        <a href="#pizza" class="card__title">Sweet Potato Kale Pizza with Rosemary & Red Onion</a>
                        <hr class="card__line card__line--small">
                    <hr class="card__line">
                    </div>
                </div>
            </div>
            <div class="card-wrapper">
                <div class="card">
                    <div class="card__photo">
                        <img class="card__img" src="/img/top-2.jpg" alt="product 1">
                    </div>
                    <div class="card__info">
                        <hr class="card__line">
                        <a href="#pasta" class="card__title">Seafood Pasta</a>
                        <hr class="card__line card__line--small">
                    <hr class="card__line">
                    </div>
                </div>
            </div>
            <div class="card-wrapper">
                <div class="card">
                    <div class="card__photo">
                        <img class="card__img" src="/img/top-3.jpg" alt="product 1">
                    </div>
                    <div class="card__info">
                        <hr class="card__line">
                        <a href="#steak" class="card__title">The Marlboro Man Sandwich</a>
                        <hr class="card__line card__line--small">
                    <hr class="card__line">
                    </div>
                </div>
            </div>
            <div class="card-wrapper">
                <div class="card">
                    <div class="card__photo">
                        <img class="card__img" src="/img/top-4.jpg" alt="product 4">
                    </div>
                    <div class="card__info">
                        <hr class="card__line">
                        <a href="#hamburger" class="card__title">Bacon Wrapped Jalapeno Popper Burgers</a>
                        <hr class="card__line card__line--small">
                    <hr class="card__line">
                    </div>
                </div>
            </div>
`
tabs[2] = `
<div class="card-wrapper">
                <div data-id="46956" class="card">
                    <div class="card__photo">
                        <img class="card__img" src="/img/best-1.jpg" alt="product 1">
                    </div>
                    <div class="card__info">
                        <hr class="card__line">
                        <a href="#pizza" class="card__title">Pizza Quesadillas (aka Pizzadillas)</a>
                        <hr class="card__line card__line--small">
                    <hr class="card__line">
                    </div>
                </div>
            </div>
            <div class="card-wrapper">
                <div class="card">
                    <div class="card__photo">
                        <img class="card__img" src="/img/best-2.jpg" alt="product 1">
                    </div>
                    <div class="card__info">
                        <hr class="card__line">
                        <a href="#pasta" class="card__title">Bowtie Chicken Alfredo</a>
                        <hr class="card__line card__line--small">
                    <hr class="card__line">
                    </div>
                </div>
            </div>
            <div class="card-wrapper">
                <div class="card">
                    <div class="card__photo">
                        <img class="card__img" src="/img/best-3.jpg" alt="product 1">
                    </div>
                    <div class="card__info">
                        <hr class="card__line">
                        <a href="#steak" class="card__title">Fried Round Steak</a>
                        <hr class="card__line card__line--small">
                    <hr class="card__line">
                    </div>
                </div>
            </div>
            <div class="card-wrapper">
                <div class="card">
                    <div class="card__photo">
                        <img class="card__img" src="/img/best-4.jpg" alt="product 4">
                    </div>
                    <div class="card__info">
                        <hr class="card__line">
                        <a href="#hamburger" class="card__title">Portobello Mushroom Burger</a>
                        <hr class="card__line card__line--small">
                    <hr class="card__line">
                    </div>
                </div>
            </div>
`


export const openContent = (e) => {
    const tabsContent = document.querySelector('.tabs__content')
    const tab = e.target.closest('.tabs__item')
    const tabNum = tab.getAttribute('data-tab-num')

    tabsContent.innerHTML = tabs[tabNum]
}

export const highlightTab = (e) => {
    const tabItems = document.querySelectorAll('.tabs__item')
    const tab = e.target.closest('.tabs__item')
    const tabNum = tab.getAttribute('data-tab-num')

    tabItems.forEach(el => {
        el.classList.remove('tabs__item--active')
    })
    tabItems[tabNum].classList.add('tabs__item--active')
}
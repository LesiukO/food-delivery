import { elements } from './base'

export const mainPage = `
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

export const renderTemplatePage = (pageTitle, pagePath, pageContent) => {
    return `
        <div class="page">
            <div class="page__header">
                <div class="wrapper">
                    <h2 class="page__title">${pageTitle}</h2>

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
                                <a href="#${pagePath}" class="breadcrumbs__link">
                                    ${pageTitle}
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div class="wrapper">
                ${pageContent}
            </div>
        </div>
    `
}

export const login = `
    <p>Enter to your profile</p>
`

export const singIn = `
    <p>Create new profile</p>
`

export const cards = `
    <div class="cards"></div>
`

export const cart = `
    <table class="shoping-list" cellspacing="1">
        <tr class="shoping-list__headline">
            <th>Изображение</th>
            <th>Название</th>
            <th>Количество</th>
            <th>Цена за шт.</th>
            <th>Всего</th>
        </tr>
    </table>
    <div class="shoping-list__total">Total sum: 1000 $</div>
`

import { elements } from './base'

export const mainPage = `
<div class="slider">
    <div class="slide">
        <div class="slide__text">
            <p class="slide__title">Food delivery</p>
        </div>
        <img class="slide__img" src="/img/slider-bg.jpg" alt="slide">
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
            <hr>
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
    <div class="page__pagination"></div>
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
    <div class="shoping-list__total">Total sum: 0 $</div>
`


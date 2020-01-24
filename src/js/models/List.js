import uniqid from 'uniqid'

export default class List {
    constructor () {
        this.items = []
        this.totalSum = 0
    }

    addItem(card) {
        const item = {
            id: uniqid(),
            oldId: card.id,
            count: card.count,
            img: card.img,
            title: card.title,
            price: card.price
        }
        this.items.push(item)
        return item
    }

    calcTotalSum() {
        this.totalSum = 0
        this.items.forEach(item => {
            this.totalSum += item.price * item.count
        })
    }

    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id)
        this.items.splice(index, 1)
    }

    updateCount(id, newCount) {
        this.items.find(el => el.id === id).count = newCount
    }

    increaseCount(id) {
        this.items.find(el => el.id === id).count++
    }

    decreaseCount(id) {
        if (this.items.find(el => el.id === id).count > 1) {
            this.items.find(el => el.id === id).count--
        }
    }
}
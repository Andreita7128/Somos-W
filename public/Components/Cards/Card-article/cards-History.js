class CardHistory extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="/public/Components/Cards/Card-article/cardArticle.css">
        `
    }

}

customElements.define('card-history', CardHistory)
export default CardHistory
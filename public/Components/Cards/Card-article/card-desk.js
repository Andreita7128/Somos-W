class CardDesk extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
    <link rel="stylesheet" href="/public/Components/Cards/Card-article/cardArticle.css">
    <article class="card_horizontal_container">
            <img class="card_horizontal_img" src="./public/Components/Cards/Card-article/placeholder.png" alt="">
            <section class="card_horizontal_body">
                <h3>Historias de grandeza que marcan la diferencia </h3>
                <p class="body_1">Aprende de educación financiera y explora mas sobre la Comunidad W, mediante historias
                    que dejan
                    huella.</p>
                <button class="btn btn_medium_active">
                    conoce más
                    <i class="bi bi-arrow-right"></i>
                </button>
            </section>
        </article>
    `
    }

}

customElements.define('w-card-desk', CardDesk)
export default CardDesk
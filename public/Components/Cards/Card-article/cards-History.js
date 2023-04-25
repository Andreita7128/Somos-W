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
        <article class="w_card_history">
            <section class="card_history_title">
                <img class="perfil-usuario" src="/public/Components/NavBar/images/logo.png" alt="">
                <h4>Aurora Chavez</h4>
            </section>
            <section>
                <div>
                    <img class="image_history" src="/public/Components/Cards/Card-article/placeholder.png" alt="">
                </div>
            </section>
            <section class="w_card_body">
                <h1>Microcrédito una buena opción</h1>
                <p class="body_1" style="margin-top: 16px;">Al principio no sabíamos que era un microcrédito pero luego
                    nos enteramos que era la
                    mejor opción gracias a que... descubrimos que un microcrédito era la mejor opción para financiar
                    nuestro proyecto de emprendimiento debido a su flexibilidad en los requisitos de crédito, montos
                    adecuados, tasas de interés razonables, plazos de pago flexibles, capacitación empresarial y enfoque
                    en la inclusión financiera. Obtener un microcrédito nos permitió superar barreras financieras y
                    materializar nuestro proyecto con éxito.</p>
            </section>
            <section id="container_reacts">
                <div id="container_count_reacts">
                    <div class="react_number">
                        <i id="heart-icon" class="bi bi-heart icon_card_history"></i>
                        <p class="body_1" style="margin-left: 8px;">150</p>
                    </div>
                    <div class="react_number">
                        <i class="bi bi-chat-left-dots icon_card_history" style="margin-left: 16px;"></i>
                        <p class="body_1" style="margin-left: 8px;">150</p>
                    </div>
                </div>
                <i class="bi bi-three-dots"></i>
            </section>
        </article>
        `
    }

}

customElements.define('card-history', CardHistory)
export default CardHistory
class Product extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <link rel="stylesheet" href="tags.css">
            <div class="user-product-container">
                <div class="user-product-head">
                    <h5>Tipo - Nombre Producto</p>
                </div>

                <div class="user-product-body">
                    <p class="body_1">0000 0000 0000 0000</p>
                    <p class="body_1">Saldo</p>
                    <h3 class="">$000.000.000</h3>
                </div>

                <div class="user-product-data">
                    <div class="user-product-data-item">
                        <h5>Próxima Cuota</h5>
                        <p class="body_1">$000.000.000</p>
                    </div>
                    <div class="user-product-data-item">
                        <h5>Fecha Límite</h5>
                        <p class="">Dia Mes</p>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('user-product', Product)
export default Product
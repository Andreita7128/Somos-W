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
                <div class="user-product-head inversion">
                    <h5 id="product-name"><span>Tipo - Nombre Producto</span></p>
                </div>

                <div class="user-product-body">
                    <p class="body_1" id="product-id">0000 0000 0000 0000</p>
                    <p class="body_1">Saldo</p>
                    <h3 id="product-saldo">$000.000.000</h3>
                </div>

                <div class="user-product-data">
                    <div class="user-product-data-item">
                        <h5>Próxima Cuota</h5>
                        <p class="body_1" id="product-nextPay">$000.000.000</p>
                    </div>
                    <div class="user-product-data-item">
                        <h5>Fecha Límite</h5>
                        <p id="product-limit">Dia Mes</p>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('user-product', Product)
export default Product
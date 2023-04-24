class BreadComponent extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <link rel="stylesheet" href="tags.css">
            <div class="breadcrumb-title-section">
                <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>'">
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Level 1</a></li>
                    <li class="breadcrumb-item"><a href="#">Level 2</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Level 3</li>
                    </ol>
                </nav>
                <h1 class="breadcrumb-title">Titulo de la Sección</h1>
            </div>        
        `
    }
}
customElements.define('bread-n-title', BreadComponent)
export default BreadComponent
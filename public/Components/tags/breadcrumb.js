class Breadcrumb extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <link rel="stylesheet" href="tags.css">
            <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>'">
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Level 1</a></li>
                <li class="breadcrumb-item"><a href="#">Level 2</a></li>
                <li class="breadcrumb-item active" aria-current="page">Level 3</li>
                </ol>
            </nav>          
        `
    }
}
customElements.define('breadcrumb-line', Breadcrumb)
export default Breadcrumb
class Footer extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <button style="width: 500px; height: 150px; background-color: #fff"> Hola </button>
        `
    }

}

customElements.define('w-footer', Footer)
export default Footer
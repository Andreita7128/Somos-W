class Footer extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
                    `
    }

}

customElements.define('w-footer', Footer)
export default Footer
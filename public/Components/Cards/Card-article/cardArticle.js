class cardSimple extends HTMLElement {

    constructor() {
        super();

        this.recurso;
        this.titulo = 0;
        this.contenido = 0;


    }

    static get observedAttributes() {
        return [
            "recurso",
            "titulo",
            "contenido"
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "recurso":

                this.recurso = newValue

                break;

            case "titulo":

                this.titulo = newValue

                break;

            case "contenido":

                this.contenido = newValue

                break;
        }

    }

    connectedCallback() {

        this.innerHTML = `
        
        <section class="fondo-card">


        <section class="logo-section">
            <img src= "${this.recurso}" class="logo-inCard" alt="">
        </section>

        <section class="texto-card">

            <h5 class="titulo">${this.titulo}</h5>

            <p class="parrafo">
            ${this.contenido}   
            </p>

        </section>
    </section>
        
        `

    }


}

window.customElements.define("card-simple", cardSimple)


//-----------------------------------------------------------------------


class cardOrange extends HTMLElement {

    constructor() {
        super();

        this.boton;
        this.titulo;
        this.contenido;


    }

    static get observedAttributes() {
        return [
            "boton",
            "titulo",
            "contenido"
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "boton":

                this.boton = newValue

                break;

            case "titulo":

                this.titulo = newValue

                break;

            case "contenido":

                this.contenido = newValue

                break;
        }

    }

    connectedCallback() {

        this.innerHTML = `
        
        <section class="fondo-card">

        <section class="texto-card">

            <h5 class="titulo orange-type">${this.titulo}</h5>

            <p class="parrafo">
            ${this.contenido}   
            </p>

        </section>

        <button><!--  aca poner estilo de boton ♥ -->${this.boton}</button>

    </section>
        
        `

    }


}

window.customElements.define("card-orange", cardOrange)


//-----------------------------------------------------------------------

class cardBoton extends HTMLElement {

    constructor() {
        super();

        this.recurso;
        this.titulo;
        this.contenido;
        this.boton;


    }

    static get observedAttributes() {
        return [
            "recurso",
            "titulo",
            "contenido",
            "boton",
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "recurso":

                this.recurso = newValue

                break;

            case "titulo":

                this.titulo = newValue

                break;

            case "contenido":

                this.contenido = newValue

                break;

            case "boton":

                this.boton = newValue

                break;
        }

    }

    connectedCallback() {

        this.innerHTML = `
        
        <section class="fondo-card">


        <section class="logo-section">
            <img src= "${this.recurso}" class="logo-inCard" alt="">
        </section>

        <section class="texto-card">

            <h5 class="titulo">${this.titulo}</h5>

            <p class="parrafo">
            ${this.contenido}   
            </p>

        </section>

        <button><!--  aca poner estilo de boton ♥ -->${this.boton}</button>

    </section>
        
        `

    }


}

window.customElements.define("card-boton", cardBoton)

//-----------------------------------------------------------------------

class cardImagen extends HTMLElement {

    constructor() {
        super();

        this.recurso;
        this.titulo;
        this.contenido;
        this.boton;


    }

    static get observedAttributes() {
        return [
            "recurso",
            "titulo",
            "contenido",
            "boton",
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "recurso":

                this.recurso = newValue

                break;

            case "titulo":

                this.titulo = newValue

                break;

            case "contenido":

                this.contenido = newValue

                break;

            case "boton":

                this.boton = newValue

                break;
        }

    }

    connectedCallback() {

        this.innerHTML = `
        
        <section class="fondo-card">


        <section class="card-imagen">
            <img src= "${this.recurso}" class="imagen-inCard" alt="">
        </section>

        <section class="texto-card">

            <h5 class="titulo">${this.titulo}</h5>

            <p class="parrafo">
            ${this.contenido}   
            </p>

        </section>

        <button><!--  aca poner estilo de boton ♥ -->${this.boton}</button>

    </section>
        
        `

    }


}

window.customElements.define("card-imagen", cardImagen)
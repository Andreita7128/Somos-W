export class cardSimple extends HTMLElement {

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

export default cardSimple


//-----------------------------------------------------------------------


export class cardOrange extends HTMLElement {

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

export class cardBoton extends HTMLElement {

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

export class cardImagen extends HTMLElement {

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

//-----------------------------------------------------------------------


export class miniCard extends HTMLElement {

    constructor() {
        super();

        this.recurso;
        this.titulo;
        this.contenido;


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

        <section class="horizontal">

        <section class="logo-section">
            <img src= "${this.recurso}" class="logo-inCard" alt="">
        </section>

        <section class="texto-card">

            <h5 class="titulo">${this.titulo}</h5>
        </section>

        <div class="arrow"></div>

        </section>

    </section>

        
        `

    }


}

window.customElements.define("mini-card", miniCard)

//-----------------------------------------------------------------------

export class cardForBlog extends HTMLElement {

    constructor() {
        super();

        this.recurso;
        this.titulo;
        this.contenido;
        this.boton;
        this.tags;
        this.likes = 0;
        this.comments = 0;


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
            <img src="${this.recurso}" class="imagen-inCard" alt="">
        </section>

        <section class="labels-site">
            <div>tag</div> 
            <div>tag</div> 
            <div>tag</div> 
        </section>

        <section class="texto-card">

            <h5 class="titulo">${this.titulo}</h5>

            <p class="parrafo">
                ${this.contenido}
            </p>

        </section>

        <section class="card-interactions">
            <div class="left">
                <div class="likes">
                    <i class="bi bi-heart"></i><p>${this.likes}</p></div>
                <div class="comments">
                    <i class="bi bi-chat-left"></i><p>${this.comments}</p></div>
            </div>
            <div class="punticos">...</div>
        </section>

    </section>

       
        `

    }


}

window.customElements.define("card-forblog", cardForBlog)


//-----------------------------------------------------------------------

export class cardComentarios extends HTMLElement {

    constructor() {
        super();

        this.recurso;
        this.titulo;
        this.contenido;
        this.boton;
        this.tags;
        this.likes = 0;
        this.comments = 0;


    }

    static get observedAttributes() {
        return [
            "recurso",
            "titulo",
            "contenido",
            "name",
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

            case "name":

                this.name = newValue

                break;
        }

    }

    connectedCallback() {

        this.innerHTML = `   <section class="fondo-card">


        <section class="nombre-usuario">${this.name}</section>


        <section class="comentario">

            <img class="perfil-usuario" src="${this.recurso}" alt="">

            <div class="fondo-comentario">
                <p class="parrafo">
                    ${this.contenido}
                </p>
            </div>

        </section>

        <section class="card-interactions">
            <div class="left">
                <div class="likes">
                    <i class="bi bi-heart"></i>
                    <p>${this.likes}</p>
                </div>
                <div class="comments">
                    <i class="bi bi-chat-left"></i>
                    <p>${this.comments}</p>
                </div>
            </div>
            <div class="punticos">...</div>
        </section>

    </section>
        `

    }


}

window.customElements.define("card-comentario", cardComentarios)


//-----------------------------------------------------------------------

export class cardBlogDetalle extends HTMLElement {

    constructor() {
        super();



        this.recurso;
        this.titulo;
        this.contenido;
        this.tags;
        this.likes = 0;
        this.comments = 0;
        this.userprofile;
        this.name;


    }

    static get observedAttributes() {
        return [

            "recurso",
            "name",
            "titulo",
            "contenido",

            "userprofile"
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "recurso":

                this.recurso = newValue

                break;

            case "userprofile":

                this.userprofile = newValue

                break;

            case "name":

                this.name = newValue

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

        <section class="titulo-naranja">
            <img class="imagen-inOrange" src="${this.userprofile}" alt="">
            <p class="usuario-naranja">${this.name}</p>
        </section>

        <section class="card-imagen">
            <img src="${this.recurso}" class="imagen-inCard" alt="">
        </section>


        <section class="texto-card">

            <h5 class="titulo">${this.titulo}</h5>

            <p class="parrafo">
                ${this.contenido}
            </p>

        </section>

        <section class="card-interactions">
            <div class="left">
                <div class="likes">
                    <i class="bi bi-heart"></i><p>${this.likes}</p></div>
                <div class="comments">
                    <i class="bi bi-chat-left"></i><p>${this.comments}</p></div>
            </div>
            <div class="punticos">...</div>
        </section>

    </section>
        `

    }


}

window.customElements.define("card-blogdetalle", cardBlogDetalle)
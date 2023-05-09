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
        <button class="btn btn_medium btn_medium_active " ><h5><!--  aca poner estilo de boton ♥ -->${this.boton}</h5></button>
    </section>
        
        `

    }


}

window.customElements.define("card-orange", cardOrange)


//-----------------------------------------------------------------------

class cardBoton extends HTMLElement {

    constructor() {
        super();

        this.icon;
        this.recurso;
        this.titulo;
        this.contenido;
        this.boton;


    }

    static get observedAttributes() {
        return [
            "icon",
            "recurso",
            "titulo",
            "contenido",
            "boton",
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "icon":

                this.icon = newValue

                break;

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
        <i class="${this.icon} icon">
        </i>
        <section class="texto-card">
            <h5 class="titulo">${this.titulo}</h5>
            <p class="parrafo">
            ${this.contenido}   
            </p>
        </section>
        <button class="btn btn_medium btn_medium_active"><!--  aca poner estilo de boton ♥ --><h5>${this.boton}</h5></button>
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
        <div class = 'supreme'>
        
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
        <button class = 'btn btn_medium btn_medium_active'><!--  aca poner estilo de boton ♥ --><h5>${this.boton}</h5></button>
    </section>

        </div>
        
        `

    }


}

window.customElements.define("card-imagen", cardImagen)

//-----------------------------------------------------------------------


class miniCard extends HTMLElement {

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

class cardForBlog extends HTMLElement {

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
            "likes",
            "comments",
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

            case "likes":

                this.likes = newValue

                break;

            case "comments":

                this.comments = newValue

                break;
        }

    }

    connectedCallback() {

        this.innerHTML = `
        <link rel="stylesheet" href="cardArticle.css">
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

class cardComentarios extends HTMLElement {

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
            "likes",
            "comments",
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
            case "comments":

                this.comments = newValue

                break;
            case "likes":

                this.likes = newValue

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

class cardBlogDetalle extends HTMLElement {

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

            "userprofile",
            "comments",
            "likes"
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

            case "comments":

                this.comments = newValue

                break;
            case "likes":

                this.likes = newValue

                break;


        }

    }

    connectedCallback() {



        this.innerHTML = `
        <link rel="stylesheet" href="../../../public/Components/Cards/cardArticle.css">
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



//---------------------
class cardProductasas extends HTMLElement {

    constructor() {
        super();

        this.img;
        this.datacredito;
        this.cifin;
        this.meses;
        this.interes;
        this.plazos;
        this.plazo1;
        this.plazo2;
        this.plazo3;
        this.plazos1;
        this.plazos2;
        this.plazos3;
    }

    static get observedAttributes() {
        return [
            "img",
            "datacredito",
            "cifin",
            "meses",
            "intereses",
            "plazos",
            "plazo1",
            "plazo2",
            "plazo3",
            "plazos1",
            "plazos2",
            "plazos3",

        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {
        switch (nameAtr) {
            case "datacredito":
                this.datacredito = newValue;
                break;
            case "cifin":
                this.cifin = newValue;
                break;
            case "meses":
                this.meses = newValue;
                break;
            case "intereses":
                this.interes = newValue;
                break;
            case "plazos":
                this.plazos = newValue;
                break;
            case "img":
                this.img = newValue;
                break;

            case "plazo1":
                this.plazo1 = newValue;
                break;
            case "plazo2":
                this.plazo2 = newValue;
                break;
            case "plazo3":
                this.plazo3 = newValue;
                break;
            case "plazos1":
                this.plazos1 = newValue;
                break;
            case "plazos2":
                this.plazos2 = newValue;
                break;
            case "plazos3":
                this.plazos3 = newValue;
                break;

        }
    }

    connectedCallback() {
        this.innerHTML = `
    <section class="fondo-card">
    <section class="card-imagen">
      <img src="${this.img}" class="imagen-inCard" alt="">
    </section>
    <section class = "contenedores">
    <div class="row bg-dark text-white title_row">
      <div class="col">
        <h4>Datacrédito</h4>
      </div>
      <div class="col">
        <h4>CIFIN</h4>
      </div>
    </div>
    <div class="row">
      <div class="col title_col">
        <h4>${this.datacredito}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.cifin}</h4>
      </div>
    </div>
    </section>
    <section class = "contenedores">
    <div class="row bg-dark text-white title_row">
      <div class="col">
        <h4>Meses</h4>
      </div>
      <div class="col">
        <h4>Intereses</h4>
      </div>
    </div>
    <div class="row">
      <div class="col title_col">
        <h4>${this.meses}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.interes}</h4>
      </div>
    </div>
    </section>
    <section class = "contenedores">
    <div class="row bg-dark text-white title_row">
      <div class="col">
        <h4>Plazos</h4>
      </div>
      <div class="col">
      <h4>${this.plazo1}</h4>
      </div>
      <div class="col">
      <h4>${this.plazo2}</h4>
      </div>
      <div class="col">
      <h4>${this.plazo3}</h4>
      </div>
    </div>
    <div class="row ">
      <div class="col title_col">
        <h4>${this.plazos}</h4>
      </div>
      <div class="col title_col ">
        <h4>${this.plazos1}</h4>
      </div>
      <div class="col title_col ">
        <h4>${this.plazos2}</h4>
      </div>
      <div class="col title_col ">
        <h4 style = ''>${this.plazos3}</h4>
      </div>
    </div>
  </section>
  



   
    `;
    }
}

window.customElements.define("card-productasas", cardProductasas);

//-------------------------------------------------------------------------------------------------

class Cardproducttablas extends HTMLElement {

    constructor() {
        super();

        this.img;
        this.titulo1;
        this.titulo2;
        this.titulo3;
        this.titulo4;
        this.titulo5;
        this.datocola1;
        this.datocola2;
        this.datocola3;
        this.datocola4;
        this.datocola5;
        this.datocolb1;
        this.datocolb2;
        this.datocolb3;
        this.datocolb4;
        this.datocolb5;
        this.datocolc1;
        this.datocolc2;
        this.datocolc3;
        this.datocolc4;
        this.datocolc5;
        this.datocold1;
        this.datocold2;
        this.datocold3;
        this.datocold4;
        this.datocold5;
        this.datocole1;
        this.datocole2;
        this.datocole3;
        this.datocole4;
        this.datocole5;
        this.datocolf1;
        this.datocolf2;
        this.datocolf3;
        this.datocolf4;
        this.datocolf5;
    }

    static get observedAttributes() {
        return [
            "img",
            "titulo1",
            "titulo2",
            "titulo3",
            "titulo4",
            "titulo5",
            "datocola1",
            "datocola2",
            "datocola3",
            "datocola4",
            "datocola5",
            "datocolb1",
            "datocolb2",
            "datocolb3",
            "datocolb4",
            "datocolb5",
            "datocolc1",
            "datocolc2",
            "datocolc3",
            "datocolc4",
            "datocolc5",
            "datocold1",
            "datocold2",
            "datocold3",
            "datocold4",
            "datocold5",
            "datocole1",
            "datocole2",
            "datocole3",
            "datocole4",
            "datocole5",
            "datocolf1",
            "datocolf2",
            "datocolf3",
            "datocolf4",
            "datocolf5",


        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {
        switch (nameAtr) {
            case "img":
                this.img = newValue;
                break;
                //Columnas
            case "titulo1":
                this.titulo1 = newValue;
                break;
            case "titulo2":
                this.titulo2 = newValue;
                break;
            case "titulo3":
                this.titulo3 = newValue;
                break;
            case "titulo4":
                this.titulo4 = newValue;
                break;

            case "titulo5":
                this.titulo5 = newValue;
                break;


                //Filas   
            case "datocola1":
                this.datocola1 = newValue;
                break;

            case "datocola2":
                this.datocola2 = newValue;
                break;
            case "datocola3":
                this.datocola3 = newValue;
                break;
            case "datocola4":
                this.datocola4 = newValue;
                break;
            case "datocola5":
                this.datocola5 = newValue;
                break;

            case "datocolb1":
                this.datocolb1 = newValue;
                break;
            case "datocolb2":
                this.datocolb2 = newValue;
                break;
            case "datocolb3":
                this.datocolb3 = newValue;
                break;
            case "datocolb4":
                this.datocolb4 = newValue;
                break;
            case "datocolb5":
                this.datocolb5 = newValue;
                break;
            case "datocolc1":
                this.datocolc1 = newValue;
                break;
            case "datocolc2":
                this.datocolc2 = newValue;
                break;

            case "datocolc3":
                this.datocolc3 = newValue;
                break;
            case "datocolc4":
                this.datocolc4 = newValue;
                break;
            case "datocolc5":
                this.datocolc5 = newValue;
                break;
            case "datocold1":
                this.datocold1 = newValue;
                break;
            case "datocold2":
                this.datocold2 = newValue;
                break;
            case "datocold3":
                this.datocold3 = newValue;
                break;
            case "datocold4":
                this.datocold4 = newValue;
                break;
            case "datocold5":
                this.datocold5 = newValue;
                break;
            case "datocole1":
                this.datocole1 = newValue;
                break;
            case "datocole2":
                this.datocole2 = newValue;
                break;
            case "datocole3":
                this.datocole3 = newValue;
                break;
            case "datocole4":
                this.datocole4 = newValue;
                break;
            case "datocole5":
                this.datocole5 = newValue;
                break;


            case "datocolf1":
                this.datocolf1 = newValue;
                break;
            case "datocolf2":
                this.datocolf2 = newValue;
                break;
            case "datocolf3":
                this.datocolf3 = newValue;
                break;
            case "datocolf4":
                this.datocolf4 = newValue;
                break;
            case "datocolf5":
                this.datocolf5 = newValue;
                break;
            case "datocolg1":
                this.datocolg1 = newValue;
                break;
            case "datocolg2":
                this.datocolg2 = newValue;
                break;
            case "datocolg3":
                this.datocolg3 = newValue;
                break;
            case "datocolg4":
                this.datocolg4 = newValue;
                break;

            case "datocolg5":
                this.datocolg5 = newValue;
                break;





        }
    }

    connectedCallback() {
        this.innerHTML = `
        <section class="fondo-card">
        <section class="card-imagen">
          <img src="${this.img}" class="imagen-inCard" alt="">
        </section>
        <section class="contenedores">
    <div class="row bg-dark text-white title_row2">
      <div class="col">
        <h4>${this.titulo1}</h4>
      </div>
      <div class="col">
        <h4>${this.titulo2}</h4>
      </div>
      <div class="col">
        <h4>${this.titulo3}</h4>
      </div>
      <div class="col">
        <h4>${this.titulo4}</h4>
      </div>
      <div class="col">
        <h4>${this.titulo5}</h4>
      </div>
    </div>
    <div class="row locura">
      <div class="col title_col">
        <h4>${this.datocola1}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocola2}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocola3}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocola4}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocola5}</h4>
      </div>
      <div class="w-100"></div> <!-- Divisor de fila -->
      <div class="col title_col">
        <h4>${this.datocolb1}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocolb2}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocolb3}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocolb4}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocolb5}</h4>
      </div>
      <div class="w-100"></div> <!-- Divisor de fila -->
      <div class="col title_col">
        <h4>${this.datocolc1}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocolc2}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocolc3}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocolc4}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocolc5}</h4>
      </div>
      <div class="w-100"></div> <!-- Divisor de fila -->
      <div class="col title_col">
        <h4>${this.datocold1}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocold2}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocold3}</h4>
      </div>
      <div class="col title_col">
      <h4>${this.datocold4}</h4>
    </div>
    <div class="col title_col">
      <h4>${this.datocold5}</h4>
    </div>
        </section>
      </section>
      



   
    `;
    }
}

window.customElements.define("card-productabla5", Cardproducttablas);

//-----------------------------------------------------------------------------------------------------------------
class Cardtablatres extends HTMLElement {

    constructor() {
        super();

        this.img;
        this.titulo1;
        this.titulo2;
        this.titulo3;

        this.datocola1;
        this.datocola2;
        this.datocola3;

        this.datocolb1;
        this.datocolb2;
        this.datocolb3;

        this.datocolc1;
        this.datocolc2;
        this.datocolc3;

        this.datocold1;
        this.datocold2;
        this.datocold3;

        this.datocole1;
        this.datocole2;
        this.datocole3;

        this.datocolf1;
        this.datocolf2;
        this.datocolf3;

    }

    static get observedAttributes() {
        return [
            "img",
            "titulo1",
            "titulo2",
            "titulo3",


            "datocola1",
            "datocola2",
            "datocola3",


            "datocolb1",
            "datocolb2",
            "datocolb3",


            "datocolc1",
            "datocolc2",
            "datocolc3",


            "datocold1",
            "datocold2",
            "datocold3",


            "datocole1",
            "datocole2",
            "datocole3",


            "datocolf1",
            "datocolf2",
            "datocolf3",




        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {
        switch (nameAtr) {
            case "img":
                this.img = newValue;
                break;
                //Columnas
            case "titulo1":
                this.titulo1 = newValue;
                break;
            case "titulo2":
                this.titulo2 = newValue;
                break;
            case "titulo3":
                this.titulo3 = newValue;
                break;



                //Filas   
            case "datocola1":
                this.datocola1 = newValue;
                break;

            case "datocola2":
                this.datocola2 = newValue;
                break;
            case "datocola3":
                this.datocola3 = newValue;
                break;


            case "datocolb1":
                this.datocolb1 = newValue;
                break;
            case "datocolb2":
                this.datocolb2 = newValue;
                break;
            case "datocolb3":
                this.datocolb3 = newValue;
                break;

            case "datocolc1":
                this.datocolc1 = newValue;
                break;
            case "datocolc2":
                this.datocolc2 = newValue;
                break;

            case "datocolc3":
                this.datocolc3 = newValue;
                break;

            case "datocold1":
                this.datocold1 = newValue;
                break;
            case "datocold2":
                this.datocold2 = newValue;
                break;
            case "datocold3":
                this.datocold3 = newValue;
                break;

            case "datocole1":
                this.datocole1 = newValue;
                break;
            case "datocole2":
                this.datocole2 = newValue;
                break;
            case "datocole3":
                this.datocole3 = newValue;
                break;



            case "datocolf1":
                this.datocolf1 = newValue;
                break;
            case "datocolf2":
                this.datocolf2 = newValue;
                break;
            case "datocolf3":
                this.datocolf3 = newValue;
                break;

            case "datocolg1":
                this.datocolg1 = newValue;
                break;
            case "datocolg2":
                this.datocolg2 = newValue;
                break;
            case "datocolg3":
                this.datocolg3 = newValue;
                break;





        }
    }

    connectedCallback() {
        this.innerHTML = `
        <section class="fondo-card">
        <section class="card-imagen">
          <img src="${this.img}" class="imagen-inCard" alt="">
        </section>
        <section class="contenedores">
    <div class="row bg-dark text-white title_row2">
      <div class="col">
        <h4>${this.titulo1}</h4>
      </div>
      <div class="col">
        <h4>${this.titulo2}</h4>
      </div>
      <div class="col">
        <h4>${this.titulo3}</h4>
      </div>
   
    </div>
    <div class="row locura">
      <div class="col title_col">
        <h4>${this.datocola1}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocola2}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocola3}</h4>
      </div>
      
      <div class="w-100"></div> <!-- Divisor de fila -->
      <div class="col title_col">
        <h4>${this.datocolb1}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocolb2}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocolb3}</h4>
      </div>
     
      <div class="w-100"></div> <!-- Divisor de fila -->
      <div class="col title_col">
        <h4>${this.datocolc1}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocolc2}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocolc3}</h4>
      </div>
 
      <div class="w-100"></div> <!-- Divisor de fila -->
      <div class="col title_col">
        <h4>${this.datocold1}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocold2}</h4>
      </div>
      <div class="col title_col">
        <h4>${this.datocold3}</h4>
      </div>
  
        </section>
      </section>
      



   
    `;
    }
}

window.customElements.define("card-productabla3", Cardtablatres);

// --------------------------------------------------------------------------------

class cardImg extends HTMLElement {

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

        <div class = 'supreme'>
        
        <section class="fondo-card imagefondo">
        <section class="card-imagen">
            <img src= "${this.recurso}" class="imagen-inCard" alt="">
        </section>
        <section class="texto-card" style="display: flex; align-items: center;" >
            <h5 class="titulo" style=" margin-top: 40px;">${this.titulo}</h5>
            <p class="parrafo" style="text-align: center;">
            ${this.contenido}   
            </p>
        </section>
        <button  class = 'btn btn_large btn_large_outline btn_large_active btn_large_outline_active' style="display: flex; justify-content: space-around; align-items:center;"><div></div><h5>${this.boton}</h5> <i class="bi bi-arrow-right"></i> </button>
    </section>

        </div>
        
        `

    }


}

window.customElements.define("card-productosimg", cardImg)
export default class salvavidasComp extends HTMLElement {

    constructor() {
        super();

        this.algo;

    }

    static get observedAttributes() {
        return ["algo"]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "algo":

                this.algo = newValue

                break;
        }

    }

    connectedCallback() {

        this.innerHTML = `
        <section class="contenedor">
        <input type="checkbox" name="" id="btn-plus">
        <section id="content-in-help">

            <section class="to-search-salvavidas">
                <h5>barra de busqueda</h5>
            </section>
            
            <section class="preguntas-sugeridas">
                <div id="preguntas-frecuentes-titulo">
                    <p class="title-salvavidas-preguntas"> Preguntas Frecuentes</p>
                </div>
                <div id="preguntas-frecuentes-sugerencias">
                   <button class="pregunta-frecuente-salvavidas" id="microcredito_salvalogo"> ¿Cómo sacar un credito? </button> 
                   <button class="pregunta-frecuente-salvavidas"> ¿Cómo solicitar un Gota Ahorro? </button> 
                   <button class="pregunta-frecuente-salvavidas"> ¿Cómo ingresar a yo construyo? </button> 
                </div>
            
            
            </section>
            <section >
                <button id="just-to-know">Educación financiera</button> 
            </section>

        </section>
        <div class="btn-more">
            <label for="btn-plus" class="salvavidas-logo"><img id="salvalogo" src="./recursos/imagenes/salvalogo-default.svg" width="80"
                    alt="Boton salvavidas"></label>
        </div>
    </section>
        `

    }


}

window.customElements.define("salvavidas-comp", salvavidasComp)


document.getElementById("microcredito_salvalogo").addEventListener("click", changeToMicro);

function changeToMicro () {




    document.getElementById("content-in-help").innerHTML = `
    
    <section class="to-search-salvavidas">
                    <button id= "borrar">otra barrita</button>
            </section>

            <section class="preguntas-sugeridas">
                <div id="preguntas-frecuentes-titulo">
                    <p class="title-salvavidas-preguntas"> Preguntas Frecuentes</p>
                </div>
            </section>

            <section id ="info-salvalogo">
                <h5 id="tittle-info-salvalogo">Cómo solicitar un credito</h5>

                <p class="texto-en-info"> Para realizar esta tarea requerimos que sigas los siguientes pasos: </p>

                <img id="img-in-salvalogo" src="form 1.png" alt="">
            </section>
    `;

    

document.getElementById("borrar").addEventListener("click",returnToMain);




 }


function returnToMain () {

    console.log(document.getElementById("content-in-help").innerHTML)

    document.getElementById("content-in-help").innerHTML = "";

    document.getElementById("content-in-help").innerHTML = `
    
    <section id="borrar" class="to-search-salvavidas">
   <h5 >otra barrita</h5>
</section>

<section class="preguntas-sugeridas">
    <div id="preguntas-frecuentes-titulo">
        <p class="title-salvavidas-preguntas"> Preguntas Frecuentes</p>
    </div>
    <div id="preguntas-frecuentes-sugerencias">
       <button class="pregunta-frecuente-salvavidas" id="microcredito_salvalogo"> ¿Cómo sacar un credito? </button> 
       <button class="pregunta-frecuente-salvavidas"> ¿Cómo solicitar un Gota Ahorro? </button> 
       <button class="pregunta-frecuente-salvavidas"> ¿Cómo ingresar a yo construyo? </button> 
    </div>


</section>
<section >
    <button id="just-to-know">Educación financiera</button> 
</section>
    
`     ;

console.log(document.getElementById("borrar").innerHTML);


document.getElementById("microcredito_salvalogo").addEventListener("click",returnToMain);





}
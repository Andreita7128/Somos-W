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

        <section class="saludo-salva"><p>¡Como estas! Estoy para ayudarte
        en lo que necesites.</p><img src="./recursos/imagenes/mascota.png" alt="" srcset=""></section>
    

        <section class="to-search-salvavidas">
            <h5>barra de busqueda</h5>
        </section>
        
        <section class="preguntas-sugeridas">
            <div id="preguntas-frecuentes-titulo">
                <p class="title-salvavidas-preguntas"> Preguntas Frecuentes</p> 
                <button id="vermas" style = "color: #00B1BB; text-decoration: underline;"class="btn_large_transparent">Quiero ver mas</button>

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
document.getElementById("vermas").addEventListener("click", changeToVermas);
function changeToVermas() {
    document.getElementById("content-in-help").innerHTML = `<section class="encabezado">
<i class="bi bi-arrow-left-short x "></i><p class="h5"style="color: #000;font-size: 14px; font-weight:bold;">Recomendado para ti</p>
</section>
<section class="lista-botones">

<button style="height: 30px !important;" class="btn btn_large_outline btn_large_outline_active">¿Cómo solicitar un Gota Ahorro?</button>
<button style="height: 30px !important;" class="btn btn_large_outline btn_large_outline_active">¿Cómo solicitar un Crédito?</button>
<button style="height: 30px !important;" class="btn btn_large_outline btn_large_outline_active">No se como crear un perfil</button>
<button style="height: 30px !important;" class="btn btn_large_outline btn_large_outline_active">Cómo lograr un CDT</button>
<button style="height: 30px !important;" class="btn btn_large_outline btn_large_outline_active">Donde esta el blog</button>
<button style="height: 30px !important;" class="btn btn_large_outline btn_large_outline_active">¿Cómo ingresar a Yo construyo?</button>
<button style="height: 30px !important;" class="btn btn_large_outline btn_large_outline_active">¿Cómo hacer un ahorro?</button>

</section>`
}

function changeToMicro() {




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



    document.getElementById("borrar").addEventListener("click", returnToMain);




}


function returnToMain() {

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
    
`;

    console.log(document.getElementById("borrar").innerHTML);


    document.getElementById("microcredito_salvalogo").addEventListener("click", returnToMain);



}
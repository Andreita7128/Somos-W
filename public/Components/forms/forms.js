class Forms extends HTMLElement {
    constructor() {
        super()
}

connectedCallback() {
    this.render()
}


render() {
    this.innerHTML = `
    <link rel="stylesheet" href="forms.css">
    <div class="row">
    <div class="col md-6 col-md-offset-3">
        <form id="msform">
            <!-- progressbar -->
            <ul id = "progressbar">
                <li class="active">
                    Datos de Usuario
                </li>

                <li>
                    <!-- Segundo paso -->
                </li>


            </ul>

            <fieldset>
                <h2 class="fs-title">Personal details</h2>
                <h3 class = "fs-title">los campos marcados con (*) son obligatorios.</h3>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Tipo de documento
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">Cedula de ciudadanía</a></li>
                      <li><a class="dropdown-item" href="#">Cedula de extranjería</a></li>
                      <li><a class="dropdown-item" href="#">NIT</a></li>
                    </ul>
                  </div>
                  <input type="text" name="document" placeholder="Ingresa tu cedula">
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Seleccionar
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">Giros</a></li>
                      <li><a class="dropdown-item" href="#">CDT</a></li>
                      <li><a class="dropdown-item" href="#">Seguro</a></li>
                    </ul>
                  </div>
                <input type="text" name = "fname" placeholder="Escriba su nombre aquí">
                <input type="text" name="lname" placeholder="Escriba su apellido aquí">

                <input type="button" name="next" class="next action-button" value="Continuar"/>
                

            </fieldset>

            <fieldset>
            <h2 class="fs-title">Ciudad y demas</h2>
            <h3 class = "fs-title">los campos marcados con (*) son obligatorios.</h3>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Celular
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">Cedula de ciudadanía</a></li>
                  <li><a class="dropdown-item" href="#">Cedula de extranjería</a></li>
                  <li><a class="dropdown-item" href="#">NIT</a></li>
                </ul>
              </div>

              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Celular
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">Cedula de ciudadanía</a></li>
                  <li><a class="dropdown-item" href="#">Cedula de extranjería</a></li>
                  <li><a class="dropdown-item" href="#">NIT</a></li>
                </ul>
              </div>


              <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Celular
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Cedula de ciudadanía</a></li>
                <li><a class="dropdown-item" href="#">Cedula de extranjería</a></li>
                <li><a class="dropdown-item" href="#">NIT</a></li>
              </ul>
            </div>
            <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
            <input type="button" name="next" class="next action-button" value="Next"/>
        






        </fieldset>

        </div>

        </div>

        









        </form>



    </div>








</div>








</div>

    `
}

}

customElements.define('w-form', Forms)
export default Forms
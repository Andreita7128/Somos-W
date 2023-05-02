class Forms extends HTMLElement {
  constructor() {
    super();
    this.currentStep = 1;
    this.form = null;
    this.progressBar = null;
    this.img = "";
  }

  connectedCallback() {
    this.render();
    this.form = document.querySelector("#formulario");
    this.progressBar = document.querySelector(".progress-bar");
    this.img = this.getAttribute("img");
    this.addListeners();
  }

  static get observedAttributes(){
    return['img'];
  }

  attributeChangedCallback(nameAtr,oldValue,newValue){
    switch(nameAtr){
      case "img":
        this.img = newValue
        break;
    }
  }
  render() {
    this.innerHTML = `
      <link rel="stylesheet" href="forms.css">
 
      <section class="fondo-card">
      <section class="card-imagen">
        <img src="${this.img}" class="imagen-inCard" alt="">
      </section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <form id="formulario" method="post" action="">
            <label for="nombre" class="my-label">Los campos marcados con (*) son obligatorios.</label>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div id="etapa-1">
                <div class="form-group">
                  <div class="dropdown">
                    <button class="btn btn_large_outline_active formdrop dropdown-toggle text-start" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Cédula de ciudadanía 
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">Cédula de extranjería</a></li>
                      <li><a class="dropdown-item" href="#">NIT</a></li>
                    </ul>
                  </div>
                  <label for="nombre">Número de documento:</label>
                  <input type="text" class="form-control form-input" id="nombre" placeholder="1041259846">
                </div>
                <div class="form-group">
                  <div class="dropdown">
                    <button class="btn btn_large_outline_active formdrop dropdown-toggle text-start" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                      Producto
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                      <li><a class="dropdown-item" href="#">Microcrédito</a></li>
                      <li><a class="dropdown-item" href="#">Gotahorro</a></li>
                      <li><a class="dropdown-item" href="#">Inmueble productivo</a></li>
                      <li><a class="dropdown-item" href="#">Crédito de vehículo</a></li>
                      <li><a class="dropdown-item" href="#">CDT</a></li>
                      <li><a class="dropdown-item" href="#">Cuenta de ahorro</a></li>
                      <li><a class="dropdown-item" href="#">Deposito de bajo monto</a></li>
                      <li><a class="dropdown-item" href="#">Reclamar giros</a></li>
                      <li><a class="dropdown-item" href="#">Enviar giros</a></li>
                    </ul>
                  </div>
                  <label for="nombre">Nombre:</label>
                  <input type="text" class="form-control form-input" id="nombre" placeholder="Nombre">
                </div>
                <div class="form-group">
                  <label for="nombre">Apellido:</label>
                  <input type="text" class="form-control form-input" id="apellido" placeholder="Apellido">
                </div>
                <div class="col-md-12 text-center">
                  <button type="button" class="btn btn_continuar siguiente">Continuar <i class="bi bi-arrow-right float-end"></i></button>
                </div>
              </div>
              <div id="etapa-2" style="display:none;">
                <div class="form-group">
                <label for="nombre">Celular:</label>
                  <input type="email" class="form-control" id="email" placeholder="Ingresa tu numero celular">
                </div>

                <div class="form-group">
                <label for="nombre">Departamento:</label>
                <div class="dropdown">
                    <button class="btn btn_large_outline_active formdrop dropdown-toggle text-start" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                      Departamento
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                      <li><a class="dropdown-item" href="#">Amazonas</a></li>
                      <li><a class="dropdown-item" href="#">Antioquia</a></li>
                      <li><a class="dropdown-item" href="#">Arauca</a></li>
                      <li><a class="dropdown-item" href="#">Atlantico</a></li>
                      <li><a class="dropdown-item" href="#">Bolivar</a></li>
                      <li><a class="dropdown-item" href="#">Boyaca</a></li>
                      <li><a class="dropdown-item" href="#">Caldas</a></li>
                      <li><a class="dropdown-item" href="#">Caqueta</a></li>
                      <li><a class="dropdown-item" href="#">Casanare</a></li>
                      <li><a class="dropdown-item" href="#">Cauca</a></li>
                      <li><a class="dropdown-item" href="#">Cesar</a></li>
                      <li><a class="dropdown-item" href="#">Choco</a></li>
                      <li><a class="dropdown-item" href="#">Cordoba</a></li>
                      <li><a class="dropdown-item" href="#">Cundinamarca</a></li>
                      <li><a class="dropdown-item" href="#">Guainía</a></li>
                      <li><a class="dropdown-item" href="#">Guaviare</a></li>
                      <li><a class="dropdown-item" href="#">Huila</a></li>
                      <li><a class="dropdown-item" href="#">La Guajira</a></li>
                      <li><a class="dropdown-item" href="#">Magdalena</a></li>
                      <li><a class="dropdown-item" href="#">Meta</a></li>
                      <li><a class="dropdown-item" href="#">Nariño</a></li>
                      <li><a class="dropdown-item" href="#">Norte de Santander</a></li>
                      <li><a class="dropdown-item" href="#">Putumayo</a></li>
                      <li><a class="dropdown-item" href="#">Quindio</a></li>
                      <li><a class="dropdown-item" href="#">Risaralda</a></li>
                      <li><a class="dropdown-item" href="#">San Andrés y Providencia</a></li>
                      <li><a class="dropdown-item" href="#">Valle del Cauca</a></li>

                    </ul>
                  </div>
                
                </div>

                <div class="form-group">
                <label for="nombre">Ciudad:</label>
                <div class="dropdown">
                    <button class="btn btn_large_outline_active formdrop dropdown-toggle text-start" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                      Departamento
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                      <li><a class="dropdown-item" href="#">Cali</a></li>
                      <li><a class="dropdown-item" href="#">Popayan</a></li>
                      <li><a class="dropdown-item" href="#">Medellin</a></li>
                      <li><a class="dropdown-item" href="#">Bogota</a></li>
                      <li><a class="dropdown-item" href="#">Cartagena</a></li>
                    </ul>
                  </div>
                </div>
                <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="terms">
  <label class="form-check-label" for="terms">
    Acepto los términos y condiciones
  </label>
</div>

                <button type="button" class="btn btn_large_outline_active anterior text-center">Anterior</button>
                <button type="submit" class="btn btn_large_active">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    `;
  }

  addListeners() {
    const siguienteBtn = document.querySelector(".siguiente");
    const anteriorBtn = document.querySelector(".anterior");

    siguienteBtn.addEventListener("click", () => {
      this.mostrarSiguienteEtapa();
    });

    anteriorBtn.addEventListener("click", () => {
      this.mostrarAnteriorEtapa();
    });
  }

  mostrarSiguienteEtapa() {
    const etapaActual = document.querySelector(`#etapa-${this.currentStep}`);
    const siguienteEtapa = etapaActual.nextElementSibling;

    if (siguienteEtapa) {
      etapaActual.style.display = "none";
      siguienteEtapa.style.display = "block";
      this.currentStep++;

      this.actualizarProgressBar();
    }
  }

  mostrarAnteriorEtapa() {
    const etapaActual = document.querySelector(`#etapa-${this.currentStep}`);
    const anteriorEtapa = etapaActual.previousElementSibling;

    if (anteriorEtapa) {
      etapaActual.style.display = "none";
      anteriorEtapa.style.display = "block";
      this.currentStep--;

      this.actualizarProgressBar();
    }
  }

  actualizarProgressBar() {
    const porcentajeCompletado = (this.currentStep - 1) * 50;
    this.progressBar.style.width = `${porcentajeCompletado}%`;
  }
}
customElements. define('w-form',Forms)
export default Forms
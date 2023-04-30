class Sidebarproduct extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="/public/Components/Sidebarproduct/sidebarproduct.css">
        <div class="container-fluid">
  <div class="row">
    <!-- Sidebar -->
    <div class="col-lg-3 col-md-4 d-none d-md-block tam-sidebar">
      <div class=" border-right" id="sidebar-wrapper">
     
        <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action rounded-pill border btn-sidebar ">Solicitar mi crédito</a>
            <a href="/Crédito/credito.html/idk" class="list-group-item list-group-item-action rounded-pill border btn-sidebar ">Caracteristicas</a>
            <a href="#" class="list-group-item list-group-item-action rounded-pill border btn-sidebar ">Requisitos</a>
            <a href="#" class="list-group-item list-group-item-action rounded-pill border btn-sidebar ">Tasas y tarifas</a>
            <a href="#" class="list-group-item list-group-item-action rounded-pill border btn-sidebar ">Cancelar mi credito</a>
            <a href="#" class="list-group-item list-group-item-action rounded-pill border btn-sidebar ">Mi información</a>
        </div>
      </div>
    </div>
    <!-- /Sidebar -->

    <!-- Contenido principal -->
    <div class="col-lg-9 col-md-8">
     
    </div>
    <!-- /Contenido principal -->
  </div>
</div>

      
       
        `
    }
}
customElements.define('product-sidebar', Sidebarproduct)
export default Sidebarproduct
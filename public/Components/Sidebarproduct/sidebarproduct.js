class Sidebarproduct extends HTMLElement {
  constructor() {
    super();
    this.reference = '';
  }

  static get observedAttributes() {
    return ['reference'];
  }

  connectedCallback() {
    this.reference = this.getAttribute('reference') || this.defaultAttributeValue('reference');
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'reference') {
      this.reference = newValue;
      this.render();
    }
  }

  defaultAttributeValue(name) {
    const attribute = this.getAttributeNode(name);
    return attribute?.defaultValue ?? '';
  }

  render() {
    this.innerHTML = `
      <link rel="stylesheet" href="/public/Components/Sidebarproduct/sidebarproduct.css">
      <div class="container-fluid">
        <div class="row">
          <!-- Sidebar -->
          <div class="col-lg-3 col-md-4 d-none d-md-block tam-sidebar">
            <div class="border-right" id="sidebar-wrapper">
              <div class="list-group list-group-flush">
                <a href="${this.reference}#formulario" class="list-group-item list-group-item-action rounded-pill border btn-sidebar">Solicitar mi crédito</a>
                <a href="${this.reference}#caracteristicas" class="list-group-item list-group-item-action rounded-pill border btn-sidebar">Características</a>
                <a href="${this.reference}#requisitos" class="list-group-item list-group-item-action rounded-pill border btn-sidebar">Requisitos</a>
                <a href="${this.reference}#tasas" class="list-group-item list-group-item-action rounded-pill border btn-sidebar">Tasas y tarifas</a>
                <a href="${this.reference}#cancelar" class="list-group-item list-group-item-action rounded-pill border btn-sidebar">Cancelar mi crédito</a>
                <a href="${this.reference}#" class="list-group-item list-group-item-action rounded-pill border btn-sidebar">Mi información</a>
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
    `;
  }
}

customElements.define('product-sidebar', Sidebarproduct);

export default Sidebarproduct;

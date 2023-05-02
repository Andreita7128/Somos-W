class Sidebar extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <link rel="stylesheet" href="tags.css">
            <div class="sidebar-container d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" >
                <h3 class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span class="fs-4">Mi Perfil W</span>
                </h3>
        
                <hr>
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="side-item">
                        <a href="/Perfil/perfil.html" class="nav-link side-link active" aria-current="page">
                        <i class="bi bi-person"></i>
                        <span>Perfil</span>
                        </a>
                    </li>
                    
                    <li class="side-item">
                        <a href="/Perfil/productos.html" class="side-link nav-link link-body-emphasis">
                        <i class="bi bi-wallet2"></i>
                        <span>Tus Productos</span>
                        </a>
                    </li>

                    <li class="side-item">
                        <a href="#" class="side-link nav-link link-body-emphasis">
                        <i class="bi bi-send"></i>
                        <span>Giros Internacionales</span>
                        </a>
                    </li>

                    <li class="side-item">
                        <a href="#" class="side-link nav-link link-body-emphasis">
                        <i class="bi bi-piggy-bank"></i>
                        <span>Alcancias</span>
                        </a>
                    </li>

                    <li class="side-item">
                        <a href="/Perfil/agenda.html" class="side-link nav-link link-body-emphasis">
                        <i class="bi bi-calendar-week"></i>
                        <span>Agenda Financiera</span>
                        </a>
                    </li>

                    <li class="side-item">
                        <a href="/Perfil/extractos.html" class="side-link nav-link link-body-emphasis">
                        <i class="bi bi-file-earmark-text"></i>
                        <span>Extractos y Certificados</span>
                        </a>
                    </li>
                </ul>
            </div>
        `
    }
}
customElements.define('user-sidebar', Sidebar)
export default Sidebar